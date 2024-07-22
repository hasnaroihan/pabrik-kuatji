import { MouseEvent, MouseEventHandler, useState } from "react";
import { AboutMeToggle } from "../components/aboutMeToggle";
import Mountains from "./../../assets/new/mountains.png";
import HillsBack from "./../../assets/new/hills-back.png";
import HillsMiddle from "./../../assets/new/hills-middle.png";
import HillsFore from "./../../assets/new/hills-fore.png";
import SunflowerMiddle from "./../../assets/new/sunflower-middle.png";
import SunflowerFore from "./../../assets/new/sunflower-fore.png";
import { AboutMe } from "../components/aboutMe";

export const Summary = ({
    active,
    isAboutMeShown,
    handleClickToggle,
}: {
    active: number | undefined;
    isAboutMeShown: boolean;
    handleClickToggle: MouseEventHandler<HTMLButtonElement>;
}) => {
    return (
        <div className='relative w-full h-full'>
            <div className={`overflow-hidden h-full`}>
                <AboutMe isAboutMeShown={isAboutMeShown} />
                <div className='grid grid-cols-2 h-1/2 justify-items-start items-start'>
                    <AboutMeToggle
                        isToggleShown={isAboutMeShown}
                        handleClickToggle={handleClickToggle}
                    />
                </div>
            </div>
            <div
                className={`absolute inset-y-0 z-0 w-full h-full bg-slate-500 transition-all origin-bottom duration-300 ${
                    isAboutMeShown ? "opacity-40" : "opacity-0"
                }`}
            />
            <img
                className={`absolute w-full -z-20 inset-x-0 transition-all origin-bottom scale-150 md:scale-100 duration-500 opacity-85 ${
                    active === 0
                        ? "bottom-36 md:bottom-52 lgtab:bottom-[20vh] lg:bottom-[25vh] xl:bottom-[32vh]"
                        : "bottom-0"
                }`}
                src={Mountains}
            />
            <img
                className={`absolute w-full -z-20 inset-x-0 transition-all origin-bottom scale-150 md:scale-100 duration-500 ${
                    active === 0
                        ? "bottom-20 md:bottom-28 lg:bottom-[10vh]"
                        : "bottom-0"
                }`}
                src={HillsBack}
            />
            <img
                className={`absolute w-full -z-20 inset-x-0 transition-all origin-bottom scale-150 md:scale-100 duration-500 ${
                    active === 0
                        ? "bottom-14 md:bottom-20 lg:bottom-[5vh]"
                        : "bottom-0"
                }`}
                src={HillsMiddle}
            />
            <img
                className={`absolute w-full -z-20 inset-x-0 transition-all origin-bottom scale-150 md:scale-100 duration-500 ${
                    active === 0
                        ? "-bottom-[5vh] lg:-bottom-[10vh]"
                        : "bottom-0"
                }`}
                src={HillsFore}
            />
            <img
                className={`absolute w-3/4 -z-10 -left-8 md:-left-10 lg:-left-20 transition-all origin-bottom scale-150 md:scale-100 duration-500 ${
                    active === 0 ? "-bottom-6 lg:-bottom-16" : "bottom-0"
                }`}
                src={SunflowerMiddle}
            />
            <img
                className='absolute w-3/4 -z-10 inset-x-0 transition-all origin-bottom scale-150 md:scale-100 duration-500 bottom-0'
                src={SunflowerFore}
            />
        </div>
    );
};
{
    /*  */
}
