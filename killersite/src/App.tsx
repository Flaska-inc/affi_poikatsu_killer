import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// ローカルで動かすには npm install react-router-dom コマンドを実行する必要あり。
import HomePage from './pages/HomePage';
import Article001Page from './pages/ArticlePages/Article001Page';
import ByGamePage from './pages/WayToSavePages/ByGamePage';
import ByCardPage from './pages/WayToSavePages/ByCardPage';
import ByQuestionairePage from './pages/WayToSavePages/ByQuestionnairePage';
import ByInternetLinePage from './pages/WayToSavePages/ByInternetLinePage';
import RakutenPointPage from './pages/PointTypePages/RakutenPointPage';
import DPointPage from './pages/PointTypePages/DPointPage';
import PayPayPointPage from './pages/PointTypePages/PayPayPointPage';
import ArticleListPage from './pages/ArticleListPage';
import VPointPage from './pages/PointTypePages/VPointPage';
import WAONPointPage from './pages/PointTypePages/WAONPointPage';
import RakutenEZonePage from './pages/EconomicZonePages/RakutenEZonePage';
import SBIEZonePage from './pages/EconomicZonePages/SBIEZonePage';
import PayPayEZonePage from './pages/EconomicZonePages/PayPayEZonePage';
import AUEZonePage from './pages/EconomicZonePages/AUEZonePage';
import AEONEZonePage from './pages/EconomicZonePages/AEONEZonePage';
import ProjectListPage from './pages/ProjectListPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        <Route path="/bygame" element={<ByGamePage />} />
        <Route path="/bycard" element={<ByCardPage />} />
        <Route path="/byquestionaire" element={<ByQuestionairePage />} />
        <Route path="/byinternetline" element={<ByInternetLinePage />} />
        
        <Route path="/rakutenpoint" element={<RakutenPointPage />} />
        <Route path="/dpoint" element={<DPointPage />} />
        <Route path="/paypaypoint" element={<PayPayPointPage />} />
        <Route path="/vpoint" element={<VPointPage />} />
        <Route path="/waonpoint" element={<WAONPointPage />} />

        <Route path="/rakutenzone" element={<RakutenEZonePage />} />
        <Route path="/sbizone" element={<SBIEZonePage />} />
        <Route path="/paypayzone" element={<PayPayEZonePage />} />
        <Route path="/auzone" element={<AUEZonePage />} />
        <Route path="/aeonzone" element={<AEONEZonePage />} />

        <Route path="/articlelist" element={<ArticleListPage />}/>
        <Route path="/article001" element={<Article001Page />}/>

        <Route path="/projectlist" element={<ProjectListPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
