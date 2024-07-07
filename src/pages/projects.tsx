import { MouseEventHandler, useEffect, useRef, useState } from "react";
import BGMood from "./../../assets/new/background-with-mood.png";
import IT from "./../../assets/new/workdesk.png";
import Drawing from "./../../assets/new/canvas.png";
import Dispenser from "./../../assets/new/water-dispenser.png";
import Mading from "./../../assets/new/mading.png";
import Door from "./../../assets/new/door.png";

export const Projects = ({
    active,
    handleClickIT,
    handleClickGallery,
}: {
    active: number | undefined;
    handleClickIT: MouseEventHandler<HTMLAnchorElement>;
    handleClickGallery: MouseEventHandler<HTMLAnchorElement>;
}) => {
    return (
        <div className='relative w-full h-full overflow-y-clip'>
            <div className='absolute w-full h-full -z-20 inset-x-0 top-0 bg-gradient-to-t to-25% md:to-100% from-red-200'></div>
            <img
                className={`absolute h-full min-w-max md:w-full -z-10 inset-x-0 bottom-20 md:bottom-0 transition-opacity duration-700 ${
                    active === 2 ? "opacity-80" : "opacity-0"
                }`}
                src={BGMood}
            ></img>
            <div className='absolute bottom-0 grid grid-cols-3 h-full w-full items-end'>
                <img className='w-2/5' src={Dispenser}></img>
                <img
                    className='justify-self-center self-center'
                    src={Mading}
                ></img>
                <img className='w-1/2 justify-self-end' src={Door}></img>
            </div>
            <div className='grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 h-full w-full justify-items-center items-end pb-20 md:pb-0'>
                <a
                    href='#projectdetails'
                    className='w-1/2 transition transform hover:scale-125'
                    onClick={handleClickIT}
                >
                    <img className='block' src={IT}></img>
                </a>
                <a
                    className='w-2/5 translate-x-5 transition transform hover:scale-125'
                    onClick={handleClickGallery}
                    href='#projectdetails'
                >
                    <img className='block' src={Drawing}></img>
                </a>
            </div>
        </div>
    );
};
