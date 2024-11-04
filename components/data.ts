import {Card, IProject, Service, Skill} from "./types";
import {FiAward, FiUsers} from "react-icons/fi";
import {VscFolderLibrary} from "react-icons/vsc";
import {RiComputerLine} from "react-icons/ri";
import {FaDocker, FaLaravel, FaNodeJs, FaPhp, FaPython, FaReact, FaServer, FaVuejs} from "react-icons/fa";
import {AiFillGithub, AiOutlineApi, AiOutlineConsoleSql} from "react-icons/ai";
import {MdDeveloperMode, MdEngineering, MdOutlineDesignServices} from "react-icons/md";
import {
    SiCplusplus, SiDatabricks,
    SiDjango,
    SiExpress,
    SiJavascript,
    SiMicrosoftazure, SiMongodb, SiNextdotjs, SiPostgresql, SiRedis,
    SiTailwindcss, SiTextpattern,
    SiTypescript
} from "react-icons/si"
import {BiGitCompare, BiNetworkChart} from "react-icons/bi";
import {TbApi} from "react-icons/tb";
import {ImGit} from "react-icons/im";
import {DiGoogleAnalytics, DiLinux} from "react-icons/di";
import {GiTestTubes} from "react-icons/gi";
import { FaGolang, FaJava } from "react-icons/fa6";
import { SiScylladb, SiRabbitmq } from "react-icons/si";

export const languages: Skill[] = [
    {
        Icon: FaPython,
        name: "Python",
        level: "90",
    },
    {
        Icon: SiDjango,
        name: "Django",
        level: "85",
    },
    {
        Icon: TbApi,
        name: "Django REST API",
        level: "80",
    },
    {
        Icon: FaGolang,
        name: "Golang",
        level: "85",
    },
    {
        Icon: SiJavascript,
        name: "JavaScript",
        level: "80",
    },
    {
        Icon: SiTypescript,
        name: "TypeScript",
        level: "70",
    },
    {
        Icon: FaNodeJs,
        name: "NodeJS",
        level: "80",
    },
    {
        Icon: SiExpress,
        name: "ExpressJS",
        level: "70",
    },
    {
        Icon: FaReact,
        name: "ReactJS",
        level: "70",
    },
    {
        Icon: SiNextdotjs,
        name: "NextJS",
        level: "70",
    },
    {
        Icon: FaJava,
        name: "Java",
        level: "70",
    },
    {
        Icon: SiTailwindcss,
        name: "TailwindCSS",
        level: "80",
    },
    {
        Icon: AiOutlineConsoleSql,
        name: "SQL",
        level: "80",
    },
];

export const tools: Skill[] = [
    {
        Icon: FaDocker,
        name: "Docker",
        level: "75",
    },
    {
        Icon: SiMicrosoftazure,
        name: "Azure",
        level: "60",
    },
    {
        Icon: AiOutlineApi,
        name: "REST APIs",
        level: "70",
    },
    {
        Icon: ImGit,
        name: "GIT",
        level: "80",
    },
    {
        Icon: AiFillGithub,
        name: "GitHub",
        level: "80",
    },
    {
        Icon: BiGitCompare,
        name: "CI/CD",
        level: "60",
    },
    {
        Icon: DiLinux,
        name: "Unix/Linux",
        level: "85",
    },
    {
        Icon: SiPostgresql,
        name: "PostgreSQL",
        level: "70",
    },
    {
        Icon: SiRedis,
        name: "Redis",
        level: "60",
    },
    {
        Icon: SiMongodb,
        name: "MongoDB",
        level: "60",
    },
    {
        Icon: SiScylladb,
        name: "Scylladb",
        level: "70",
    },
    {
        Icon: SiRabbitmq,
        name: "Rabbitmq",
        level: "60",
    },
];

export const otherSkills: Skill[] = [
    {
        Icon: DiGoogleAnalytics,
        name: "Algorithm Analysis",
        level: "70",
    },
    {
        Icon: SiDatabricks,
        name: "Data Structure",
        level: "65",
    },
    {
        Icon: MdEngineering,
        name: "Software Engineering",
        level: "80",
    },
    {
        Icon: SiTextpattern,
        name: "MVC pattern",
        level: "75",
    },
    {
        Icon: BiNetworkChart,
        name: "Agile (Scrum)",
        level: "70",
    },
    {
        Icon: GiTestTubes,
        name: "Test Driven Development",
        level: "80",
    },

];

import { FaMedal, FaGlobe, FaProjectDiagram } from "react-icons/fa";

export const cards = [
    {
        Icon: FaMedal,
        name: "Expérience",
        description: "2+ ans d'expérience",
    },
    {
        Icon: FaGlobe,
        name: "Clients",
        description: "10+ dans le monde",
    },
    {
        Icon: FaProjectDiagram,
        name: "Projets",
        description: "30+ terminés",
    },
];


