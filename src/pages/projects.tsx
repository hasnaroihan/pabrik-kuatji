import { MouseEventHandler, useEffect, useRef, useState } from "react";
import BGMood from "./../../assets/new/background-with-mood.png";
import IT from "./../../assets/new/workdesk.png";
import Drawing from "./../../assets/new/canvas.png";
import Dispenser from "./../../assets/new/water-dispenser.png";
import Mading from "./../../assets/new/mading.png";
import Door from "./../../assets/new/door.png";
import Bookshelf from "./../../assets/new/bookshelf.png";

export const Projects = ({
    active,
}: // handleClickIT,
// handleClickGallery,
{
    active: number | undefined;
    // handleClickIT: MouseEventHandler<HTMLAnchorElement>;
    // handleClickGallery: MouseEventHandler<HTMLAnchorElement>;
}) => {
    return (
        <div className='relative w-auto h-full overflow-y-clip'>
            <img
                className={`absolute hidden xl:block h-full min-w-max md:w-full -z-10 inset-x-0 bottom-0 transition-opacity duration-700 ${
                    active === 2 ? "opacity-80" : "opacity-0"
                }`}
                src={BGMood}
            />
            <div className='grid grid-rows-2 xl:grid-rows-1 xl:grid-cols-2 h-full w-full justify-items-center items-end gap-4 xl:gap-0 p-4 xl:p-0'>
                <div className='relative w-full h-full overflow-clip xl:overflow-visible rounded-lg'>
                    {/* <div className='absolute block xl:hidden w-full h-full -z-20 inset-x-0 top-0 bg-gradient-to-t to-25% md:to-100% from-red-300'></div> */}
                    <img
                        className={`absolute xl:hidden block h-full min-w-max md:w-full -z-10 inset-x-0 bottom-0 transition-opacity duration-700 ${
                            active === 2 ? "opacity-80" : "opacity-0"
                        }`}
                        src={BGMood}
                    />
                    <img
                        className='absolute bottom-0 left-0 
                        h-3/5 xl:h-2/5 2xl:h-1/2 min-w-max'
                        src={Dispenser}
                    />
                    <img
                        className='absolute bottom-[25vh] 2xl:bottom-[28vh] 
                        -right-[40vw] xl:-right-[15vw] 2xl:-right-[14vw] 
                        w-3/5 xl:w-3/5 2xl:w-1/2 min-h-max'
                        src={Mading}
                    />
                    <a
                        href='/projectdetails'
                        className='absolute bottom-0 left-[18vw] xl:left-[7vw] 2xl:left-[9vw] 
                        h-3/5 xl:h-2/5 2xl:h-1/2 
                        transition transform hover:scale-125'
                        // onClick={handleClickIT}
                    >
                        <img className='h-full' src={IT} />
                    </a>
                </div>
                <div className='relative w-full h-full overflow-clip xl:overflow-visible rounded-lg'>
                    <img
                        className={`absolute xl:hidden block h-full min-w-max overflow-hidden md:w-full -z-10 inset-x-0 bottom-0 transition-opacity duration-700 ${
                            active === 2 ? "opacity-80" : "opacity-0"
                        }`}
                        src={BGMood}
                    />
                    <img
                        className='absolute bottom-0 -right-10 xl:right-0 
                        h-full xl:h-2/3 2xl:h-4/5'
                        src={Door}
                    />
                    <img
                        className='absolute bottom-0 right-[65vw] xl:-left-[10vw] 2xl:-left-[10vw] 
                        h-3/5 xl:h-auto xl:w-3/5 2xl:w-1/2 xl:min-h-max'
                        src={Bookshelf}
                    />
                    <a
                        className='absolute bottom-0  
                        right-[20vw] xl:left-[21vw] 2xl:left-[15vw]
                        h-3/4 xl:h-1/2 2xl:h-3/5 min-w-max
                         transition transform hover:scale-125'
                        // onClick={handleClickGallery}
                        href='/gallery'
                    >
                        <img className='h-full' src={Drawing} />
                    </a>
                </div>
            </div>
        </div>
    );
};
