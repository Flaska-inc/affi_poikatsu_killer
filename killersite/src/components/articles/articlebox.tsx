import { Link } from "react-router-dom";
import React from "react";
import ArticleDatabase from "../../database/articledata/articledata";
import "../css/ArticleBox.css"

interface ArticleBoxProps {
    id: number;
}

const ArticleBox: React.FC<ArticleBoxProps> = ({ id }) => {
    const article = ArticleDatabase.find((item) => item.id === id);
    if (!article) {
        return <div>記事が見つかりません</div>;
    }

    return (
        <div className="card"><Link to = {article.link}>
        <img className="card-img" src={article.picture} alt={article.title}/>
        <h2>{article.title}</h2>
        <p className="card-tag">タグ: {article.tag}</p>
        <p className="card-time">日付: {article.date}</p></Link>
        </div>
    );
};

export default ArticleBox;