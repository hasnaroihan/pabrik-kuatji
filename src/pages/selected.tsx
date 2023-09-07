import { useState } from "react"
import Lowest from "./../../assets/selected-projects-lowest.png"


export const Selected = () => {

    return (
        <div className="relative w-full h-full">
            <img className="absolute w-full inset-x-0 bottom-0"
            src={Lowest}></img>

        </div>
    )
}