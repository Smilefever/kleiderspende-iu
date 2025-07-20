import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import krisengebiete from '../data/krisengebiete.json';
import kleidungsartenListe from '../data/kleidungsartenListe.json';
import SpendenquittungHinweis from '../components/SpendenquittungHinweis';


// Hilfsfunktion: Liefert die nächsten 14 Werktage (Mo-Fr) ab morgen als ISO-Datumsstrings zurück
function getArbeitstage(startDate, tage = 14) {
  const arbeitstage = [];
  let date = new Date(startDate);
  for (let i = 1; arbeitstage.length < tage; i++) {
    const next = new Date(date);
    next.setDate(date.getDate() + i);
    const weekday = next.getDay();
    if (weekday > 0 && weekday < 6) {
      arbeitstage.push(next.toISOString().slice(0, 10));
    }
  }
  return arbeitstage;
}

// PLZ-Präfix der Geschäftsstelle (nur aus diesem Bereich ist Abholung möglich)
const geschaeftsstellePLZPrefix = '12';

// Generiere verfügbare Abhol-/Abgabetage ab heute
const heute = new Date();
const verfuegbareAbholtage = getArbeitstage(heute);


/**
 * Hauptkomponente:
 * Formular zur Erfassung und Validierung einer Kleiderspende.
 * Enthält Auswahl von Übergabeart, Adresse, Datum, Kleidungsarten und Krisengebiet.
 * Nach erfolgreicher Validierung werden die Daten im localStorage gespeichert
 * und der Nutzer zur Bestätigungsseite weitergeleitet.
 */

