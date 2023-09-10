import { useState } from "react"
import { SkillCard } from "../pages/types"

export const SkillBoxFlip = ({skill} : {skill: SkillCard}) => {
    return (
        <div className="group w-full h-full [perspective:1000px] drop-shadow-xl">
            <div className="w-full h-full
                relative transition-all duration-500 group-hover:[transform:rotateY(180deg)]
                text-center text-accent [transform-style:preserve-3d]">
                    <div className="absolute w-full h-full rounded-2xl bg-yellow-200
                    flex justify-center items-center text-sm md:text-base font-bold md:text-xl">
                        <p className="px-5">
                            {skill.id}
                        </p>
                    </div>
                    <div className="absolute w-full h-full rounded-2xl bg-white [transform:rotateY(180deg)] [backface-visibility:hidden] 
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
        </div>
//      <div className="group h-96 w-80 [perspective:1000px]">
//          <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
//              <div className="absolute inset-0">
//                  <img className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src="https://images.unsplash.com/photo-1562583489-bf23ec64651d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')" alt="" />
//              </div>
//              <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
//                  <div className="flex min-h-full flex-col items-center justify-center">
//                      <h1 className="text-3xl font-bold">Jane Doe</h1>
//                      <p className="text-lg">Photographer & Art</p>
//                      <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
//                      <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">Read More</button>
//                  </div>
//              </div>
//          </div>
//      </div>
        
    )
}