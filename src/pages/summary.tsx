import SunflowerHills from "./../../assets/sunflower-hills.png"
import CloudsRight from "./../../assets/clouds-right.png"
import CloudsLeft from "./../../assets/clouds-left.png"
import { useEffect, useRef, useState } from "react"

export const Summary = ({active, scrollDown}: {active: number | undefined, scrollDown:number}) => {
    const [transform, setTransform] = useState(scrollDown)
    const cloudLeft = useRef<HTMLImageElement>(null)
    const cloudRight = useRef<HTMLImageElement>(null)
    
    useEffect(()=> {
        var cloudLeftRef:any = cloudLeft.current
        var cloudRightRef:any = cloudRight.current

        if (cloudLeftRef && scrollDown < 500) {
            cloudLeftRef.style.transform = "translate(" + -scrollDown + "px, 0px)"
        }
        if (cloudRightRef && scrollDown < 500) {
            cloudRightRef.style.transform = "translate(" + scrollDown + "px, 0px)"
        }
    }, [scrollDown])

    return (
        <div className="relative w-full h-full">
            <div className="bg-none">
                Pabrik Kuatji
            </div>
            <img className={`transition-all absolute w-full -z-10 inset-x-0 ${ active === 0 ? "-bottom-10" : "bottom-0"}`}
            src={SunflowerHills}></img>
            <img className={`absolute inset-y-0 left-0 -z-20`}
            ref={cloudLeft}
            src={CloudsLeft}></img>
            <img className={`absolute inset--y-0 right-0 -z-20`}
            ref={cloudRight}
            src={CloudsRight}></img>
        </div>
    )
}