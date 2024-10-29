

import { FunctionComponent } from "react";

import { Skill } from "../../types";

const Bar: FunctionComponent<{ value: Skill }> =
    (
        {value: { Icon, level, name },}
    ) => {
    const bar_width = `${level}%`;
    return (
        <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300 dark:bg-black-500">

        </div>
    );
};
export default Bar;