import React from "react";
import { FunctionComponent } from "react";
import { Card } from "../types";

const CardItem: FunctionComponent<{ value: Card }> = (
    { value: { Icon, name, description } }
) => {
    return (
        <article className="bg-gradient-to-bl from-blue-300 to-blue-500 dark:from-blue-700 dark:to-blue-900 rounded-2xl border-2 border-transparent p-6 text-center
            hover:from-blue-700 hover:to-blue-500 hover:text-white
            dark:hover:from-blue-600 dark:hover:to-blue-400
            dark:text-white">
            <Icon className="mx-auto text-2xl mb-2" />
            <h5 className="text-2xl">{name}</h5>
            <small className="text-sm">{description}</small>
        </article>
    );
};

export default CardItem;
