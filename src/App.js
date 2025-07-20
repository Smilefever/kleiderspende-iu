  import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
  import ScrollToTop from "./components/ScrollToTop";
  import Header from "./components/header";
  import Footer from "./components/footer";
  import LandingPage from "./pages/landingpage";
  import Impressum from "./pages/impressum";
  import Spende from './pages/spende';
  import Datenschutz from './pages/datenschutz';
  import Confirmation from './pages/confirmation';

/**
 * Hauptkomponente der App:
 * Bindet Header, Footer und Routing für alle Seiten ein.
 */

  function App() {
    return (
      <Router>
        {/* Immer sichtbarer Header */}
        <Header />
        {/* Scrollt bei Navigation automatisch nach oben */}
        <ScrollToTop />
        {/* Routing zu den einzelnen Seiten */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/spende" element={<Spende />} />
    <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
        </Routes>
        {/* Immer sichtbarer Footer */}
        <Footer />
      </Router>
    );
  }

  export default App;