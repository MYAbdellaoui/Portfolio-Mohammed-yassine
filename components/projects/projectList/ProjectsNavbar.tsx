import { FunctionComponent } from "react";
import { Category } from "../../types";

export const NavItem: FunctionComponent<{
    value: Category | "all";
    handlerFilterCategory: Function;
    active: string;
}> = ({ value, handlerFilterCategory, active }) => {
    let className = "capitalize cursor-pointer px-4 py-2 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800 transition text-gray-800 dark:text-white";
    if (active === value) className += " bg-blue-300 dark:bg-blue-600 text-black dark:text-white";

    return (
        <li className={className} onClick={() => handlerFilterCategory(value)}>
            {value}
        </li>
    );
};

const ProjectsNavbar: FunctionComponent<{
    handlerFilterCategory: Function;
    active: string;
}> = (props) => {
    return (
        <div className="flex space-x-4 overflow-x-auto list-none my-4">
            <NavItem value="all" {...props} />
            <NavItem value="react" {...props} />
            <NavItem value="Laravel" {...props} />
            <NavItem value="Spring Boot" {...props} />
            <NavItem value="Mongodb" {...props} />
            <NavItem value="PHP" {...props} />
            <NavItem value="Angular" {...props} />
            <NavItem value="Next js" {...props} />
            <NavItem value="Arduino" {...props} />
        </div>
    );
};

export default ProjectsNavbar;
