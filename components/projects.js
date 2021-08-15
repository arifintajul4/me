import React from "react";
import Card from "./card";

export default function Projects() {
    const projectList = {
        public: [
            {
                imageUrl: "./img/projects/sipak.PNG",
                title: "Si Pak Komputer",
                url: "",
                github: "https://github.com/arifintajul4/si-pak",
            },
            {
                imageUrl: "./img/projects/movie-finder.PNG",
                title: "Movie Finder - Dicoding",
                url: "https://movie-finders.netlify.app/",
                github: "https://github.com/arifintajul4/DicodingMovieApp",
            },
            {
                imageUrl: "./img/projects/movie-review.PNG",
                title: "Movies and Games Review",
                url: "",
                github: "https://tajul.netlify.app/",
            },
            {
                imageUrl: "./img/projects/app-perpus.PNG",
                title: "App Perpus",
                url: "",
                github: "https://github.com/arifintajul4/app-perpus",
            },
        ],
        private: [
            {
                imageUrl: "./img/projects/p3tgai.PNG",
                title: "P3TGAI Web",
                url: "https://p3tgai-bwsnt1-opivbidom2021.id/",
                github: "",
            },
            {
                imageUrl: "./img/projects/reservasi-wisma.PNG",
                title: "Reservasi Wisma App",
                url: "",
                github: "",
            },
        ],
    };
    return (
        <div
            className="pb-5"
            style={{ height: "70vh", overflowX: "auto", overflowX: "hidden" }}
        >
            <h3 className="mb-3 text-gray-500 dark:text-gray-300 font-medium">
                [{projectList.public.length}] Public
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                {projectList.public.map((el, idx) => {
                    return (
                        <Card
                            key={idx}
                            imageUrl={el.imageUrl}
                            title={el.title}
                            url={el.url}
                            github={el.github}
                        />
                    );
                })}
            </div>
            <h3 className="mb-3 text-gray-500 dark:text-gray-300 mt-5 font-medium">
                [{projectList.private.length}] Private
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                {projectList.private.map((el, idx) => {
                    return (
                        <Card
                            key={idx}
                            imageUrl={el.imageUrl}
                            title={el.title}
                            url={el.url}
                            github={el.github}
                        />
                    );
                })}
            </div>
        </div>
    );
}
