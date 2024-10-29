import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";

const SocialMediaLinks = () => {
    return (
        <div className="text-5xl flex justify-center gap-16 pb-5">
            <a href="https://github.com/MYAbdellaoui" key="github" aria-label="GitHub">
                <AiFillGithub className="text-gray-800 dark:text-gray-400" />
            </a>
            <a href="https://www.linkedin.com/in/mohammed-yassine-el-abdellaoui/" key="linkedin" aria-label="LinkedIn">
                <AiFillLinkedin className="text-blue-500" />
            </a>
        </div>
    );
};

export default SocialMediaLinks;
