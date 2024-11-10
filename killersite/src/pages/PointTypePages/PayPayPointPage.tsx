import HeaderPage from "../HeaderPage";
import FooterPage from "../FooterPage";
import ProjectList from "../../components/projects/projectlist";
const PayPayPointPage: React.FC = () => {
    return (
        <div>
        <HeaderPage/>
        <body className="main-content">
            <h1> PayPayポイントを貯める </h1>
            <p> 案件一覧 </p>
            <ProjectList tags = {["PayPayPoint"]}/>
        </body>
        <FooterPage/>
        </div>
    );
};

export default PayPayPointPage;