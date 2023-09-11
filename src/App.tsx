import { BrowserRouter } from "react-router-dom";

import { Routes, Route } from "react-router";

import StartPage from "./pages/StartPage";
import ColorMainPage from "./pages/ColorMainPage";
import ColorInfoPage from "./pages/ColorInfoPage";
import FavoritesPage from "./pages/FavoritesPage";
import ColorMixPage from "./pages/ColorMixPage";
import { globalStyles } from "./styles/font";

function App() {
  globalStyles();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/main" element={<ColorMainPage />} />
        <Route path="/main/favorite" element={<FavoritesPage />} />
        <Route path="/main/color" element={<ColorInfoPage />} />
        <Route path="/main/mix" element={<ColorMixPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
