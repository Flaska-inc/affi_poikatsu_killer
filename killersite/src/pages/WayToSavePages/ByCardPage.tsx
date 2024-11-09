import HeaderPage from "../HeaderPage";
import FooterPage from "../FooterPage";
import ProjectList from "../../components/projects/projectlist";
const ByCardPage: React.FC = () => {
    return (
        <div>
        <HeaderPage/>
        <body>
            <h1> カードで貯める </h1>
            <p> 案件一覧 </p>
            <ProjectList tags = {["ByCard"]}/>
        </body>
        <FooterPage/>
        </div>
    );
};

export default ByCardPage;