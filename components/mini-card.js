import React from "react";

export default function MiniCard({ imageUrl, title }) {
    return (
        <div className="hover:shadow-lg bg-white dark:bg-gray-800 dark:text-white transform transition-all duration-300 hover:rotate-6 shadow-xl rounded flex items-center p-4">
            <img
                src={imageUrl}
                className="w-10 inline-block mr-2"
                alt={title}
            />
            <p className="uppercase truncate">{title}</p>
        </div>
    );
}
