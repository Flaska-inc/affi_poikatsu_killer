import HeaderPage from "../HeaderPage";
import FooterPage from "../FooterPage";
import ProjectList from "../../components/projects/projectlist";
const DPointPage: React.FC = () => {
    return (
        <div>
        <HeaderPage/>
        <body>
            <h1> dポイントを貯める </h1>
            <p> 案件一覧 </p>
            <ProjectList tags = {["DPoint"]}/>
        </body>
        <FooterPage/>
        </div>
    );
};

export default DPointPage;