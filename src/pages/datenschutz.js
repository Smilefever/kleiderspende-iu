import LegalLayout from '../components/LegalLayout';

const { SectionHeading, SectionParagraph } = LegalLayout;

// Datenschutzerklärung als strukturierte Seite nach dem LegalLayout-Design

export default function Datenschutz() {
  return (
    <LegalLayout title="Datenschutzerklärung">
      <SectionParagraph>
        Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Im Folgenden informieren wir Sie darüber, welche Daten wir erheben, wie wir sie verwenden und welche Rechte Sie in Bezug auf Ihre Daten haben.
      </SectionParagraph>

      <SectionHeading>1. Verantwortliche Stelle</SectionHeading>
      <SectionParagraph>
        Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br />
        Kleiderhelden e.V.<br />
        Musterstraße 1<br />
        12345 Musterstadt<br />
        E-Mail: <a href="mailto:info@kleiderhilfe.de" className="text-emerald-700 underline">info@kleiderhilfe.de</a>
      </SectionParagraph>

      <SectionHeading>2. Erhebung und Verwendung personenbezogener Daten</SectionHeading>
      <SectionParagraph>
        Wir erheben personenbezogene Daten nur, wenn Sie uns diese freiwillig mitteilen, zum Beispiel im Rahmen einer Kleiderspende-Anmeldung. Die erhobenen Daten verwenden wir ausschließlich zur Bearbeitung Ihrer Spende und zur Kommunikation mit Ihnen.
      </SectionParagraph>

      <SectionHeading>3. Rechtsgrundlage der Verarbeitung</SectionHeading>
      <SectionParagraph>
        Die Verarbeitung Ihrer Daten erfolgt auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO oder zur Erfüllung eines Vertrags bzw. vorvertraglicher Maßnahmen gemäß Art. 6 Abs. 1 lit. b DSGVO.
      </SectionParagraph>

      <SectionHeading>4. Weitergabe an Dritte</SectionHeading>
      <SectionParagraph>
        Eine Weitergabe Ihrer Daten an Dritte erfolgt nur, soweit dies für die Abwicklung der Spende notwendig ist oder wir gesetzlich dazu verpflichtet sind. Eine darüber hinausgehende Weitergabe findet nicht statt.
      </SectionParagraph>

      <SectionHeading>5. Speicherdauer</SectionHeading>
      <SectionParagraph>
        Wir speichern Ihre personenbezogenen Daten nur so lange, wie es für die Erfüllung der oben genannten Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen.
      </SectionParagraph>

      <SectionHeading>6. Ihre Rechte</SectionHeading>
      <SectionParagraph>
        Sie haben das Recht, jederzeit Auskunft über die von uns gespeicherten personenbezogenen Daten zu erhalten, deren Berichtigung oder Löschung zu verlangen sowie die Verarbeitung einzuschränken. Außerdem können Sie Ihre Einwilligung jederzeit widerrufen. Zur Ausübung Ihrer Rechte wenden Sie sich bitte an die oben genannte verantwortliche Stelle.
      </SectionParagraph>

      <SectionHeading>7. Sicherheit</SectionHeading>
      <SectionParagraph>
        Wir treffen angemessene technische und organisatorische Maßnahmen, um Ihre Daten vor Verlust, Missbrauch oder unbefugtem Zugriff zu schützen.
      </SectionParagraph>

      <SectionHeading>8. Kontakt</SectionHeading>
      <SectionParagraph className="mb-0">
        Bei Fragen zum Datenschutz können Sie sich jederzeit an uns wenden:<br />
        E-Mail: <a href="mailto:datenschutz@kleiderhilfe.de" className="text-emerald-700 underline">datenschutz@kleiderhilfe.de</a>
      </SectionParagraph>
      <SectionParagraph className="mt-6 mb-0">
        Vielen Dank für Ihr Vertrauen!
      </SectionParagraph>
    </LegalLayout>
  );
}
