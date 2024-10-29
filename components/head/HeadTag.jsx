import React from 'react';
import Head from 'next/head';

const HeadTag = () => {
    return (
        <Head>
            <title>Mohammed Yassine EL Abdellaoui Portfolio</title>
            <meta name="description" content="Mohammed Yassine EL Abdellaoui Portfolio. Fullstack developer." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" /> {/* Utilisez favicon.ico ou favicon.png dans le dossier public */}
        </Head>
    );
};

export default HeadTag;
