import HeaderPage from "../HeaderPage";
import FooterPage from "../FooterPage";
import ProjectList from "../../components/projects/projectlist";
const ByQuestionairePage: React.FC = () => {
    return (
        <div>
        <HeaderPage/>
        <body className="main-content">
            <h1> アンケートで貯める </h1>
            <p> 案件一覧 </p>
            <ProjectList tags = {["ByQuestionnaire"]}/>
        </body>
        <FooterPage/>
        </div>
    );
};

export default ByQuestionairePage;