import HeaderPage from "../HeaderPage";
import FooterPage from "../FooterPage";
import CaseBox from "../../components/projects/projectbox";
const Article001Page: React.FC = () => {
    return (
        <div>
        <HeaderPage/>
        <body>
            <h1> 記事タイトル </h1>
            <p>記事内容</p>
            <p>関連する案件<CaseBox id = {1}/></p> 
        </body>
        <FooterPage/>
        </div>
    );
};

export default Article001Page;