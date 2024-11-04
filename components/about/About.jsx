import React from 'react';
import Image from "next/image";
import Profile from "../../public/logo-black.png";
import CardItem from "./CardItem";
import {cards} from "../data";
import Resume from "./resume/Resume";

function About() {
    return (
        <section id="about" className="min-h-screen">
            <div className="text-center p-6">
                <h5 className="text-2xl pt-2 dark:text-white">Apprendre à Me Connaître</h5>
                <h2 className="p-10 text-4xl lg:text-5xl py-2 text-blue-600 font-medium">À Propos de Moi</h2>
            </div>
            <div id="about-container" className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10">
                
                <div id="about-me" className="grid grid-cols-1 aspect-square rounded-3xl bg-gradient-to-b from-blue-500 dark:from-blue-700 sm:w-3/5 lg:w-5/6 sm:mx-auto">
                    <Image src={Profile} alt="Photo de profil" 
                           className="rounded-3xl overflow-hidden transform rotate-6 transition duration-200 delay-50 hover:rotate-0" 
                    />
                </div>

                <div id="about-content" className="py-6 lg:col-span-2">
                    <div id="about-cards" className="grid gap-3 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
                        {cards.map((card, i) => (
                            <CardItem value={card} key={i} />
                        ))}
                    </div>
                    <div className="text-xl p-6 text-gray-800 dark:text-white
                     bg-gradient-to-l from-white to-blue-200
                     rounded-3xl my-4 dark:from-blue-700 dark:to-blue-900
                     ">
                        <p>
                        Je m'appelle Mohammed Yassine El Abdellaoui, j'ai 23 ans, et je suis un développeur Full-Stack passionné, doté d'une solide expérience dans la création et le développement d'applications web et mobiles. Actuellement étudiant en ingénierie informatique, j'ai enrichi mes compétences techniques grâce à des stages pratiques en développement Full-Stack, ce qui m'a également permis de renforcer ma capacité à travailler efficacement en équipe. Sérieux, motivé et attentif, je m'efforce de comprendre les besoins spécifiques des projets et d'y contribuer de manière constructive, tout en restant à jour sur les dernières innovations technologiques.
                        </p>
                       
                    </div>
                    <Resume/>
                </div>
            </div>
        </section>
    );
}

export default About;