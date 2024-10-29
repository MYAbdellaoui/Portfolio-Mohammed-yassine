import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectsNavbar from "./ProjectsNavbar";
import { projects as projectsData } from "../../data";
import { Category } from "../../types";

const ProjectsList = () => {
    const [projects, setProjects] = useState(projectsData);
    const [active, setActive] = useState("all");

    const handlerFilterCategory = (category: Category | "all") => {
        if (category === "all") {
            setProjects(projectsData);
            setActive(category);
            return;
        }

        const newArray = projectsData.filter((project) =>
            project.category.includes(category)
        );
        setProjects(newArray);
        setActive(category);
    };

    return (
        <div className="lg:p-5 sm:p-3 overflow-y-scroll max-h-screen">
            <ProjectsNavbar handlerFilterCategory={handlerFilterCategory} active={active} />
            <h2 className="text-center text-2xl text-gray-800 dark:text-white mt-4">Cliquez sur un projet pour plus de détails</h2>
            <div className="grid grid-cols-12 gap-4 mt-6">
                {projects.map((project) => (
                    <div className="col-span-12 p-4 bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg sm:col-span-6 lg:col-span-4">
                        <ProjectCard project={project} key={project.name} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsList;
