import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

export default function About() {
    return (
        <div
            className="pb-5"
            style={{ height: "70vh", overflowX: "auto", overflowX: "hidden" }}
        >
            <div className="flex justify-center mb-5">
                <img
                    src="./img/profil.jpg"
                    className="w-48 rounded border-2 border-gray-500 dark:border-white"
                />
            </div>
            <div className="mb-2 font-medium dark:text-white">
                <FontAwesomeIcon
                    className="mr-2 inline-block"
                    style={{ maxWidth: "1.33em" }}
                    icon={faInfoCircle}
                />
                About Me
            </div>
            <p className="leading-relaxed text-gray-500 dark:text-gray-300">
                Hello, my name is Tajul Arifin Sirajudin. I am a Full Stack Web
                Developer, very interested in programming. I started programming
                since April, 2017. I have experience in creating several
                websites, such as monitoring, digital wallet, and online
                shopping. Worked with many libraries & frameworks like ReactJS,
                Codeigniter, Laravel, etc. It does feel amazing to see myself
                improving, Hoping to continue to improve and be better than now.
            </p>
        </div>
    );
}
