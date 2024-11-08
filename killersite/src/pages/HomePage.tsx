import HeaderPage from "./HeaderPage";
import FooterPage from "./FooterPage";
import ProjectBox from "../components/projects/projectbox";
import ArticleBox from "../components/articles/articlebox";

const HomePage: React.FC = () => {
    return (
        <div>
        <HeaderPage/>
        <body>
            <h3> オススメの案件 </h3>
            <ProjectBox id = {1}/>
            <h3> オススメの記事 </h3>
            <ArticleBox id = {1}/>
        </body>
        <FooterPage/>
        </div>
    );
};

export default HomePage;