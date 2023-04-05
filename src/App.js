import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import List from "./components/pages/List";
import CharacterDetail from "./components/pages/CharacterDetailPage";
import AddCharacterPage from "./components/pages/AddCharacterModal";
import "./tailwind.css";

function App() {
  return (
    <Router>
      <div className="bg-purple  min-h-screen pb-20">
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/character/:id" element={<CharacterDetail />} />
          <Route path="/characters/add" element={<AddCharacterPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
