import HeaderPage from "../HeaderPage";
import FooterPage from "../FooterPage";
import ProjectList from "../../components/projects/projectlist";
const RakutenPointPage: React.FC = () => {
    return (
        <div>
        <HeaderPage/>
        <body>
            <h1> 楽天ポイントを貯める </h1>
            <p> 案件一覧 </p>
            <ProjectList tags = {["RakutenPoint"]}/>
        </body>
        <FooterPage/>
        </div>
    );
};

export default RakutenPointPage;