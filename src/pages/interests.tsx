import { useState } from "react"
import HarvestDay from "./../../assets/harvest-day.png"
import { SkillCard } from "./types"
import { SkillBoxFlip } from "../components/skillBoxFlip"
import { SkillBox } from "../components/skillBox"


export const Interests = () => {

    const skillCard: SkillCard[] = [
        {
            id: "Software Engineering",
            desc: [
                "HTML, CSS, JS - 7/10",
                "ReactJS - 7/10",
                "Python, Django - 8/10",
                "Go - 6/10",
                "Java - 6/10"
            ],
            position: "origin-top-left"
        },
        {
            id: null,
            desc: ["I read everything, but mystery books and encyclopedias have a special place in my bookshelf"],
            position: "-top"
        },
        {
            id: "Digital Art",
            desc: [
                "Digital illustration",
                "Vector arts"
            ],
            position: "origin-top-right"
        },
        {
            id: null,
            desc: ["I like designing interactive games"],
            position: "-bottom-left"
        },
        {
            id: "Writing",
            desc: ["Blog", "Poetry", "Short stories"],
            position: "origin-bottom"
        },
        {
            id: null,
            desc: ["Solving puzzles, I'm pretty confident in my minesweeper skill"],
            position: "-bottom-right"
        },
    ]
    return (
        <div className="relative w-full h-full">
            <img className="absolute w-full sm:w-3/4 inset-x-0 bottom-0"
            src={HarvestDay}></img>
            <div className="flex justify-center md:justify-end items-start h-full p-3 md:pt-20 md:pr-20">
                <div className="grid grid-cols-3 gap-4 h-2/3 w-full md:w-3/5 p-4 m-2 md:mt-10 md:mr-10 font-plusjakarta">
                        {
                            skillCard.map((card, idx) =>{
                                if (card.id) {
                                    return (
                                        <SkillBoxFlip skill={card} key={idx}/>
                                    )
                                } else {
                                    return (
                                        <SkillBox skill={card} key={idx}/>
                                    )
                                }
                            })
                        }
                </div>
            </div>
            
        </div>
    )
}