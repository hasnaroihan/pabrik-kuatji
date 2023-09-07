import SunflowerHills from "./../../assets/sunflower-hills-flatten.png"
import CloudsRight from "./../../assets/clouds-right.png"
import CloudsLeft from "./../../assets/clouds-left.png"
import { useEffect, useRef, useState } from "react"

export const Summary = ({active, scrollDown}: {active: number | undefined, scrollDown:number}) => {
    const [transform, setTransform] = useState(scrollDown)
    const cloudLeft = useRef<HTMLImageElement>(null)
    const cloudRight = useRef<HTMLImageElement>(null)
    
    // useEffect(()=> {
    //     var cloudLeftRef:any = cloudLeft.current
    //     var cloudRightRef:any = cloudRight.current

    //     if (cloudLeftRef && scrollDown < 500) {
    //         cloudLeftRef.style.transform = "translate(" + -scrollDown + "px, 0px)"
    //     }
    //     if (cloudRightRef && scrollDown < 500) {
    //         cloudRightRef.style.transform = "translate(" + scrollDown + "px, 0px)"
    //     }
    // }, [scrollDown])

    return (
        <div className="relative w-full h-full">
            <div className="grid grid-cols-2 h-1/2 justify-items-start items-start">
                <div className="flex flex-col w-1/3 min-w-fit h-full ml-10 bg-white rounded-b-xl justify-end items-center gap-2">
                    <div className="flex flex-col w-fit text-accent font-mansalva justify-center items-start mx-7">
                        <p className="text-xl">Pabrik Kuatji by</p>
                        <p className="text-4xl font-bold">Hasna Roihan</p>
                    </div>
                    <div className="w-48 font-medium font-opensans text-sm text-accent">
                        <p>Fullstack developer, digital artist, and a writer</p>
                    </div>
                    <div className="flex bg-accent text-white text-xs w-full p-2 rounded-b-xl justify-center items-center mt-5">
                        <p className="justify-self-center font-opensans underline">{"more about me >>"}</p>
                    </div>
                </div>
            </div>
            <img className={`transition-all absolute w-full -z-10 inset-x-0 ${ active === 0 ? "-bottom-[10vh]" : "bottom-0"}`}
                src={SunflowerHills}></img>
            {/* <img className={`absolute inset-y-0 left-0 -z-20`}
            ref={cloudLeft}
            src={CloudsLeft}></img>
            <img className={`absolute inset-y-0 right-0 -z-20`}
            ref={cloudRight}
            src={CloudsRight}></img> */}
        </div>
    )
}