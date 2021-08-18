import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Card({ imageUrl, title, url = "", github = "" }) {
    return (
        <div className="hover:shadow-lg bg-white dark:bg-gray-800 shadow-xl rounded d-flex overflow-hidden">
            <img src={imageUrl} className="w-full" alt={title} />
            <h3 className="font-bold text-md py-2 px-4 text-gray-800 dark:text-white">
                {title}
            </h3>
            <div className="flex justify-around border-t-2 px-4 pb-4 pt-2">
                <a href={url} target="_blank">
                    <button
                        className={`flex items-center ${
                            url == ""
                                ? "text-gray-500 dark:text-gray-500"
                                : "text-blue-500 dark:text-gray-300"
                        }`}
                        disabled={url == "" ? true : false}
                    >
                        <FontAwesomeIcon
                            className="inline-block mr-2"
                            style={{ width: "1.33em" }}
                            icon={faLink}
                        />
                        Link
                    </button>
                </a>
                <a href={github} target="_blank">
                    <button
                        className={`flex items-center ${
                            github == ""
                                ? "text-gray-500 dark:text-gray-500"
                                : "text-blue-500 dark:text-gray-300"
                        }`}
                        disabled={github == "" ? true : false}
                    >
                        <FontAwesomeIcon
                            className="inline-block mr-2"
                            style={{ width: "1.33em" }}
                            icon={faGithub}
                        />
                        Github
                    </button>
                </a>
            </div>
        </div>
    );
}
