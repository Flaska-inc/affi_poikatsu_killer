import { Link } from "react-router-dom";
import Article001 from "../components/articles/Article001";

const HomePage: React.FC = () => {
    return (
        <div>
        <body>
            <h1> ポイ活のすすめ </h1>
            <p> ポイントサイト一覧 </p>
            <h3> オススメのポイントサイト </h3>

            <h3> 貯め方で選ぶ </h3>
            <li>
                <Link to="/game"> ゲームで貯める（ゲームアイコンを入れても良い）</Link>
            </li>
            <li>
                <Link to="card"> カードで貯める </Link>
            </li>
            <h3> ポイントの種類で選ぶ </h3>
            <li>
                <Link to="/rakuten"> 楽天ポイントを貯める </Link>
            </li>
            <li>
                <Link to="/docomo"> dポイントを貯める </Link>
            </li>
            <h3> ノウハウを学ぶ </h3>
            <Article001/> 
        </body>
        </div>
    );
};

export default HomePage;