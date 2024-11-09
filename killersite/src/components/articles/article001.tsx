import { Link } from "react-router-dom";

const Article001: React.FC = () => {
    return (
        <div className="card"><Link to="/article001"/>
            <h3> 記事タイトル001 </h3>
            <p>記事の概要</p>
            <p className="card_tag"># ハッシュタグ</p>
        </div>
    );
};

export default Article001;