import { Link } from "react-router-dom";

// Footer-Komponente mit Impressum und Datenschutz-Links

export default function Footer() {

  return (
    <footer className="bg-emerald-900 text-white py-8">
      <div className="container mx-auto text-center space-x-4 space-y-3">
        {/* Copyright-Hinweis */}
        <p className="text-sm">&copy; 2025 KleiderHelden. Alle Rechte vorbehalten.</p>
        {/* Navigationslinks zu Impressum und Datenschutz */}
        <Link
          to="/impressum"
          className="text-emerald-200 hover:text-white text-sm underline transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-300 rounded"
        >
          Impressum
        </Link>
        <Link
          to="/datenschutz"
          className="text-emerald-200 hover:text-white text-sm underline transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-300 rounded"
        >
          Datenschutz
        </Link>
      </div>
    </footer>
  );
}
