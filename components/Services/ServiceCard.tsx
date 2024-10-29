import { FunctionComponent } from "react";
import { Service } from "../types";

const ServiceCard: FunctionComponent<{ value: Service }> = ({ value: { Icon, title, about } }) => {
    function escapeXssAbout() {
        return {
            __html: about,
        };
    }

    return (
        <article className="bg-gradient-to-bl from-blue-200 to-blue-400 dark:from-blue-700 dark:to-blue-900 rounded-lg p-6 hover:shadow-lg transition-transform transform hover:scale-105 shadow-md">
            <div className="flex items-center p-2 space-x-4 text-2xl lg:text-3xl font-bold text-blue-800 dark:text-blue-300">
                <Icon className="text-5xl lg:text-6xl text-blue-700 dark:text-blue-200" /> 
                <h5>{title}</h5>
            </div>
            <p className="pt-3 text-gray-700 dark:text-gray-200" dangerouslySetInnerHTML={escapeXssAbout()} />
        </article>
    );
};

export default ServiceCard;
