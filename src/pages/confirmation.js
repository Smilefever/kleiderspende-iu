import React, { useEffect } from 'react';
import krisengebiete from '../data/krisengebiete.json';
import QRCode from 'react-qr-code';
import SpendenquittungHinweis from '../components/SpendenquittungHinweis';


export default function Confirmation() {
  // Hole und parse die Spenden-Daten aus dem Local Storage
  const spendenDatenRaw = localStorage.getItem('spendenDaten');
  const spendenDaten = spendenDatenRaw ? JSON.parse(spendenDatenRaw) : null;

  // Nach Anzeige der Bestätigung: Spenden-Daten aus dem localStorage entfernen
  useEffect(() => {
    if (spendenDaten && spendenDaten.deliveryMethod) {
      localStorage.removeItem('spendenDaten');
    }
  }, [spendenDaten]);

  // Gibt das Label des ausgewählten Krisengebiets zurück
  const getSelectedKrisengebietLabel = () => {
    const selected = krisengebiete.find((k) => k.value === spendenDaten?.krisengebiet);
    return selected ? selected.label : '';
  };

 // Gibt das passende Zeitfenster je nach Übergabemethode zurück
  const getZeitfenster = () => {
    if (spendenDaten?.deliveryMethod === 'abholung') {
      return '07:00–17:00 Uhr';
    }
    if (spendenDaten?.deliveryMethod === 'uebergabe') {
      return '10:00–14:00 Uhr';
    }
    return '';
  };

  // QR-Code-Daten als Objekt vorbereiten
  const qrDaten = spendenDaten
    ? {
        methode: spendenDaten.deliveryMethod,
        datum: spendenDaten.datum,
        zeitfenster: getZeitfenster(),
        ort:
          spendenDaten.deliveryMethod === 'uebergabe'
            ? 'Geschäftsstelle KleiderHelden e.V.'
            : `${spendenDaten.address.street}, ${spendenDaten.address.zip} ${spendenDaten.address.city}`,
        krisengebiet: getSelectedKrisengebietLabel(),
        kleidungsarten: spendenDaten.kleidungsarten
          ?.filter(k => parseInt(k.anzahl) > 0)
          .map(k => `${k.anzahl}x ${k.art}`)
          .join(', '),
      }
    : {};

  // Fehlermeldung, wenn keine Spende vorhanden ist
  if (!spendenDaten || !spendenDaten.deliveryMethod) {
    return (
      <div className="container mx-auto max-w-xl py-10 px-4">
        <div className="max-w-xl w-full bg-white rounded-xl shadow p-6 text-center">
          <h3 className="text-2xl font-black text-red-800 mb-3">Keine Spende gefunden!</h3>
          <p className="text-gray-700">
            Hinweis: Ein erneuter Aufruf dieser Seite wird die Spendenbestätigung nicht erneut anzeigen.
          </p>
          <p className="text-gray-700 mt-2">
            Wenn Sie vergessen haben, die PDF herunterzuladen, bitten wir Sie, das Formular erneut auszufüllen.
          </p>
        </div>
      </div>
    );
  }

  // Bestätigungsseite mit QR-Code und Spendenhinweis 
  return (
    <div className="container mx-auto max-w-xl px-4 print:px-2 print:max-w-[700px]">
      <h1 className="text-3xl pt-8 font-extrabold text-center mb-6 text-emerald-900 print:pt-2 print:mb-3 print:text-2xl">
        Spendenbestätigung
      </h1>
      <div className="max-w-xl w-full mx-auto mt-6 bg-white rounded-xl shadow p-6 print:shadow-none print:rounded print:p-2 print:mt-2">
        <h3 className="text-lg font-semibold text-emerald-800 mb-3 text-center print:text-base">
          Vielen Dank für deine Spende!
        </h3>
        <div className="text-gray-700 mb-2 flex flex-col items-center text-center print:text-sm">
          <p>
            <span className="font-semibold">Art der Kleider:</span>{' '}
            {qrDaten.kleidungsarten}
          </p>
          <p>
            <span className="font-semibold">Krisengebiet:</span> {qrDaten.krisengebiet}
          </p>
          <p>
            <span className="font-semibold">Datum:</span>{' '}
            {spendenDaten.datum && new Date(spendenDaten.datum).toLocaleDateString('de-DE')}
          </p>
          <p>
            <span className="font-semibold">Uhrzeit:</span> {qrDaten.zeitfenster}
          </p>
          <p>
            <span className="font-semibold">Ort:</span> {qrDaten.ort}
          </p>
        </div>

        {/* QR-Code und Spendenhinweis nebeneinander */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 my-6 print:flex-row print:gap-4 print:my-2">
          <div className="bg-white p-2 rounded shadow print:shadow-none print:p-0">
            <QRCode value={JSON.stringify(qrDaten)} size={120} />
          </div>
          <div className="bg-yellow-100 border-l-4 border-yellow-400 rounded-lg px-4 py-3 max-w-xs text-yellow-900 text-sm flex items-center shadow print:shadow-none print:px-2 print:py-2 print:max-w-[250px] print:text-xs print:bg-yellow-50 print:border-yellow-500">
            <svg className="w-5 h-5 mr-2 text-yellow-500 flex-shrink-0 print:w-4 print:h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 13a1 1 0 01-1 1H3a1 1 0 010-2h14a1 1 0 011 1zm-1-8a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1V5zm-2 0v10H4V5h11z" clipRule="evenodd" />
            </svg>
            <span>
              <strong>Wichtig:</strong> <br /> Bei Abholung bitte <strong>immer</strong> die ausgedruckte PDF zu der Spende legen. Eine Abholung ist ansonsten nicht möglich.
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center print:items-start">
          {/* Druck-Button (wird beim Drucken ausgeblendet) */}
          <button
            onClick={() => window.print()}
            className="mt-4 mb-8 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full shadow print:hidden"
          >
            Seite drucken
          </button>
          
        </div>
      </div>
      {/* Hinweis zur Spendenquittung */}
      <SpendenquittungHinweis />
    </div>
  );
}
