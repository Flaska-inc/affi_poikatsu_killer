import React from "react";
import ProjectDatabase from "../../database/projectdata/projectdata";

interface ProjectBoxProps {
    id: number;
}

const ProjectBox: React.FC<ProjectBoxProps> = ({ id }) => {
    const project = ProjectDatabase.find((item) => item.id === id);
    if (!project) {
        return <div>案件が見つかりません</div>;
    }

    return (
        <div>
        <img src={project.picture} alt={project.title}/>
        <h2>{project.title}</h2>
        <p>タグ: {project.tag}</p>
        <p>日付: {project.date}</p>
        </div>
    );
};

export default ProjectBox;