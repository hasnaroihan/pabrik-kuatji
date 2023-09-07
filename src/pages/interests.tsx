import { useState } from "react"
import HarvestDay from "./../../assets/harvest-day.png"


export const Interests = () => {

    return (
        <div className="relative w-full h-full">
            <img className="absolute w-full inset-x-0 bottom-0"
            src={HarvestDay}></img>

        </div>
    )
}