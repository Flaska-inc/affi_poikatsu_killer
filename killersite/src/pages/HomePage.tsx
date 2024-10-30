import { Link } from "react-router-dom";
import Article001 from "../components/articles/article001";
import Case001 from "../components/cases/case001";
import HeaderPage from "./HeaderPage";
import FooterPage from "./FooterPage";

const HomePage: React.FC = () => {
    return (
        <div>
        <HeaderPage/>
        <body>
            <h3> オススメの案件 </h3>
            <Case001/>
            <h3> オススメの記事 </h3>
            <Article001/>
        </body>
        <FooterPage/>
        </div>
    );
};

export default HomePage;