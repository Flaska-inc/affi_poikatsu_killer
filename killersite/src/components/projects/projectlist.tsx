// ProjectList.tsx
import React from "react";
import ProjectBox from "./projectbox";
import ProjectDatabase from "../../database/projectdata/projectdata";

interface ProjectListProps {
    tags: string[];
}

const ProjectList: React.FC<ProjectListProps> = ({ tags }) => {
    const filteredProjects = ProjectDatabase.filter((project) => project.tag.some((projectTag) => tags.includes(projectTag))
    );

  // 一致する案件がない場合のメッセージ
  if (filteredProjects.length === 0) {
    return <div>該当する案件がありません</div>;
  }

  return (
    <div>
      {filteredProjects.map((project) => (
        <ProjectBox key={project.id} id={project.id} />
      ))}
    </div>
  );
};

export default ProjectList;