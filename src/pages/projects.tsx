import { MouseEventHandler, useEffect, useRef, useState } from "react"
import Lowest from "./../../assets/selected-projects-lowest.png"
import IT from "./../../assets/it.png"
import Drawing from "./../../assets/drawing.png"

export const Projects = ({handleClickIT, handleClickGallery}: {
    handleClickIT: MouseEventHandler<HTMLAnchorElement>,
    handleClickGallery: MouseEventHandler<HTMLAnchorElement>}) => {

    return (
        <div className="relative w-full h-full overflow-y-clip">
            <div className="absolute w-full h-full -z-20 inset-x-0 top-0 bg-gradient-to-t from-red-200"></div>
            <img className="absolute w-full -z-10 inset-x-0 bottom-0"
            src={Lowest}></img>
            <div className="grid grid-cols-2 h-full w-full justify-items-center items-end">
                <a href="#projectdetails" className="w-1/2 transition transform hover:scale-125" onClick={handleClickIT}>
                    <img className="block" src={IT}></img>
                </a>
                <a className="w-2/5 translate-x-5 transition transform hover:scale-125" onClick={handleClickGallery} href="#projectdetails">
                    <img className="block" src={Drawing}></img>
                </a>
            </div>
        </div>
    )
}