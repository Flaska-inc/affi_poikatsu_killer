import PointSite001 from "../components/pointsites/pointsite001";
import { Link } from "react-router-dom";
const PointSitesPage: React.FC = () => {
    return (
        <div>
        <body>
            <h1> ポイントサイト一覧 </h1>
            <PointSite001/> 
            <p>
                <Link to="/">ホームに戻る</Link>
            </p>
        </body>
        </div>
    );
};

export default PointSitesPage;