export default function Spende() {
    // State-Variablen für die Formulardaten
  const [deliveryMethod, setDeliveryMethod] = useState('');
  const [address, setAddress] = useState({ street: '', zip: '', city: '' });
  const [kleidungsarten, setKleidungsarten] = useState(
    kleidungsartenListe.map((art) => ({ art, anzahl: '' }))
  );
  const [krisengebiet, setKrisengebiet] = useState('');
  const [datum, setDatum] = useState('');
  const [fehler, setFehler] = useState('');

  const navigate = useNavigate();

  /**
   * Aktualisiert die Anzahl einer bestimmten Kleidungsart im State.
   */

  const handleKleidungsartChange = (index, value) => {
    const neueKleidungsarten = [...kleidungsarten];
    neueKleidungsarten[index].anzahl = value;
    setKleidungsarten(neueKleidungsarten);
  };

  /**
   * Aktualisiert die Adresse im State.
   */
  const handleAddressChange = (feld, value) => {
    setAddress((prev) => ({ ...prev, [feld]: value }));
  };

  /**
   * Validiert das Formular und gibt true zurück, wenn alles korrekt ausgefüllt ist.
   * Setzt im Fehlerfall eine passende Fehlermeldung.
   */
  const validateForm = () => {
    let currentFehler = '';

    if (deliveryMethod) {
      if (!krisengebiet) {
        currentFehler = 'Bitte wähle ein Krisengebiet aus.';
      } else if (!datum) {
        currentFehler = 'Bitte wähle ein Datum für Abgabe oder Abholung.';
      } else {
        const summeAnzahl = kleidungsarten.reduce(
          (sum, k) => sum + (parseInt(k.anzahl) > 0 ? parseInt(k.anzahl) : 0),
          0
        );
        if (summeAnzahl === 0) {
          currentFehler = 'Bitte gib mindestens eine Kleidungsart mit Anzahl an.';
        } else if (deliveryMethod === 'abholung') {
          if (!address.street.trim() || !address.zip.trim() || !address.city.trim()) {
            currentFehler = 'Bitte gib die vollständige Abholadresse an.';
          } else if (address.zip.substring(0, 2) !== geschaeftsstellePLZPrefix) {
            currentFehler = `Die Abholadresse muss in der Nähe der Geschäftsstelle liegen (PLZ beginnt mit "${geschaeftsstellePLZPrefix}").`;
          } else {
            const selectedDate = new Date(datum);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            if (selectedDate <= today) {
              currentFehler = 'Der Abholtermin muss in der Zukunft liegen.';
            }
          }
        }
      }
    } else {
      currentFehler = 'Bitte wähle zuerst die Art der Übergabe aus.';
    }

    setFehler(currentFehler);
    return currentFehler === '';
  };

   /**
   * Beim Absenden: Validierung durchführen, Daten speichern und weiterleiten.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const spendenDaten = {
      deliveryMethod,
      address,
      kleidungsarten,
      krisengebiet,
      datum,
    };
    localStorage.setItem('spendenDaten', JSON.stringify(spendenDaten));
    navigate('/confirmation');
  };

  return (
    <div className="container mx-auto max-w-xl px-4">
      <h1 className="text-3xl pt-8 font-extrabold text-center mb-6 text-emerald-900">Jetzt spenden</h1>
      <p className="text-center text-gray-700 mb-8">
        Unterstütze KleiderHelden mit deiner Spende! Jeder Beitrag hilft, unsere Projekte und Hilfsaktionen weiterzuführen.
      </p>

      <div className="max-w-xl w-full mx-auto mt-10 bg-white rounded-xl shadow p-6">
        <form onSubmit={handleSubmit} id="spendenForm" className="space-y-8">
          <h2 className="text-2xl font-bold text-emerald-800 mb-6">Kleiderspende registrieren</h2>

          {/* Schritt 1: Übergabeart wählen */}
          <div className="mb-6">
            <label className="block mb-2 text-gray-700 font-semibold">Schritt 1: Übergabeart wählen</label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input type="radio" name="spendenart" value="uebergabe" className="mr-2 form-radio text-emerald-600"
                  checked={deliveryMethod === 'uebergabe'} onChange={(e) => setDeliveryMethod(e.target.value)} required />
                Übergabe an der Geschäftsstelle
              </label>
              <label className="flex items-center">
                <input type="radio" name="spendenart" value="abholung" className="mr-2 form-radio text-emerald-600"
                  checked={deliveryMethod === 'abholung'} onChange={(e) => setDeliveryMethod(e.target.value)} required />
                Abholung
              </label>
            </div>
          </div>

          {/* Schritt 2: Bedingte Felder je nach Übergabeart */}
          {deliveryMethod && (
            <>
              {/* Abholadresse nur bei Abholung */}
              {deliveryMethod === 'abholung' && (
                <div>
                  <h2 className="text-xl font-semibold mb-4">Abholadresse</h2>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="abholstrasse" className="block mb-2 text-gray-700">Straße und Hausnummer</label>
                      <input type="text" id="abholstrasse" name="abholstrasse" className="w-full border border-gray-300 rounded-md px-4 py-2" placeholder="z.B. Musterstraße 12"
                        value={address.street} onChange={(e) => handleAddressChange('street', e.target.value)} required />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="abholplz" className="block mb-2 text-gray-700">PLZ</label>
                        <input type="text" id="abholplz" name="abholplz" maxLength="5" pattern="\d{5}" className="w-full border border-gray-300 rounded-md px-4 py-2" placeholder="z.B. 12345"
                          value={address.zip} onChange={(e) => handleAddressChange('zip', e.target.value)} required />
                      </div>
                      <div>
                        <label htmlFor="abholort" className="block mb-2 text-gray-700">Ort</label>
                        <input type="text" id="abholort" name="abholort" className="w-full border border-gray-300 rounded-md px-4 py-2" placeholder="z.B. Berlin"
                          value={address.city} onChange={(e) => handleAddressChange('city', e.target.value)} required />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Datumsauswahl für Abgabe oder Abholung */}
              <div>
                <h2 className="text-xl font-semibold mb-4">
                  {deliveryMethod === 'uebergabe' ? 'Abgabetag wählen' : 'Abholtag wählen'}
                </h2>
                <select
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                  value={datum}
                  onChange={(e) => setDatum(e.target.value)}
                  required
                >
                  <option value="">Bitte Datum wählen…</option>
                  {verfuegbareAbholtage.map((day) => (
                    <option key={day} value={day}>
                      {new Date(day).toLocaleDateString('de-DE', {
                        weekday: 'long',
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                      })}
                    </option>
                  ))}
                </select>
                {deliveryMethod === 'abholung' && (
                  <p className="text-xs text-gray-500 mt-1">
                    Die Abholung erfolgt am gewählten Tag zwischen <strong>07:00 und 17:00 Uhr</strong>.
                  </p>
                )}
                {deliveryMethod === 'uebergabe' && (
                  <p className="text-xs text-gray-500 mt-1">
                    Die Übergabe ist am gewählten Tag zwischen <strong>10:00 und 14:00 Uhr</strong> möglich.
                  </p>
                )}
              </div>

              {/* Kleidungsarten mit Anzahl */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Art und Anzahl der Kleidung</h2>
                <div className="space-y-4">
                  {kleidungsarten.map(({ art, anzahl }, idx) => (
                    <div key={art} className="flex items-center space-x-4">
                      <label htmlFor={`kleidung-${art}`} className="w-40 text-gray-700">{art}</label>
                      <input
                        type="number"
                        id={`kleidung-${art}`}
                        min="0"
                        placeholder="0"
                        className="w-24 border border-gray-300 rounded-md px-3 py-2"
                        value={anzahl}
                        onChange={(e) => handleKleidungsartChange(idx, e.target.value)}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Krisengebiet-Auswahl */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Krisengebiet auswählen</h2>
                <select
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                  value={krisengebiet}
                  onChange={(e) => setKrisengebiet(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Bitte wählen…
                  </option>
                  {krisengebiete.map(({ value, label }) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Fehlermeldung */}
              {fehler && <p className="text-red-600 font-semibold">{fehler}</p>}

              {/* Abschicken-Button */}
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full shadow transition-colors duration-300 mt-6 w-full"
              >
                Spende abschicken
              </button>
            </>
          )}
        </form>
        
      </div>
      {/* Hinweis zur Spendenquittung */}
      <SpendenquittungHinweis />

    </div>
  );
}   
