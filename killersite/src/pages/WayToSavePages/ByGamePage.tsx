import HeaderPage from "../HeaderPage";
import FooterPage from "../FooterPage";
import ProjectList from "../../components/projects/projectlist";
const ByGamePage: React.FC = () => {
    return (
        <div>
        <HeaderPage/>
        <body className="main-content">
            <h1> ゲームで貯める </h1>
            <p> 案件一覧 </p>
            <ProjectList tags = {["ByGame"]}/>
        </body>
        <FooterPage/>
        </div>
    );
};

export default ByGamePage;