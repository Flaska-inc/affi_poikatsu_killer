import HeaderPage from "./HeaderPage";
import FooterPage from "./FooterPage";
import ArticleBox from "../components/articles/articlebox";
const ArticleListPage: React.FC = () => {
    return (
        <div>
        <HeaderPage/>
        <body>
            <h1> 記事一覧 </h1>
            <ArticleBox id = {1}/>
            <ArticleBox id = {2}/>
            <ArticleBox id = {3}/>
        </body>
        <FooterPage/>
        </div>
    );
};

export default ArticleListPage;