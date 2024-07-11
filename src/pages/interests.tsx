import { useState } from "react";
import HarvestDay from "../../assets/new/harvest-day.png";
import { SkillCard } from "./types";
import { SkillBoxFlip } from "../components/skillBoxFlip";
import { SkillBox } from "../components/skillBox";

export const Interests = ({ active }: { active: number | undefined }) => {
    const skillCard: SkillCard[] = [
        {
            id: "Software Engineering",
            desc: [
                "Frontend Web Engineering",
                "C# (Unity)",
                "Python",
                "Open to try and learn new things",
            ],
            position: "origin-top-left",
            background: "bg-yellow-200",
        },
        {
            id: null,
            desc: ["I read everything"],
            position: "-top",
            background: "bg-lime-600",
        },
        {
            id: null,
            desc: ["I enjoy creating games"],
            position: "-bottom-left",
            background: "bg-lime-600",
        },
        {
            id: "Digital Art",
            desc: [
                "Digital illustration",
                "Vector arts",
                "Adaptive to any drawing apps but mostly use Krita",
            ],
            position: "origin-top-right",
            background: "bg-yellow-200",
        },
        {
            id: "Writing",
            desc: ["My apologies, my blog is still under construction!"],
            position: "origin-bottom",
            background: "bg-yellow-200",
        },
        {
            id: null,
            desc: ["Solving puzzles, especially minesweeper"],
            position: "-bottom-right",
            background: "bg-lime-600",
        },
    ];
    return (
        <div className='relative w-full h-full'>
            <img
                className={`absolute w-full sm:w-3/4 xl:w-2/3 inset-x-0 p-10 transition-all duration-500 ${
                    active === 1 ? "bottom-10 md:bottom-0" : "-bottom-12 -z-50"
                }`}
                src={HarvestDay}
            ></img>
            <div className='flex justify-center lg:justify-end items-start h-full p-3 lg:pt-20 lg:pr-20'>
                <div className='flex flex-col lgtab:flex-col lg:flex-row gap-4 h-2/3 w-full lg:w-3/5 p-4 m-2 lg:mt-10 lg:mr-10 font-plusjakarta'>
                    <div className='grow grid grid-cols-2 grid-rows-3 grid-flow-col gap-4'>
                        {skillCard.map((card, idx) => {
                            if (idx <= 3) {
                                if (card.id) {
                                    return (
                                        <SkillBoxFlip skill={card} key={idx} />
                                    );
                                } else {
                                    return <SkillBox skill={card} key={idx} />;
                                }
                            }
                        })}
                    </div>
                    <div className='grid grid-cols-3 lg:grid-cols-1 lg:grid-rows-3 gap-4'>
                        <div className='row-span-1 lg:row-span-2 col-span-2 lg:col-span-1'>
                            <SkillBoxFlip skill={skillCard[4]} key={4} />
                        </div>
                        <SkillBox skill={skillCard[5]} key={5} />
                    </div>
                </div>
            </div>
        </div>
    );
};
