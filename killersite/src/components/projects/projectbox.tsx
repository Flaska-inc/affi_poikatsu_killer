import React from "react";
import ProjectDatabase from "../../database/projectdata/projectdata";
import "../css/ProjectBox.css"

interface ProjectBoxProps {
    id: number;
}

const ProjectBox: React.FC<ProjectBoxProps> = ({ id }) => {
    const project = ProjectDatabase.find((item) => item.id === id);
    if (!project) {
        return <div>案件が見つかりません</div>;
    }

    return (
        <div className="card">
            <div dangerouslySetInnerHTML={{ __html: project.url }}/>
            <h2>{project.title}</h2>
            <p className="card-tag">タグ: {project.tag}</p>
            <p className="card-time">日付: {project.date}</p>
        </div>
    );
};

export default ProjectBox;