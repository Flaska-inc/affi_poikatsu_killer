import { Link } from "react-router-dom";
import Article001 from "../components/articles/article001";
import Case001 from "../components/cases/case001";
import HeaderPage from "./HeaderPage";
import FooterPage from "./FooterPage";
import "../components/css/HomePage.css";

const HomePage: React.FC = () => {
    return (
        <div>
        <HeaderPage/>
        <body>
            <h3> オススメの案件 </h3>
            <div className="card_parent">
                <Case001/>
            </div>
            
            <h3> オススメの記事 </h3>
            <div className="card_parent">
                <Article001/>
            </div>
        </body>
        <FooterPage/>
        </div>
    );
};

export default HomePage;