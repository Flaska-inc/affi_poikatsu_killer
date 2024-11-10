import { Link } from "react-router-dom";
import "../components/css/General.css";
import "../components/css/Header.css";
import { Helmet } from "react-helmet"

const HeaderPage: React.FC = () => {
    return (
    <div id="header-outer">
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

        <body id="header">
            <div id="header-inner">
                <h1> <Link to="/"><i className="fas fa-crown"></i> ポイ活のすすめ </Link></h1>
                <div id="head-bar">
                    <p><Link to="/projectlist"><i className="fas fa-list"></i> <br/>案件一覧</Link></p>
                    <p><Link to="/articlelist"><i className="far fa-newspaper"></i> <br/>記事一覧</Link></p>
                    {/* <p> <Link to="/"><i className="fas fa-home"></i> <br/>ホームへ戻る</Link></p> */}
                    <div className="head-hover-contents">
                        <i className="far fa-credit-card"></i> <br/>貯め方で選ぶ
                        
                        <ul className="head-wrap-contents">
                            <li><Link to="/bygame"> ゲームで貯める </Link></li>
                            <li><Link to="/bycard"><i className="far fa-credit-card"></i> カードで貯める </Link></li>
                            <li><Link to="/byquestionaire"><i className="fas fa-edit"></i> アンケートで貯める </Link></li>
                            <li><Link to="/byinternetline"><i className="fas fa-wifi"></i> ネット回線の新規契約で貯める </Link></li>
                        </ul>
                    </div>
                    
                    <div className="head-hover-contents">
                        <i className="fas fa-list"></i> <br/>ポイントの種類で選ぶ
                        <ul className="head-wrap-contents">
                            <li><Link to="/rakutenpoint"> 楽天ポイントを貯める </Link></li>
                            <li><Link to="/dpoint"> dポイントを貯める </Link></li>
                            <li><Link to="/paypaypoint"> PayPayポイントを貯める </Link></li>
                            <li><Link to="/vpoint"> Vポイントを貯める </Link></li>
                            <li><Link to="/waonpoint"> WAONポイントを貯める </Link></li>
                        </ul> 
                    </div>
                    
                    <div className="head-hover-contents">
                        <i className="fas fa-coins"></i> <br/>経済圏で選ぶ
                        <ul className="head-wrap-contents">
                            <li><Link to="/rakutenzone"> 楽天経済圏で貯める </Link></li>
                            <li><Link to="/sbizone"> SBI経済圏で貯める </Link></li>
                            <li><Link to="/paypayzone"> PayPay経済圏で貯める </Link></li>
                            <li><Link to="/auzone"> au経済圏で貯める </Link></li>
                            <li><Link to="/aeonzone"> イオン経済圏で貯める </Link></li>
                        </ul>
                    </div>
                    
                </div>
            </div>
            <script>

            </script>
        </body>
    </div>
    );
};

export default HeaderPage;