import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedinIn,
    faFacebook,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Sosmed() {
    return (
        <div className="mt-6 text-center dark:text-white">
            <small className="text-center dark:text-gray-400">
                My Sosial Media
            </small>
            <ul className="flex justify-center items-center dark:text-gray-400">
                <li className="px-2">
                    <a href="https://github.com/arifintajul4" target="_blank">
                        <FontAwesomeIcon
                            style={{ width: "2em" }}
                            icon={faGithub}
                        />
                    </a>
                </li>
                <li className="px-2">
                    <a
                        href="https://www.linkedin.com/in/arifintajul4/"
                        target="_blank"
                    >
                        <FontAwesomeIcon
                            style={{ width: "2em" }}
                            icon={faLinkedinIn}
                        />
                    </a>
                </li>
                <li className="px-2">
                    <a href="mailto:arifintajul4@gmail.com">
                        <FontAwesomeIcon
                            style={{ width: "2em" }}
                            icon={faEnvelope}
                        />
                    </a>
                </li>
                <li className="px-2">
                    <a
                        href="https://instagram.com/tajul_arifins"
                        target="_blank"
                    >
                        <FontAwesomeIcon
                            style={{ width: "2em" }}
                            icon={faInstagram}
                        />
                    </a>
                </li>
                <li className="px-2">
                    <a href="https://facebook.com/arifintajul4" target="_blank">
                        <FontAwesomeIcon
                            style={{ width: "2em" }}
                            icon={faFacebook}
                        />
                    </a>
                </li>
            </ul>
        </div>
    );
}
