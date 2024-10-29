import { Link } from "react-router-dom";
const Article001: React.FC = () => {
    return (
        <div ><Link to="/article001"/>
            <h3> 記事タイトル001 </h3>
            <p>記事の概要</p>
            <p>ハッシュタグ</p>
        </div>
    );
};

export default Article001;