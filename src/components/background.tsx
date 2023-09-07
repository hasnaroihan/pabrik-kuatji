import { useEffect, useState } from "react"

export const Background = ({active}: {active: number | undefined}) => {
    var [color, setColor] = useState("bg-white")

    useEffect(() => {
        if (active === 0) {
            setColor("bg-sky-300")
        } else if (active === 1) {
            setColor("bg-sky-200")
        } else {
            setColor("bg-amber-50")
        }
    }, [active])

    return (
        <div className={`w-full h-screen fixed inset-0 -z-50 transition-all duration-500 ${
            color
        }`}></div>
    )
}