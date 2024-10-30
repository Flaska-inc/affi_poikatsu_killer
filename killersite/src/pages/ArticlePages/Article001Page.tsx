import { Link } from "react-router-dom";
import Case001 from "../../components/cases/case001";
import HeaderPage from "../HeaderPage";
import FooterPage from "../FooterPage";
const Article001Page: React.FC = () => {
    return (
        <div>
        <HeaderPage/>
        <body>
            <h1> 記事タイトル </h1>
            <p>記事内容</p>
            <p>関連する案件<Case001/></p> 
        </body>
        <FooterPage/>
        </div>
    );
};

export default Article001Page;