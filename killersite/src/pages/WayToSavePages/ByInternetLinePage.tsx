import { Link } from "react-router-dom";
import Case001 from "../../components/cases/case001";
import HeaderPage from "../HeaderPage";
import FooterPage from "../FooterPage";
const ByInternetLinePage: React.FC = () => {
    return (
        <div>
        <HeaderPage/>
        <body>
            <h1> ネット回線の新規契約で貯める </h1>
            <p> 案件一覧 </p>
            <Case001/> 
        </body>
        <FooterPage/>
        </div>
    );
};

export default ByInternetLinePage;