import React from "react";
import Sosmed from "./sosmed";

export default function Contact() {
    return (
        <div
            className="pb-5"
            style={{ height: "70vh", overflowX: "auto", overflowX: "hidden" }}
        >
            <form className="px-2 mb-10">
                <div className="mb-4">
                    <label className="block">
                        <span className="text-gray-700 dark:text-gray-400">
                            Full name
                        </span>
                        <input
                            required
                            type="text"
                            className="mt-1 dark:bg-gray-800 dark:border-gray-800 dark:text-white block w-full border-2 p-1 focus:ring-2 focus:ring-blue-400 focus:outline-none "
                        />
                    </label>
                </div>
                <div className="mb-4">
                    <label className="block">
                        <span className="text-gray-700 dark:text-gray-400">
                            Email
                        </span>
                        <input
                            required
                            type="mail"
                            className="mt-1 dark:bg-gray-800 dark:border-gray-800 dark:text-white  block w-full border-2 p-1 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </label>
                </div>
                <div className="mb-4">
                    <label className="block">
                        <span className="text-gray-700 dark:text-gray-400">
                            Message
                        </span>
                        <textarea
                            required
                            type="text"
                            rows={3}
                            className="mt-1 dark:bg-gray-800 dark:border-gray-800 dark:text-white  block w-full border-2 p-1 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        ></textarea>
                    </label>
                </div>
                <button
                    type="submit"
                    className="bg-blue-700 dark:bg-green-700 text-white font-bold px-4 py-2 uppercase rounded"
                >
                    Send
                </button>
            </form>
            <Sosmed />
        </div>
    );
}
