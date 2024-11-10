import HeaderPage from "../HeaderPage";
import FooterPage from "../FooterPage";
import ProjectList from "../../components/projects/projectlist";
const AUEZonePage: React.FC = () => {
    return (
        <div>
        <HeaderPage/>
        <body className="main-content">
            <h1> au経済圏で貯める </h1>
            <p> 案件一覧 </p>
            <ProjectList tags = {["AUEZone"]}/>
        </body>
        <FooterPage/>
        </div>
    );
};

export default AUEZonePage;