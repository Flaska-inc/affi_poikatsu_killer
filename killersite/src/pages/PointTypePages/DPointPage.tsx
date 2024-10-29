import Case001 from "../../components/cases/case001";
import { Link } from "react-router-dom";
import HeaderPage from "../HeaderPage";
import FooterPage from "../FooterPage";
const DPointPage: React.FC = () => {
    return (
        <div>
        <HeaderPage/>
        <body>
            <h1> dポイントを貯める </h1>
            <p> 案件一覧 </p>
            <Case001/> 
        </body>
        <FooterPage/>
        </div>
    );
};

export default DPointPage;