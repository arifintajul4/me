import React from "react";
import MiniCard from "./mini-card";

export default function Skills() {
    const skillList = {
        programing: [
            { imageUrl: "./img/skills/php.png", title: "php" },
            {
                imageUrl: "./img/skills/javascript.png",
                title: "javascript",
            },
            {
                imageUrl: "./img/skills/c.png",
                title: "c++",
            },
            {
                imageUrl: "./img/skills/java.png",
                title: "java",
            },
        ],
        framework: [
            { imageUrl: "./img/skills/ci.png", title: "codeigniter" },
            { imageUrl: "./img/skills/laravel.png", title: "laravel" },
            { imageUrl: "./img/skills/jquery.png", title: "jquery" },
            { imageUrl: "./img/skills/react.png", title: "reactjs" },
            { imageUrl: "./img/skills/next.png", title: "nextjs" },
            { imageUrl: "./img/skills/bootstrap.png", title: "bootstrap" },
            { imageUrl: "./img/skills/tailwind.png", title: "tailwind" },
            { imageUrl: "./img/skills/antd.svg", title: "antd" },
            { imageUrl: "./img/skills/axios.png", title: "axios" },
        ],
        others: [
            { imageUrl: "./img/skills/git.png", title: "git" },
            { imageUrl: "./img/skills/vs.png", title: "vs code" },
            { imageUrl: "./img/skills/netlify.png", title: "netlify" },
            { imageUrl: "./img/skills/mysql.png", title: "mysql" },
        ],
    };

    return (
        <div
            className="pb-5 overflow-x-hidden overflow-y-auto"
            style={{ height: "70vh" }}
        >
            <h3 className="mb-3 text-gray-500 dark:text-gray-300">
                [{skillList.programing.length}] Programming Languages
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {skillList.programing.map((el, index) => {
                    return (
                        <MiniCard
                            key={index}
                            imageUrl={el.imageUrl}
                            title={el.title}
                        />
                    );
                })}
            </div>
            <h3 className="mb-3 text-gray-500 mt-10 dark:text-gray-300">
                [{skillList.framework.length}] Libraries/Frameworks
            </h3>
            <div className="grid rid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {skillList.framework.map((el, idx) => {
                    return (
                        <MiniCard
                            key={idx}
                            imageUrl={el.imageUrl}
                            title={el.title}
                        />
                    );
                })}
            </div>
            <h3 className="mb-3 text-gray-500 mt-10 dark:text-gray-300">
                [{skillList.others.length}] Others
            </h3>
            <div className="grid rid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {skillList.others.map((el, idx) => {
                    return (
                        <MiniCard
                            key={idx}
                            imageUrl={el.imageUrl}
                            title={el.title}
                        />
                    );
                })}
            </div>
        </div>
    );
}
