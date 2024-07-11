import React from "react";
import Logo from "./../../assets/web-logo.svg";
import Kulky from "./../../assets/kulky.png";
import { ITProjectDesc } from "./types";
import { ITProjectCard } from "../components/itProjectCard";

export const ITProjects = () => {
    const itProjects: ITProjectDesc[] = [
        {
            src: Logo,
            title: "Pabrik Kuatji",
            link: "https://github.com/hasnaroihan/pabrik-kuatji",
            desc: "Portfolio website you are looking right now",
            stack: ["ReactJS", "Webpack", "Tailwind CSS"],
            status: "maintained",
        },
        {
            src: Kulky,
            title: "Grocery Planner",
            link: "https://github.com/hasnaroihan/grocery-planner",
            desc: "Digital cookbook that will generate your grocery list",
            stack: ["Go"],
            status: "ongoing",
        },
    ];

    return (
        <div className='w-full h-auto'>
            <div className='w-full p-5 md:p-10 h-3/4 flex flex-col md:flex-row justify-center items-center gap-3 md:gap-10 bg-red-200 drop-shadow-md z-10 overflow-clip'>
                {itProjects.map((el) => {
                    return <ITProjectCard project={el} />;
                })}
            </div>
        </div>
    );
};
