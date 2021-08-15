import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import Content from "../components/content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";

export default function App() {
    const [selectedItem, setSelectedItem] = useState("About");
    const [isShow, setIsShow] = useState(false);

    return (
        <div className="bg-blue-300 dark:bg-gray-800 h-screen pt-14 pb-10">
            <div className="container">
                <div className=" grid grid-cols-1 md:grid-cols-3 md:gap-2">
                    <Sidebar
                        setSelectedItem={setSelectedItem}
                        selectedItem={selectedItem}
                        setIsShow={setIsShow}
                        isShow={isShow}
                    />
                    <div
                        className={`bg-gray-50 dark:bg-gray-900 rounded transition-all duration-300 shadow-2xl md:block p-5 col-span-2 ${
                            isShow == false ? "hidden" : ""
                        }`}
                    >
                        <h2 className="font-bold dark:text-white border-b-2 mb-3 flex items-center pb-2">
                            <button
                                onClick={() => {
                                    setIsShow(false);
                                }}
                                className="inline-block mr-2 md:hidden"
                            >
                                <FontAwesomeIcon
                                    style={{ height: "1.33em" }}
                                    icon={faArrowCircleLeft}
                                />
                            </button>
                            {selectedItem}
                        </h2>
                        <Content selectedItem={selectedItem} />
                    </div>
                </div>
            </div>
        </div>
    );
}
