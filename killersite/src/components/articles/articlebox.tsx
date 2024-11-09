import { Link } from "react-router-dom";
import React from "react";
import ArticleDatabase from "../../database/articledata/articledata";

interface ArticleBoxProps {
    id: number;
}

const ArticleBox: React.FC<ArticleBoxProps> = ({ id }) => {
    const article = ArticleDatabase.find((item) => item.id === id);
    if (!article) {
        return <div>記事が見つかりません</div>;
    }

    return (
        <div><Link to = {article.link}>
        <img src={article.picture} alt={article.title}/>
        <h2>{article.title}</h2>
        <p>タグ: {article.tag}</p>
        <p>日付: {article.date}</p></Link>
        </div>
    );
};

export default ArticleBox;