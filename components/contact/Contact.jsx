import React, { useRef, useState } from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineLinkedin, AiOutlineWhatsApp } from "react-icons/ai";
import emailjs from '@emailjs/browser';
import Success from "./messages/Success";
import Loading from "./messages/Loading";
import Failed from "./messages/Failed";

function Contact() {
    const form = useRef();
    const [popUp, setPopUP] = useState(false);
    const [popUpMessage, setPopUpMessage] = useState(<Loading />);
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();
        setPopUpMessage(<Loading />);
        setPopUP(true);

        emailjs.sendForm("service_dyutgdf", "template_eno1gnj", form.current, "B7_eHL7pB53XpUc5E")
            .then(() => {
                clearForm();
                setPopUpMessage(<Success />);
                setTimeout(() => setPopUP(false), 3000);
            }, () => {
                setPopUpMessage(<Failed />);
                setTimeout(() => setPopUP(false), 3000);
            });
    };

    const clearForm = () => {
        setName("");
        setEmail("");
        setMessage("");
        setSubject("");
    };

    return (
        <section id="contact" className="min-h-screen pb-12">
            <div className="text-center p-6">
                <h5 className="text-2xl pt-2 dark:text-white">Entrons en contact</h5>
                <h2 className="p-10 text-4xl lg:text-5xl py-2 text-blue-600 font-medium">Contact</h2>
            </div>
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 px-6">
                <div className="flex flex-col gap-6 lg:w-1/2">
                    {/* Options de contact */}
                    <article className="p-6 rounded-lg shadow-lg border border-blue-300 dark:border-blue-700 bg-white dark:bg-gray-800 transition transform hover:scale-105 hover:shadow-xl">
                        <MdOutlineEmail className="text-4xl text-blue-600 dark:text-blue-300 mb-2" />
                        <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Email</h4>
                        <p className="text-lg text-gray-600 dark:text-gray-300">elabdellaoui.medyassine@gmail.com</p>
                        <a href="mailto:elabdellaoui.medyassine@gmail.com" className="text-blue-600 dark:text-blue-300 mt-3 inline-block hover:underline">Envoyer un email</a>
                    </article>
                    <article className="p-6 rounded-lg shadow-lg border border-blue-300 dark:border-blue-700 bg-white dark:bg-gray-800 transition transform hover:scale-105 hover:shadow-xl">
                        <AiOutlineWhatsApp className="text-4xl text-blue-600 dark:text-blue-300 mb-2" />
                        <h4 className="text-xl font-semibold text-gray-800 dark:text-white">WhatsApp</h4>
                        <p className="text-lg text-gray-600 dark:text-gray-300">+212642275781</p>
                        <a href="https://api.whatsapp.com/send?phone=212642275781" target="_blank" className="text-blue-600 dark:text-blue-300 mt-3 inline-block hover:underline">Envoyer un message</a>
                    </article>
                    <article className="p-6 rounded-lg shadow-lg border border-blue-300 dark:border-blue-700 bg-white dark:bg-gray-800 transition transform hover:scale-105 hover:shadow-xl">
                        <AiOutlineLinkedin className="text-4xl text-blue-600 dark:text-blue-300 mb-2" />
                        <h4 className="text-xl font-semibold text-gray-800 dark:text-white">LinkedIn</h4>
                        <p className="text-lg text-gray-600 dark:text-gray-300">@mohammed-yassine-el-abdellaoui</p>
                        <a href="https://www.linkedin.com/in/mohammed-yassine-el-abdellaoui/" target="_blank" className="text-blue-600 dark:text-blue-300 mt-3 inline-block hover:underline">Envoyer un message</a>
                    </article>
                </div>

                {/* Formulaire de contact */}
                <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 lg:w-1/2 p-6 rounded-lg shadow-lg border border-blue-300 dark:border-blue-700 bg-white dark:bg-gray-800">
                    <input type="text" name="name" placeholder="Nom complet" value={name} onChange={(e) => setName(e.target.value)} required className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600" />
                    <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600" />
                    <input type="text" name="subject" placeholder="Sujet" value={subject} onChange={(e) => setSubject(e.target.value)} required className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600" />
                    <textarea name="message" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} required className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600" rows="5"></textarea>
                    <button type="submit" className="bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition">Envoyer le message</button>
                </form>
            </div>

            {/* Message Pop-Up */}
            {popUp && popUpMessage}
        </section>
    );
}

export default Contact;
