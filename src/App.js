import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePgae/HomePage";
import SearchResultPage from "./Pages/SearchResultPage/SearchResultPage";

function App() {
  return (
    <div className="App  min-h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchResultPage />} />
      </Routes>
    </div>
  );
}

export default App;
