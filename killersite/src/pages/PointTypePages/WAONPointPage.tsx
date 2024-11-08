import HeaderPage from "../HeaderPage";
import FooterPage from "../FooterPage";
import ProjectList from "../../components/projects/projectlist";
const WAONPointPage: React.FC = () => {
    return (
        <div>
        <HeaderPage/>
        <body>
            <h1> WAONポイントを貯める </h1>
            <p> 案件一覧 </p>
            <ProjectList tags = {["WAONPoint"]}/>
        </body>
        <FooterPage/>
        </div>
    );
};

export default WAONPointPage;