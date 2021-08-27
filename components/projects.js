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
                desc: "Website untuk melakukan konsultasi kerusakan komputer, dengan menjawab beberapa pertanyaan terkait gejala kerusakan komputer yang dialami. sistem akan memberikan diagnosis berdasarkan pengetahuan pakar yang telah diinput sebelumnya",
            },
            {
                imageUrl: "./img/projects/movie-finder.PNG",
                title: "Movie Finder - Dicoding",
                url: "https://movie-finders.netlify.app/",
                github: "https://github.com/arifintajul4/DicodingMovieApp",
                desc: "Adalah website untuk pencarian film, dibuat untuk memenuhi tugas akhir dari kelas Front End di Dicoding",
            },
            {
                imageUrl: "./img/projects/movie-review.PNG",
                title: "Movies and Games Review",
                url: "",
                github: "https://tajul.netlify.app/",
                desc: "Website untuk melihat daftar review film dan games. dibuat untuk memenuhi tugas akhir dari bootcamp Sanbercode",
            },
            {
                imageUrl: "./img/projects/app-perpus.PNG",
                title: "App Perpus",
                url: "",
                github: "https://github.com/arifintajul4/app-perpus",
                desc: "Perpustakan online, digunakan untuk melakukan peminjaman dan pengembalian buku secara online. sehingga data peminjaman dan pengembalian buku tercatat dan terkelola dengan baik",
            },
        ],
        private: [
            {
                imageUrl: "./img/projects/p3tgai.PNG",
                title: "P3TGAI Web",
                url: "https://p3tgai-bwsnt1-opivbidom2021.id/",
                github: "",
                desc: "Adalah website untuk melakukan pendaftaran pegawat baru Program Percepatan Peningkatan Tata Guna Air Irigasi",
            },
            {
                imageUrl: "./img/projects/reservasi-wisma.PNG",
                title: "Reservasi Wisma Online",
                url: "",
                github: "",
                desc: "Adalah website untuk melakukan reservasi atau pemesan kamar wisma secara online, tanpa harus ada di tempat terlebih dahulu",
            },
            {
                imageUrl: "./img/projects/ra.PNG",
                title: "Ra Ibadurrahman Web",
                url: "",
                github: "",
                desc: "adalah wesbite untuk membantu Ra Ibadurrah mengelola data keuangan siswa",
            },
            {
                imageUrl: "./img/projects/app-gis.PNG",
                title: "App GIS",
                url: "",
                github: "",
                desc: "adalah website untuk melihat daftar tempat sesuai dengan zona wilayah",
            },
        ],
    };
    return (
        <div
            className="pb-5 overflow-x-hidden overflow-y-auto"
            style={{ height: "70vh" }}
        >
            <h3 className="mb-3 text-gray-500 dark:text-gray-300 font-medium">
                [{projectList.public.length}] Public
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-2">
                {projectList.public.map((el, idx) => {
                    return (
                        <Card
                            key={idx}
                            imageUrl={el.imageUrl}
                            title={el.title}
                            url={el.url}
                            github={el.github}
                            desc={el.desc}
                        />
                    );
                })}
            </div>
            <h3 className="mb-3 text-gray-500 dark:text-gray-300 mt-5 font-medium">
                [{projectList.private.length}] Private
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-2">
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