export const services = [
    {
        Icon: MdOutlineDesignServices,
        title: "Ingénierie Logicielle",
        about:
            "Avec plus de 3 ans d'expérience en tant qu'ingénieur logiciel dans des entreprises de technologie, je conçois des logiciels en <b>sélectionnant les outils adéquats</b>, en <b>définissant l'architecture logicielle</b> pour assurer la scalabilité et la maintenabilité des projets.",
    },
    {
        Icon: MdOutlineDesignServices,
        title: "Développement Fullstack",
        about:
            "Expertise en développement frontend et backend, avec des compétences dans les frameworks tels que <b>React</b>, <b>Laravel</b>, et <b>Spring Boot</b>. Je peux créer des applications performantes et adaptées aux besoins des clients.",
    },
    {
        Icon: FaServer,
        title: "Gestion de Bases de Données",
        about:
            "Conception et gestion de bases de données SQL et NoSQL, incluant MySQL, MongoDB, avec une optimisation des requêtes et de la structure pour des applications performantes.",
    },
    {
        Icon: AiOutlineApi,
        title: "Développement d'API",
        about:
            "Création d'API REST et GraphQL robustes avec les frameworks <b>Spring Boot</b>, <b>Express.js</b>, et <b>FastAPI</b>, respectant les règles métiers et assurant la sécurité et la fiabilité des données.",
    },
    {
        Icon: RiComputerLine,
        title: "Déploiement et DevOps",
        about:
            "Configuration de pipelines CI/CD et gestion d'infrastructures sur le cloud (AWS, Azure, DigitalOcean) avec une approche <b>Infrastructure as Code</b> pour un déploiement fluide et sécurisé.",
    },
    {
        Icon: MdDeveloperMode,
        title: "Ingénierie Compétitive",
        about: "Résolution de problèmes sur des plateformes comme <a class='text-blue-700 dark:text-blue-300 hover:text-blue-600 dark:hover:text-blue-600' href='https://leetcode.com/' target='_blank'><b>LeetCode</b></a> et <a class='text-blue-700 dark:text-blue-300 hover:text-blue-600 dark:hover:text-blue-600' href='https://www.hackerrank.com/' target='_blank'><b>HackerRank</b></a> pour affiner mes compétences en algorithmes et structures de données.",
    },
];
export const projects: IProject[] = [
    {
        name: "My Portfolio",
        description:
            "This app shows my portfolio for projects I did, my experience, everything up to date about me.",
        image_path: [
            "/images/projects/portfolio/portfolio1.png",
            "/images/projects/portfolio/portfolio2.png",
            "/images/projects/portfolio/portfolio3.png",
            "/images/projects/portfolio/portfolio4.png",

        ],
        
        category: ["react", "Next js"],
        key_techs: ["React.js", "Next js", "Tailwind CSS"],
    },

    {
        name: "Blood Maroc",
        image_path: ["/images/projects/Blood-Maroc.png"],
        deployed_url: "",
        category: ["Angular", "Spring Boot","Mongodb"],
        description:
            "Travail sur le projet Centre de Transfusion Sanguin, une application mobile et web pour la gestion des dons de sang.",
        key_techs: ["Angular", "Spring Boot","Mongodb","Boostrap"],
    },

    {
        name: "LinkEdu",
        image_path: ["/images/projects/linkedu.png",
            "/images/projects/linkedu0.jpg","/images/projects/linkedu1.jpg","/images/projects/linkedu2.jpg","/images/projects/linkedu3.jpg","/images/projects/linkedu4.jpg","/images/projects/linkedu5.jpg",
        ],
        deployed_url: "",

        category: ["react", "SQL", "Laravel"],
        description:
            "Développement d'une application web pour gérer les projets de fin d'études, facilitant la collaboration entre les équipes et leurs superviseurs avec des fonctionnalités de suivi des progrès, de discussion, et d'accès aux rapports précédents.",
        key_techs: ["react", "SQL", "Laravel","Material UI"],
    },

    {
        name: "Kosinty",
        image_path: [
            "/images/projects/Kosinty.png",
           
        ],
        deployed_url: "",
      
        category: ["Laravel", "SQL"],
        description:
            "Création d'une application web permettant aux utilisateurs d'ajouter, de consulter, et de gérer des recettes de cuisine. L'application inclut un système d'authentification utilisateur et une base de données optimisée pour un accès rapide. Utilisation de Laravel, MySQL, et GitHub pour le développement et la gestion du projet.",
        key_techs: ["Laravel", "SQL","Boostrap"],
    },

    {
        name: "Hna M3ak",
        image_path: [
            "/images/projects/Hna-M3ak.png",
           
        ],
    
        github_url: "",
        category: ["react","Laravel","Mongodb"],
        description:
            "Développement d’une application pour le suivi des patients atteints de cancer du sein, permettant aux patients de rapporter les effets secondaires de leurs traitements. Utilisation de Flutter pour le front-end mobile destiné aux patients, et de React pour le tableau de bord des administrateurs. L’application inclut une gestion complète des données médicales et des profils patients, avec une intégration backend en Node.js pour assurer la rapidité et la sécurité des échanges de données.",
        key_techs: ["react","Laravel","Flutter","Node.js","Mongodb"],
    },
    {
        name: "Location de Voiture",
        image_path: [
            "/images/projects/location.png",
           
        ],
        deployed_url: "",
        github_url: "",
        category: [ "SQL","PHP"],
        description:
            "Développement d'une application de gestion de location de voitures permettant une gestion fluide des réservations, des paiements ",
        key_techs: ["HTML","CSS" , "MySQL", "PHP", "JavaScript"],
    },
    {
        name: "Robot",
        image_path: ["/images/projects/Robot.png"],
        deployed_url: "",
        category: ["Arduino","Android","Firebase"],
        description: "Réalisation d'un robot voiture contrôlé via une application mobile.",
        key_techs: ["Arduino","Android","Firebase"],
    },

];
