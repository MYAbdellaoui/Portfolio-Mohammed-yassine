import Bar from "./Bar";
import { languages, tools, otherSkills } from "../../data";

const Resume = () => {
    return (
        <div className="bg-gradient-to-l from-white to-blue-200 rounded-2xl shadow-lg px-8 py-6 dark:from-blue-700 dark:to-blue-900 dark:text-white">
            {/* Éducation & Expérience */}
            <div className="grid gap-8 md:grid-cols-2">
                {/* Éducation */}
                <div className="p-4 rounded-lg shadow-md">
                    <h5 className="my-4 text-3xl font-bold text-blue-600 dark:text-blue-400">Éducation</h5>
                    
                    <div className="mb-4">
                        <h5 className="text-xl font-semibold">Cycle d'ingénieur en Génie Informatique</h5>
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">École Supérieure de Management, de Télécommunications, et d'Informatique (SupMTI) | Rabat, Maroc</p>
                        <small className="text-gray-500 dark:text-gray-400">2023 - 2025 (en cours)</small>
                    </div>

                    <div className="mb-4">
                        <h5 className="text-xl font-semibold">Licence Professionnelle en Informatique</h5>
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">École Supérieure de Technologie, Safi</p>
                        <small className="text-gray-500 dark:text-gray-400">2021 - 2022</small>
                    </div>

                    <div className="mb-4">
                        <h5 className="text-xl font-semibold">Technicien Spécialisé en Développement Informatique</h5>
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">OFPPT Ista, Rabat</p>
                        <small className="text-gray-500 dark:text-gray-400">2019 - 2021</small>
                    </div>

                    <div>
                        <h5 className="text-xl font-semibold">Baccalauréat Scientifique, Mention Bien</h5>
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Lycée Abbass Miftah, Salé</p>
                        <small className="text-gray-500 dark:text-gray-400">2018 - 2019</small>
                    </div>
                </div>

                {/* Expérience */}
                <div className="p-4 rounded-lg shadow-md">
                    <h5 className="my-4 text-3xl font-bold text-blue-600 dark:text-blue-400">Expérience</h5>

                    <div className="mb-4">
                        <h5 className="text-xl font-semibold">Développeur Fullstack - Stage</h5>
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">NORSYS AFRIQUE, Marrakech</p>
                        <small className="text-gray-500 dark:text-gray-400">Août 2024 - Septembre 2024</small>
                        <article className="text-gray-600 dark:text-gray-400 mt-2">
                            <p>Travail sur le projet Centre de Transfusion Sanguin, une application mobile et web pour la gestion des dons de sang.</p>
                            <p className="font-semibold">Stack : Angular, Spring Boot , Mongodb</p>
                        </article>
                    </div>

                    <div className="mb-4">
                        <h5 className="text-xl font-semibold">Projet PFA - Développeur Fullstack</h5>
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">ENSET MOHAMMADIA</p>
                        <small className="text-gray-500 dark:text-gray-400">2023 - 2024</small>
                        <article className="text-gray-600 dark:text-gray-400 mt-2">
                            <p>Développement d'une application web pour gérer les projets de fin d'études, facilitant la collaboration entre les équipes et leurs superviseurs avec des fonctionnalités de suivi des progrès, de discussion, et d'accès aux rapports précédents.
                            </p>
                            <p className="font-semibold">Stack : React js, Laravel , MySQL ,GitHub</p>
                        </article>
                    </div>

                    <div className="mb-4">
                        <h5 className="text-xl font-semibold">Projet de fin d'année - Licence</h5>
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">École Supérieure de Technologie, Safi</p>
                        <small className="text-gray-500 dark:text-gray-400">Mai 2022 - Juillet 2022</small>
                        <article className="text-gray-600 dark:text-gray-400 mt-2">
                            <p>Conception d'une application web pour la gestion de recettes de cuisine.</p>
                            <p className="font-semibold">Stack :  React js, Laravel , MySQL ,GitHub</p>
                        </article>
                    </div>
                    <div>
                        <h5 className="text-xl font-semibold">Projet de fin d'études </h5>
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">OFPPT Ista - Rabat</p>
                        <small className="text-gray-500 dark:text-gray-400">2021 mars - 2021 juin</small>
                        <article className="text-gray-600 dark:text-gray-400 mt-2">
                            <p>Réalisation d'un robot voiture contrôlé via une application mobile.</p>
                            <p className="font-semibold">Stack : Arduino, Android, Firebase</p>
                        </article>
                    </div>

                    <div>
                        <h5 className="text-xl font-semibold">Développeur Fullstack - Stage</h5>
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">École Supérieure de Technologie, Safi</p>
                        <small className="text-gray-500 dark:text-gray-400">Août 2021 - Septembre 2021</small>
                        <article className="text-gray-600 dark:text-gray-400 mt-2">
                            <p>Développement d'une application pour la gestion de location de voitures.</p>
                            <p className="font-semibold">Stack : HTML, CSS, MySQL, PHP, JavaScript</p>
                        </article>
                    </div>
                </div>
            </div>

            {/* Langages & Outils */}
           
        </div>
    );
};

export default Resume;
