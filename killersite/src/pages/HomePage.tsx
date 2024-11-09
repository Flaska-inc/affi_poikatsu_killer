import HeaderPage from "./HeaderPage";
import FooterPage from "./FooterPage";
import "../components/css/HomePage.css";
import ProjectBox from "../components/projects/projectbox";
import ArticleBox from "../components/articles/articlebox";

const HomePage: React.FC = () => {
    return (
        <div>
        <HeaderPage/>
        <body>
            <h3> オススメの案件 </h3>
            <div className="card_parent">
                <ProjectBox id = {1}/>
            </div>
            
            <h3> オススメの記事 </h3>
            <div className="card_parent">
                <ArticleBox id = {1}/>
            </div>
        </body>
        <FooterPage/>
        </div>
    );
};

export default HomePage;