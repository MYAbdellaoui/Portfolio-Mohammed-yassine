import React from 'react';
import { services } from "../data";
import ServiceCard from "./ServiceCard";

function Services() {
    return (
        <section id="services" className="min-h-screen py-10">
            <div className="text-center p-6">
                <h5 className="text-2xl pt-2 text-blue-700 dark:text-blue-200">Ce que je propose</h5>
                <h2 className="p-10 text-4xl lg:text-5xl py-2 text-blue-600 font-medium">Mes Services</h2>
            </div>
            <div id="services-cards" className="grid gap-6 md:gap-8 lg:gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service, i) => (
                    <ServiceCard value={service} key={i} />
                ))}
            </div>
        </section>
    );
}

export default Services;
