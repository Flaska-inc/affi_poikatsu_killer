import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// ローカルで動かすには npm install react-router-dom コマンドを実行する必要あり。
import HomePage from './pages/HomePage';
import CardPage from './pages/CardPage';
import GamePage from './pages/GamePage';
import RakutenPage from './pages/RakutenPage';
import DocomoPage from './pages/DocomoPage';
import PointSitesPage from './pages/PointSitesPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/card" element={<CardPage />} />
        <Route path="/rakuten" element={<RakutenPage />} />
        <Route path="/docomo" element={<DocomoPage />} />
        <Route path="/pointsites" element={<PointSitesPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
