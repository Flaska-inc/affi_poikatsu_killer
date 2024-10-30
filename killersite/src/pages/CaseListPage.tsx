import Case001 from "../components/cases/case001";
import { Link } from "react-router-dom";
import HeaderPage from "./HeaderPage";
import FooterPage from "./FooterPage";
const CaseListPage: React.FC = () => {
    return (
        <div>
        <HeaderPage/>
        <body>
            <h1> 案件一覧 </h1>
            <Case001/> 
        </body>
        <FooterPage/>
        </div>
    );
};

export default CaseListPage;