import { MouseEvent, MouseEventHandler, useState } from "react"
import { AboutMeToggle } from "../components/aboutMeToggle"
import SunflowerHills from "./../../assets/sunflower-hills-flatten.png"
import { AboutMe } from "../components/aboutMe"

export const Summary = ({active, isAboutMeShown, handleClickToggle}: 
    {active: number | undefined,
    isAboutMeShown: boolean,
    handleClickToggle: MouseEventHandler<HTMLButtonElement>}) => {
    

    return (
        <div className="relative w-full h-full">
            <div className={`overflow-hidden h-full`}>
                <AboutMe isAboutMeShown={isAboutMeShown}/>
                <div className="grid grid-cols-2 h-1/2 z-20 justify-items-start items-start">
                    <AboutMeToggle isToggleShown={isAboutMeShown} handleClickToggle={handleClickToggle}/>
                </div>  
            </div>
            <img className={`absolute w-full -z-10 inset-x-0 transition-all origin-bottom scale-150 md:scale-100 duration-400 ${ active === 0 ? "bottom-0 md:-bottom-[10vh]" : "bottom-0"}
            ${isAboutMeShown ? "opacity-40" : ""}`}
                src={SunflowerHills}></img>
        </div>
    )
}