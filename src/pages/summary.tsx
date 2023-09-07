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
            <img className={`transition-all absolute w-full z-20 inset-x-0 ${ active === 0 ? "top-10" : "top-0"}`}
            src={SunflowerHills}></img>
            <img className={`absolute left-0`}
            ref={cloudLeft}
            src={CloudsLeft}></img>
            <img className={`absolute right-0`}
            ref={cloudRight}
            src={CloudsRight}></img>
        </div>
    )
}