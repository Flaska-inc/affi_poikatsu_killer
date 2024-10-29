import { Link } from "react-router-dom";
import HeaderPage from "./HeaderPage";
import FooterPage from "./FooterPage";
import Article001 from "../components/articles/article001";
const ArticleListPage: React.FC = () => {
    return (
        <div>
        <HeaderPage/>
        <body>
            <h1> 記事一覧 </h1>
            <Article001/> 
        </body>
        <FooterPage/>
        </div>
    );
};

export default ArticleListPage;