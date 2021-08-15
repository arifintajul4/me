import React from "react";
import About from "./about";
import Contact from "./contact";
import Projects from "./projects";
import Skills from "./skills";

export default function Content({ selectedItem }) {
    return (
        <div>
            {selectedItem == "About" ? <About /> : <></>}
            {selectedItem == "Skills" ? <Skills /> : <></>}
            {selectedItem == "Projects" ? <Projects /> : <></>}
            {selectedItem == "Contact" ? <Contact /> : <></>}
        </div>
    );
}
