import { useState } from "react"
import HarvestDay from "./../../assets/harvest-day.png"
import { SkillCard } from "./types"


export const Interests = () => {

    const skillCard: SkillCard[] = [
        {
            id: "Software Engineering",
            desc: "",
            span: 3
        },
        {
            id: null,
            desc: "I read everything, but mystery books and encyclopedias have a special place in my heart",
            span: 2
        },
        {
            id: "Digital Art",
            desc: "Digital illustration for scenes and landscapes",
            span: 2
        },
        {
            id: null,
            desc: "I like designing interactive games",
            span: 1
        },
        {
            id: "Writing",
            desc: "Blog, poetry, short stories",
            span: 2
        }
    ]
    return (
        <div className="relative w-full h-full">
            <img className="absolute w-full sm:w-3/4 inset-x-0 bottom-0"
            src={HarvestDay}></img>
            <div className="flex justify-center md:justify-end items-start h-full p-3 md:pt-20 md:pr-20">
                <div className="grid grid-cols-5 gap-4 h-2/3 w-full md:w-3/5 p-4 m-2 md:mt-10 md:mr-10">
                        {
                            skillCard.map((card) =>{
                                if (card.id == "Software Engineering") {
                                    return (
                                        <div className="bg-yellow-200 col-span-3 rounded-2xl drop-shadow-xl z-30 transition transform origin-top-left hover:scale-150 hover:z-40">
                                            {
                                                // TODO
                                                card.id
                                            }
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div className={`rounded-2xl drop-shadow-xl ${card.id ? "bg-yellow-200 z-30 transition transform origin-bottom hover:scale-150 hover:z-40" : 
                                        "bg-lime-600"} col-span-${card.span}`}>
                                            {
                                                card.id ? card.id : card.desc
                                            }
                                        </div>
                                    )
                                }
                            })
                        }
                </div>
            </div>
            
        </div>
    )
}