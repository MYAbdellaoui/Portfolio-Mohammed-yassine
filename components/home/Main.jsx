import React from 'react';
import SocialMediaLinks from "./SocialMediaLinks";
import Image from "next/image";
import waving from "../../public/Med_Yassine_EL_ABDELLAOUI.png";
import { MdOutlineFileDownload } from "react-icons/md";

const Main = () => {
    return (
        <section id="main" className="min-h-screen flex flex-col md:flex-row items-center justify-between p-10">
            {/* Section gauche pour le texte */}
            <div className="md:w-1/2 text-left p-5 flex flex-col justify-center">
                <h3 className="text-2xl pt-2 dark:text-white">Bonjour, je suis</h3>
                <h2 className="text-4xl lg:text-5xl py-2 text-blue-600 font-medium">Mohammed Yassine El Abdellaoui</h2>
                <h3 className="text-2xl pt-2 dark:text-white">Ingénieur Logiciel & Développeur Fullstack</h3>
                <div className="text-md py-5 leading-8 text-gray-800 dark:text-white">
                    <p>Je suis étudiant en ingénierie informatique à SupMTI, spécialisé en développement Full-Stack avec des expériences en React js, Spring Boot et Laravel</p>
                    <p>Je suis à la recherche d’un stage pour enrichir mes compétences.</p>
                </div>
                
                <SocialMediaLinks />

                <div className="flex gap-4 py-3">
                    <a
                        className="bg-gradient-to-r from-blue-700 to-blue-400 text-white text-lg px-4 py-2 rounded-full flex items-center"
                        href="/medyassine.cv.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        download="Mohammed Yassine El Abdellaoui CV.pdf"
                    >
                        <MdOutlineFileDownload className="mr-2" /> Télécharger mon CV
                    </a>
                </div>
            </div>

            {/* Section droite pour l'image */}
            <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
                <div className="relative bg-gradient-to-b from-blue-500 dark:from-blue-700 rounded-full w-72 h-72 overflow-hidden md:w-80 md:h-80 lg:w-96 lg:h-96 flex-shrink-0">
                    <Image
                        src={waving}
                        alt="avatar souriant"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>
            </div>
        </section>
    );
};

export default Main;
