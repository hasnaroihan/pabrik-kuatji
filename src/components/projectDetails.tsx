import { useEffect } from "react";
import Logo from "./../../assets/web-logo.svg";
import Kulky from "./../../assets/kulky.png";
import { ITProjectDesc } from "../pages/types";
import { ITProjectCard } from "./itProjectCard";
const test = require;

export const ProjectDetails = ({
    project,
    setProject,
}: {
    project: string;
    setProject: React.Dispatch<React.SetStateAction<string>>;
}) => {
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

    const imageNames1 = ["1", "2", "3"];

    const imageNames2 = ["2", "3", "1"];

    const imageNames3 = ["1"];

    return (
        <div className='w-full h-full flex flex-col bg-inherit'>
            {project == "it" ? (
                <div className='w-full p-5 md:p-10 h-3/4 flex flex-col md:flex-row justify-center items-center gap-3 md:gap-10 bg-red-200 drop-shadow-md z-10 overflow-clip'>
                    {itProjects.map((el) => {
                        return <ITProjectCard project={el} />;
                    })}
                </div>
            ) : (
                <div className='h-3/4 bg-white shadow-md z-10 p-5 overflow-y-scroll overscroll-auto'>
                    <div
                        id='bundle-1'
                        className='w-fit h-auto grid grid-cols-3 justify-items-center items-center'
                    >
                        {imageNames1.map((img) => {
                            return (
                                <img
                                    className='object-contain'
                                    src={require("../../assets/exported/bundle-1/" +
                                        img +
                                        ".jpg")}
                                />
                            );
                        })}
                    </div>
                    <div id='bundle-3' className='w-fit max-h-min'>
                        {imageNames3.map((img) => {
                            return (
                                <img
                                    className='object-contain'
                                    src={require("../../assets/exported/bundle-3/" +
                                        img +
                                        ".png")}
                                />
                            );
                        })}
                    </div>
                    <div
                        id='bundle-2'
                        className='w-fit max-h-min grid grid-cols-3 justify-items-center items-start'
                    >
                        {imageNames2.map((img) => {
                            return (
                                <img
                                    className='object-contain'
                                    src={require("../../assets/exported/bundle-2/" +
                                        img +
                                        ".png")}
                                />
                            );
                        })}
                    </div>
                </div>
            )}
            <div className='relative flex flex-row pl-5 h-1/4 bg-white gap-4 text-sm md:text-base font-plusjakarta font-bold text-white'>
                <button
                    className={`h-fit min-w-max p-4 rounded-b-lg transition-all origin-transform-top ${
                        project === "it"
                            ? "scale-125 bg-orange-900"
                            : "bg-red-200"
                    }`}
                    onClick={() => {
                        setProject("it");
                    }}
                >
                    IT Projects
                </button>
                <button
                    className={`h-fit min-w-max p-4 rounded-b-lg transition-all origin-transform-top ${
                        project === "gallery"
                            ? "scale-125 bg-orange-900"
                            : "bg-red-200"
                    }`}
                    onClick={() => {
                        setProject("gallery");
                    }}
                >
                    Gallery
                </button>
                <div className='absolute w-fit bottom-3 left-0 right-0 ml-auto mr-auto text-orange-900 text-xs font-opensans font-medium'>
                    &copy; Hasna Roihan | 2023 | Contact: hasnaroihann@gmail.com
                </div>
            </div>
        </div>
    );
};
