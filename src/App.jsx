import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Operational from "./pages/operational";
import Learning from "./pages/Learning";
import Wider from "./pages/Wider";
import Communicate from "./pages/Communicate";
import Specialist from "./pages/Specialist";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/operational-issues" element={<Operational />} />
        <Route
          path="/learning-teaching-and-assessment"
          element={<Learning />}
        />
        <Route path="/wider-context" element={<Wider />} />
        <Route
          path="/communication-working-with-others"
          element={<Communicate />}
        />
        <Route path="/specialist-area" element={<Specialist />} />
      </Routes>
    </div>
  );
}

export default App;
