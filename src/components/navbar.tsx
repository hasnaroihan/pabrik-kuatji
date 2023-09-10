import { RefObject, useEffect, useRef, useState } from "react"
import { NavProp } from "../pages/types"



export const Navbar = ({navHeader, active}: {navHeader:NavProp[], active:number | undefined}) => {

    return (
        <div className="h-screen fixed inset-y-0 right-3 md:right-10 z-50 text-white flex flex-col pt-10 gap-10 md:gap-5 transform origin-top scale-50 md:transform-none">
            {
                navHeader.map((settings: NavProp, idx: number) => (
                    <a className={`w-5 h-5 rounded-full ${active === idx ? "transition all scale-150 opacity-100 duration-500": 
                                                        "transition transform scale-100 opacity-50 duration-500"} ${
                                                            active && active >= 2 ? "bg-orange-900" : "bg-accent"
                                                        }`}
                    href={`#${settings.id}`}
                    key={`${settings.title}`}>
                    </a>
                ))
            }
        </div>
    )
}