import { Link } from "react-router-dom";
import Article001 from "../components/articles/Article001";
import PointSite001 from "../components/pointsites/pointsite001";

const HomePage: React.FC = () => {
    return (
        <div>
        <body>
            <h1> ポイ活のすすめ </h1>
            <h2> <Link to="/pointsites">ポイントサイト一覧</Link></h2>
            <h3> オススメのポイントサイト（ここに単価の良い案件を五個ほど並べる。） </h3>
            <PointSite001/>
            <h3> 貯め方で選ぶ </h3>
            <ul>
                <li><Link to="/game"> ゲームで貯める（ゲームアイコンを入れても良い）</Link></li>
                <li><Link to="card"> カードで貯める </Link></li>
            </ul>
            <h3> ポイントの種類で選ぶ </h3>
            <ul>
                <li><Link to="/rakuten"> 楽天ポイントを貯める </Link></li>
                <li><Link to="/docomo"> dポイントを貯める </Link></li>
            </ul>
            <h3> ノウハウを学ぶ </h3>
            <Article001/> 
        </body>
        </div>
    );
};

export default HomePage;