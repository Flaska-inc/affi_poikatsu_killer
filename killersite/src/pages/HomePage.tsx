import HeaderPage from "./HeaderPage";
import FooterPage from "./FooterPage";
import "../components/css/HomePage.css";
import ArticleBox from "../components/articles/articlebox";
import ProjectList from "../components/projects/projectlist";

const HomePage: React.FC = () => {
    return (
    <div id="homepage-outer">
        <HeaderPage/>
        <body className="main-content " id="homepage">
            <h3> <i className="fas fa-thumbs-up"></i>  オススメの案件 </h3>
            <div className="flex-3">
                <ProjectList tags = {[]}/>
            </div>
            
            <h3> <i className="far fa-newspaper"></i> オススメの記事 </h3>
            <div className="flex-3">
                <ArticleBox id = {1}/>
            </div>
        </body>
        <FooterPage/>
    </div>
    );
};

export default HomePage;