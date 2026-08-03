import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NebulaScene from "./components/NebulaScene";
import Work from "./pages/Work";

import Studio from "./pages/Studio";
import Services from "./pages/Services";
import PageLoader from "./components/PageLoader";
import ContactModal from "./components/ContactModal";

function App() {
  return (
    <Router>
      <PageLoader />
      <ContactModal />
      <main className="w-full min-h-screen bg-[#05060a]">
        <Routes>
          <Route path="/" element={<NebulaScene />} />
          <Route path="/work" element={<Work />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
