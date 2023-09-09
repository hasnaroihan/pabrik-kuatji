import { useEffect, useState, useRef } from "react"
import CloudsRight from "./../../assets/clouds-right.png"
import CloudsLeft from "./../../assets/clouds-left.png"

export const Background = ({active, scrollDown}: {active: number | undefined, scrollDown: number}) => {
    var [color, setColor] = useState("bg-white")
    
    const cloudLeft = useRef<HTMLImageElement>(null)
    const cloudRight = useRef<HTMLImageElement>(null)

    useEffect(() => {
        if (active === 0) {
            setColor("bg-bluesky")
        } else if (active === 1) {
            setColor("bg-sky-200")
        } else {
            setColor("bg-amber-50")
        }
    }, [active])

    useEffect(()=> {
        var cloudLeftRef:any = cloudLeft.current
        var cloudRightRef:any = cloudRight.current

        if (cloudLeftRef && scrollDown < 600) {
            cloudLeftRef.style.transform = "translate(" + -scrollDown*1.5 + "px, 0px)"
        }
        if (cloudRightRef && scrollDown < 600) {
            cloudRightRef.style.transform = "translate(" + scrollDown*1.5 + "px, 0px)"
        }
    }, [scrollDown])

    return (
        <div className={`w-full h-screen fixed inset-0 -z-50 transition-all duration-500 ${
            color
        }`}>
            <img className={`absolute inset-y-0 left-0 -z-20`}
            ref={cloudLeft}
            src={CloudsLeft}></img>
            <img className={`absolute inset-y-0 right-0 -z-20`}
            ref={cloudRight}
            src={CloudsRight}></img>
        </div>
    )
}