import HeaderPage from "../HeaderPage";
import FooterPage from "../FooterPage";
import ProjectList from "../../components/projects/projectlist";
const AEONEZonePage: React.FC = () => {
    return (
        <div>
        <HeaderPage/>
        <body>
            <h1> イオン経済圏で貯める </h1>
            <p> 案件一覧 </p>
            <ProjectList tags = {["AEONEZone"]}/>
        </body>
        <FooterPage/>
        </div>
    );
};

export default AEONEZonePage;