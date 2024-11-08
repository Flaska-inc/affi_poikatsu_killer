import HeaderPage from "../HeaderPage";
import FooterPage from "../FooterPage";
import ProjectList from "../../components/projects/projectlist";
const PayPayEZonePage: React.FC = () => {
    return (
        <div>
        <HeaderPage/>
        <body>
            <h1> PayPay経済圏で貯める </h1>
            <p> 案件一覧 </p>
            <ProjectList tags = {["PayPayEZone"]}/>
        </body>
        <FooterPage/>
        </div>
    );
};

export default PayPayEZonePage;