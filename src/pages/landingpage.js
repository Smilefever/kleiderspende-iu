/* CardSection Card1 Bild-Quelle: https://www.pexels.com/de-de/foto/kleidung-junge-frau-nachstenliebe-tageslicht-6994830/ */
import missionHelpTogether from '../assets/mission-help-together.jpg';
/* CardSection Card2 Bild-Quelle: https://www.pexels.com/de-de/foto/mann-stapel-stehen-festhalten-6994938/ */
import missionPromoteSustainability from '../assets/mission-promote-sustainability.jpg';
/* CardSection Card3 Bild-Quelle: https://www.pexels.com/de-de/foto/kleider-behalter-container-verpackung-6995066/ */
import missionStrengthenCommunity from '../assets/mission-strengthen-community.jpg';
/* Hintergrundbild für CardSection Bild-Quelle: https://pixabay.com/de/illustrations/waterfall-rainforest-jungle-forest-8900204/ */
import bgHomeForest from '../assets/bg-home-forest.png';
// Krisengebiete aus JSON-Datei importieren
import krisengebiete from '../data/krisengebiete.json';

import React from "react";

// LandingPage: Startseite mit mehreren Sektionen
export default function LandingPage() {
    return (
      <>
        <main>
            <CardSection />
            <AboutAndCountries />
            <HowItWorks />
            <ValuesAndFAQ />
        </main>
      </>
    );
  }

// Drei Karten mit Missionsthemen und Bildern
function CardSection() {
  return ( 
    <section
      className="py-20 bg-gray-50 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgHomeForest})` }}
    >
      <div className="container mx-auto px-4 text-center">  
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 md:gap-10">

          {/* Card 1 */}
          <article className="bg-white p-8 rounded-2xl shadow-md flex flex-col items-center text-center transition hover:shadow-xl hover:-translate-y-1">
            <div className="w-full aspect-[4/2.5] rounded-lg mb-4 overflow-hidden bg-gray-100">
              <img
                src={missionHelpTogether}
                alt="Gemeinsam helfen"
                className="object-cover w-full h-full rounded-2xl"
              />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-emerald-900">
              Gemeinsam helfen
            </h2>
            <p className="text-gray-600">
              KleiderHelden sammelt Kleiderspenden, um Menschen in Notlagen zu
              unterstützen – sowohl in unserer Region als auch international.
              Unsere Arbeit basiert auf Solidarität und dem Wunsch, gemeinsam
              Gutes zu tun.
            </p>
          </article>

          {/* Card 2 */}
          <article className="bg-white p-8 rounded-2xl shadow-md flex flex-col items-center text-center transition hover:shadow-xl hover:-translate-y-1">
            <div className="w-full aspect-[4/2.5] rounded-lg mb-4 overflow-hidden bg-gray-100">
              <img
                src={missionPromoteSustainability}
                alt="Nachhaltigkeit fördern"
                className="object-cover w-full h-full rounded-2xl"
              />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-emerald-900">
              Nachhaltigkeit fördern
            </h2>
            <p className="text-gray-600">
              Wir setzen uns für einen bewussten Umgang mit Kleidung ein. Durch
              die Wiederverwendung von Textilien leisten wir einen aktiven
              Beitrag zum Umweltschutz und fördern nachhaltigen Konsum.
            </p>
          </article>

          {/* Card 3 */}
          <article className="bg-white p-8 rounded-2xl shadow-md flex flex-col items-center text-center transition hover:shadow-xl hover:-translate-y-1">
            <div className="w-full aspect-[4/2.5] rounded-lg mb-4 overflow-hidden bg-gray-100">
              <img
                src={missionStrengthenCommunity}
                alt="Gemeinschaft stärken"
                className="object-cover w-full h-full rounded-2xl"
              />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-emerald-900">
              Gemeinschaft stärken
            </h2>
            <p className="text-gray-600">
              Unsere Kleiderspendenaktionen bringen Menschen zusammen. Ob als
              Spender:in, Helfer:in oder Empfänger:in – bei KleiderHelden zählt
              das Miteinander und die gegenseitige Unterstützung.
            </p>
          </article>

        </div>
      </div>
    </section>
  );
}

