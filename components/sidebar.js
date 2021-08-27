import React, { useEffect, useState } from "react";

export default function Sidebar({
    setSelectedItem,
    setIsShow,
    selectedItem,
    isShow,
}) {
    const [isDark, setIsDark] = useState(false);

    const selectTheme = (value) => {
        localStorage.setItem("theme", value);
        setIsDark(value == "dark" ? true : false);
        const html = document.querySelector("html");
        html.classList.add(localStorage.getItem("theme"));
        if (value == "dark") {
            html.classList.remove("light");
        } else {
            html.classList.remove("dark");
        }
    };

    useEffect(() => {
        document
            .querySelector("html")
            .classList.add(localStorage.getItem("theme"));
        setIsDark(localStorage.getItem("theme") == "dark" ? true : false);
    }, []);

    return (
        <div
            className={`bg-gray-50 dark:bg-gray-900 dark:text-white rounded shadow-2xl p-5 transition-all duration-300 ${
                isShow == true ? "hidden" : ""
            } md:block`}
        >
            <div className="grid justify-items-center relative">
                <img
                    src="./img/profil.jpg"
                    className="w-1/3 rounded-full mb-4 border-2 border-gray-400 dark:border-white"
                />
                <h1 className="text-xl font-bold text-center">
                    Tajul Arifin Sirajudin
                </h1>
                <p>Web Developer</p>
                <div className="text-center mt-5 w-full py-2 border-t-2">
                    <ul>
                        <li>
                            <button
                                onClick={() => {
                                    setSelectedItem("About");
                                    setIsShow(true);
                                }}
                                className={`transition duration-200 ease-in-out ${
                                    selectedItem == "About"
                                        ? "btn btn-blue"
                                        : "btn"
                                }`}
                            >
                                About
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => {
                                    setSelectedItem("Skills");
                                    setIsShow(true);
                                }}
                                className={`transition duration-200 ease-in-out ${
                                    selectedItem == "Skills"
                                        ? "btn btn-blue"
                                        : "btn"
                                }`}
                            >
                                Skills
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => {
                                    setSelectedItem("Projects");
                                    setIsShow(true);
                                }}
                                className={`transition duration-200 ease-in-out ${
                                    selectedItem == "Projects"
                                        ? "btn btn-blue"
                                        : "btn"
                                }`}
                            >
                                Projects
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => {
                                    setSelectedItem("Contact");
                                    setIsShow(true);
                                }}
                                className={`transition duration-200 ease-in-out ${
                                    selectedItem == "Contact"
                                        ? "btn btn-blue"
                                        : "btn"
                                }`}
                            >
                                Contact
                            </button>
                        </li>
                        <li>
                            <a
                                href="https://drive.google.com/drive/folders/18SI8h0svoFw3z5dYF04s2Gw3RMqXK51R?usp=sharing"
                                target="_blank"
                            >
                                <button className="btn">Download CV</button>
                            </a>
                        </li>
                    </ul>
                </div>
                <small className="mt-5 text-gray-500">
                    Made with &hearts; by Me
                </small>
                <div className="absolute top-0 right-0">
                    {isDark ? (
                        <button onClick={() => selectTheme("light")}>
                            <img
                                className="w-6"
                                src="./img/icon/sun-solid.svg"
                            />
                        </button>
                    ) : (
                        <button onClick={() => selectTheme("dark")}>
                            <img
                                className="w-6"
                                src="./img/icon/moon-solid.svg"
                            />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
