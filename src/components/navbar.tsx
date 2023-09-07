import { RefObject, useEffect, useRef, useState } from "react"
import { NavProp } from "../pages/types"



export const Navbar = ({navHeader, active}: {navHeader:NavProp[], active:number | undefined}) => {
    // const [active, setActive] = useState<number | undefined>(0);
    // useEffect(() => {
    //     const handleScroll = (e:any) => {
    //         var idx = nearestSection(
    //             scrollRef.current?.scrollTop??0,
    //             navHeader
    //         )
    //         //var idx = nearestIndex(scrollRef.current?.scrollTop??0, navHeader)
    //         //console.log(scrollRef.current?.scrollTop)
    //         //console.log(idx)
    //         setActive(idx)
    //     }
        

    //     console.log("akucape")
    //     scrollRef.current?.addEventListener("scroll", handleScroll)
    //     return () => {
    //         scrollRef.current?.removeEventListener("scroll", handleScroll)
    //     }
    // },[])

    return (
        <div className="h-screen fixed inset-y-0 right-10 z-50 text-white flex flex-col justify-center items-center gap-5">
            {
                navHeader.map((settings: NavProp, idx: number) => (
                    <a className={`w-5 h-5 rounded-full bg-black ${active === idx ? "transition transform scale-150 opacity-100 duration-500": 
                                                        "transition transform scale-100 opacity-50 duration-500"}`}
                    href={`#${settings.id}`}
                    key={`${settings.title}`}>
                    </a>
                ))
            }
        </div>
    )
}