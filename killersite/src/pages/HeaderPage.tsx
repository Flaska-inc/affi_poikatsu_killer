import { Link } from "react-router-dom";
import "../components/css/General.css";
import "../components/css/Header.css";
import { Helmet } from "react-helmet"

const HeaderPage: React.FC = () => {
    return (
        <div>
        <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="theme-color" content="salmon"/>
            <title>ポイ活のすすめ</title>
            {/* <meta name="description" content="">
            <meta property="og:title" content="">
            <meta property="og:description" content=""> */}
            {/* <meta property="og:image" content="img/icon/"> */}
            {/* <link rel="apple-touch-icon" sizes="180x180" href="img/icon/">
            <link rel="icon" type="image/x-icon" href="img/icon/"> */}

            <script src="https://kit.fontawesome.com/e409242ab5.js" crossOrigin="anonymous"></script>
        </Helmet>

        <body id="#header">
            <h1> ポイ活のすすめ </h1>
            <p><Link to="/projectlist">案件一覧</Link></p>
            <p><Link to="/articlelist">記事一覧</Link></p>
            <p> <Link to="/">ホームへ戻る</Link></p>
            <h3> 貯め方で選ぶ（ホバーするとリストが出てくるように。以下同） </h3>
            <ul>
                <li><Link to="/bygame"> ゲームで貯める </Link></li>
                <li><Link to="/bycard"> カードで貯める </Link></li>
                <li><Link to="/byquestionaire"> アンケートで貯める </Link></li>
                <li><Link to="/byinternetline"> ネット回線の新規契約で貯める </Link></li>
            </ul>
            <h3> ポイントの種類で選ぶ </h3>
            <ul>
                <li><Link to="/rakutenpoint"> 楽天ポイントを貯める </Link></li>
                <li><Link to="/dpoint"> dポイントを貯める </Link></li>
                <li><Link to="/paypaypoint"> PayPayポイントを貯める </Link></li>
                <li><Link to="/vpoint"> Vポイントを貯める </Link></li>
                <li><Link to="/waonpoint"> WAONポイントを貯める </Link></li>
            </ul>
            <h3> 経済圏で選ぶ </h3>
            <ul>
                <li><Link to="/rakutenzone"> 楽天経済圏で貯める </Link></li>
                <li><Link to="/sbizone"> SBI経済圏で貯める </Link></li>
                <li><Link to="/paypayzone"> PayPay経済圏で貯める </Link></li>
                <li><Link to="/auzone"> au経済圏で貯める </Link></li>
                <li><Link to="/aeonzone"> イオン経済圏で貯める </Link></li>
            </ul>
        </body>
        </div>
    );
};

export default HeaderPage;