// Über uns und Regionen, in die gespendet wird
function AboutAndCountries() {
  // Länder/Regionen aus den Krisengebieten extrahieren (ohne Klammerzusätze)
  const laenderLabels = krisengebiete
    .filter(k => k.value)
    .map(k => k.label.replace(/\(.*\)/, '').trim());

  return (
    <section id="ueberuns" className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-emerald-900">
              Über uns
            </h2>
            <p className="text-gray-700 mb-4">
              KleiderHelden ist ein gemeinnütziger Verein, der sich seit 2018
              für soziale Gerechtigkeit und Nachhaltigkeit engagiert. Unser Ziel
              ist es, gut erhaltene Kleidung dorthin zu bringen, wo sie
              dringend gebraucht wird.
            </p>
            <p className="text-gray-700 mb-4">
              Wir arbeiten mit ehrenamtlichen Helfer:innen, lokalen Partnern und
              internationalen Organisationen zusammen. Jede Spende zählt und
              trägt dazu bei, Menschen in schwierigen Lebenssituationen zu
              unterstützen – sei es nach Katastrophen, bei Armut oder auf der
              Flucht.
            </p>
            <p className="text-gray-700">
              Die Spenden können entweder direkt an unserer Geschäftsstelle
              abgegeben oder bequem von unserem Sammelfahrzeug bei Ihnen zu
              Hause abgeholt werden. So machen wir es allen Spender:innen
              einfach, Gutes zu tun.
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-emerald-800">
              Regionen, in die wir spenden
            </h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {laenderLabels.map((country) => (
                <li key={country}>
                  <span className="block text-center bg-emerald-100 hover:bg-emerald-200 text-emerald-900 rounded-full px-4 py-2 text-sm font-medium shadow">
                    {country}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-500 mt-4">
              Du entscheidest: Unsere Hilfslieferungen erreichen Bedürftige in der jeweiligen Region, die von dir im Spendenformular ausgewählt wurde.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Erklärung, wie die Kleiderspende funktioniert  
  function HowItWorks() {
    return (
      <section id="sofunktionierts" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-emerald-900 text-center">
            So funktioniert die Kleiderspende
          </h2>
          <ol className="list-decimal list-inside space-y-4 text-gray-700">
            <li>
              <strong>Kleiderspende persönlich abgeben:</strong> <span className="italic text-sm">(Mo-Fr: 10:00-14:00 Uhr)</span>
              <p>
                Bringen Sie Ihre sauberen und gut erhaltenen Kleidungsstücke
                einfach während unserer Öffnungszeiten in unsere Geschäftsstelle.
                Unser Team nimmt Ihre Spende gerne entgegen und beantwortet alle
                Fragen rund um die Weitergabe und Verwendung.
              </p>
            </li>
            <li>
              <strong>Kleiderspende abholen lassen:</strong> <span className="italic text-sm">(Mo-Fr: 07:00-17:00 Uhr)</span>
              <p>
                Nutzen Sie unseren kostenlosen Abholservice! Vereinbaren Sie
                online oder telefonisch einen Termin. Am Abholtag stellen Sie
                Ihre Spende einfach gut verpackt vor Ihre Haustür – unser
                Sammelfahrzeug holt alles bequem und zuverlässig ab.
              </p>
            </li>
            <li>
              <strong>Was kann gespendet werden?</strong>
              <p>
                Wir nehmen saubere und tragbare Kleidung für Kinder und Erwachsene,
                Schuhe (paarweise gebunden), Bettwäsche und Handtücher entgegen.
                Bitte keine stark beschädigten oder verschmutzten Textilien.
              </p>
            </li>
          </ol>
   
          {/* Spenden-Banner mit Link zum Spendenformular */}
          <div className="mt-8 text-center">
            <a
              href="spende"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-10 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-green-300 transition-colors duration-300"
            >
              Jetzt Spendentermin vereinbaren
            </a>
          </div>
        </div>
      </section>
    );
  }
  
  // Werte und häufig gestellte Fragen (FAQ)
  function ValuesAndFAQ() {
    return (
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-emerald-800">Unsere Werte</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Transparenz und Fairness in allen Prozessen</li>
              <li>Nachhaltigkeit durch Wiederverwendung und Recycling</li>
              <li>Unterstützung für Menschen in akuten Notlagen</li>
              <li>Stärkung der Gemeinschaft und des Ehrenamts</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3 text-emerald-800">Häufige Fragen</h3>
            <ul className="space-y-3 text-gray-700">
              <li>
                <strong>Kann ich auch außerhalb der Öffnungszeiten spenden?</strong>
                <br />
                Ja, nutzen Sie einfach unseren Abholservice oder kontaktieren Sie uns
                für individuelle Lösungen.
              </li>
              <li>
                <strong>Muss die Kleidung sortiert oder gewaschen sein?</strong>
                <br />
                Die Kleidung sollte sauber und tragbar sein, eine Sortierung ist nicht
                zwingend notwendig.
              </li>
              <li>
                <strong>Wohin gehen meine Spenden?</strong>
                <br />
                Die Spenden werden bedarfsgerecht an Menschen in Deutschland, Europa
                und Afrika weitergegeben oder in sozialen Projekten eingesetzt.
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
  
  