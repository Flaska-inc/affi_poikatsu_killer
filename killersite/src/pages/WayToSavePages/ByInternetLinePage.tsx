import HeaderPage from "../HeaderPage";
import FooterPage from "../FooterPage";
import ProjectList from "../../components/projects/projectlist";
const ByInternetLinePage: React.FC = () => {
    return (
        <div>
        <HeaderPage/>
        <body>
            <h1> ネット回線の新規契約で貯める </h1>
            <p> 案件一覧 </p>
            <ProjectList tags = {["ByInternetLine"]}/>
        </body>
        <FooterPage/>
        </div>
    );
};

export default ByInternetLinePage;