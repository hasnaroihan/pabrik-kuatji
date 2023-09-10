import { useState } from "react"
import { SkillCard } from "../pages/types"

export const SkillBoxFlip = ({skill} : {skill: SkillCard}) => {
    return (
        <div className="drop-shadow-xl
            relative transition transform hover:[transform:rotateY(180deg)]
            text-center text-accent" 
            style={{transformStyle: "preserve-3d"}}>
                <div className="absolute w-full h-full rounded-2xl bg-yellow-200 backface-hidden [transform:rotateY(0deg)]
                flex justify-center items-center text-base font-bold md:text-xl">
                    <p className="backface-hidden">
                        {skill.id}
                    </p>
                </div>
                <div className="absolute w-full h-full rounded-2xl bg-white backface-hidden [transform:rotateY(180deg)]
                flex flex-col justify-center items-center text-xs md:text-sm font-semibold">
                    {skill.desc.map((val) => {
                        return (
                            <p className="w-full">
                                {val}
                            </p>
                        )
                    })}
                </div> 
        </div>
    )
}