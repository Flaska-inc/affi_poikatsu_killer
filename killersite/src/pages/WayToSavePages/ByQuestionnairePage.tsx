import { Link } from "react-router-dom";
import Case001 from "../../components/cases/case001";
import HeaderPage from "../HeaderPage";
import FooterPage from "../FooterPage";
const ByQuestionairePage: React.FC = () => {
    return (
        <div>
        <HeaderPage/>
        <body>
            <h1> アンケートで貯める </h1>
            <p> 案件一覧 </p>
            <Case001/> 
        </body>
        <FooterPage/>
        </div>
    );
};

export default ByQuestionairePage;