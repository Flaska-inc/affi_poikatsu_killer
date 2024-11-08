import HeaderPage from "./HeaderPage";
import FooterPage from "./FooterPage";
import ProjectList from "../components/projects/projectlist";
const ProjectListPage: React.FC = () => {
    return (
        <div>
        <HeaderPage/>
        <body>
            <h1> 案件一覧 </h1>
            <ProjectList tags={[]} />
        </body>
        <FooterPage/>
        </div>
    );
};

export default ProjectListPage;