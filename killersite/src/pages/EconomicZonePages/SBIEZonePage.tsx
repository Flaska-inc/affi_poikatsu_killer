import HeaderPage from "../HeaderPage";
import FooterPage from "../FooterPage";
import ProjectList from "../../components/projects/projectlist";
const SBIEZonePage: React.FC = () => {
    return (
        <div>
        <HeaderPage/>
        <body className="main-content">
            <h1> SBI経済圏で貯める </h1>
            <p> 案件一覧 </p>
            <ProjectList tags = {["SBIEZone"]}/>
        </body>
        <FooterPage/>
        </div>
    );
};

export default SBIEZonePage;