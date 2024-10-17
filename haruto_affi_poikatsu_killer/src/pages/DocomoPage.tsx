import PointSite001 from "../components/pointsites/pointsite001";
import { Link } from "react-router-dom";
const DocomoPage: React.FC = () => {
    return (
        <div>
        <body>
            <h1> dポイントを貯める </h1>
            <p> ポイントサイト一覧 </p>
            <PointSite001/> 
            <p>
                <Link to="/">ホームに戻る</Link>
            </p>
        </body>
        </div>
    );
};

export default DocomoPage;