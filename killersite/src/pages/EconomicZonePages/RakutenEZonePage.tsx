import HeaderPage from "../HeaderPage";
import FooterPage from "../FooterPage";
import ProjectList from "../../components/projects/projectlist";
const RakutenEZonePage: React.FC = () => {
    return (
        <div>
        <HeaderPage/>
        <body className="main-contentr">
            <h1> 楽天経済圏で貯める </h1>
            <p> 案件一覧 </p>
            <ProjectList tags = {["RakutenEZone"]}/>
        </body>
        <FooterPage/>
        </div>
    );
};

export default RakutenEZonePage;