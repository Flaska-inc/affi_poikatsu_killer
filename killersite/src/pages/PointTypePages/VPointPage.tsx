import HeaderPage from "../HeaderPage";
import FooterPage from "../FooterPage";
import ProjectList from "../../components/projects/projectlist";
const VPointPage: React.FC = () => {
    return (
        <div>
        <HeaderPage/>
        <body>
            <h1> Vポイントを貯める </h1>
            <p> 案件一覧 </p>
            <ProjectList tags = {["VPoint"]}/>
        </body>
        <FooterPage/>
        </div>
    );
};

export default VPointPage;