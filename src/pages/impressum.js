import LegalLayout from '../components/LegalLayout';

const { SectionHeading, SectionParagraph } = LegalLayout;

// Impressum als strukturierte Seite mit Überschriften und Absätzen

export default function Impressum() {
  return (
    <LegalLayout title="Impressum">
      <SectionParagraph>
        Angaben gemäß § 5 TMG
      </SectionParagraph>
      <SectionParagraph>
        Kleiderhelden e.V.<br />
        Musterstraße 12<br />
        12345 Musterstadt<br />
        Deutschland
      </SectionParagraph>

      <SectionHeading>Vertreten durch</SectionHeading>
      <SectionParagraph>
        Max Mustermann<br />
        (Vorstandsvorsitzender)
      </SectionParagraph>

      <SectionHeading>Kontakt</SectionHeading>
      <SectionParagraph>
        Telefon: 01234 / 567890<br />
        E-Mail: <a href="mailto:info@mustermail.de" className="text-emerald-700 underline">info@kleiderspende.de</a>
      </SectionParagraph>

      <SectionHeading>Registereintrag</SectionHeading>
      <SectionParagraph>
        Eintragung im Vereinsregister.<br />
        Registergericht: Musterstadt<br />
        Registernummer: VR 12345
      </SectionParagraph>

      <SectionHeading>Umsatzsteuer-ID</SectionHeading>
      <SectionParagraph>
        Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
        DE123456789
      </SectionParagraph>

      <SectionHeading>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</SectionHeading>
      <SectionParagraph>
        Max Mustermann<br />
        Musterstraße 12<br />
        12345 Musterstadt
      </SectionParagraph>

      <SectionHeading>Haftungsausschluss</SectionHeading>
      <SectionParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat justo nec urna cursus, ac dictum enim faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis nec cursus tortor. Nulla facilisi.
      </SectionParagraph>
      <SectionParagraph>
        Für die Inhalte externer Links übernehmen wir keine Haftung. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
      </SectionParagraph>

      <SectionHeading>Urheberrecht</SectionHeading>
      <SectionParagraph className="mb-0">
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
      </SectionParagraph>
    </LegalLayout>
  );
}
