// Überschrift für einen Abschnitt (im Impressum oder Datenschutz)

function SectionHeading({ children }) {
    return (
      <h2 className="text-xl font-semibold mt-8 mb-2">{children}</h2>
    );
  }
  
// Paragraph für einen Abschnitt (im Impressum oder Datenschutz)
  function SectionParagraph({ children, className = "" }) {
    return (
      <p className={`mb-6 ${className}`}>{children}</p>
    );
  }
  
// Layout-Komponente für Impressum und Datenschutz
  function LegalLayout({ title, children }) {
    return (
      <div className="max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        {children}
      </div>
    );
  }

 // Exportiere die Komponenten für die Verwendung in Impressum und Datenschutz
  LegalLayout.SectionHeading = SectionHeading;
  LegalLayout.SectionParagraph = SectionParagraph;
  
  export default LegalLayout;
  