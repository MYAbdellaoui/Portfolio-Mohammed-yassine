import React from 'react';
import ProjectsList from "./projectList/ProjectsList";

function Projects() {
    return (
        <section id="projects" className="min-h-screen">
            <div className="text-center p-6">
                <h5 className="text-2xl pt-2 text-blue-500 dark:text-blue-300">Ce que je fais</h5>
                <h2 className="p-10 text-4xl lg:text-5xl py-2 text-blue-600 font-medium">Mes Projets</h2>
            </div>
            <div className="bg-gradient-to-l from-white to-blue-200 rounded-2xl shadow-lg px-6 py-2 dark:from-blue-800 dark:to-blue-900 dark:text-white">
                <ProjectsList/>
            </div>
        </section>
    );
}

export default Projects;
