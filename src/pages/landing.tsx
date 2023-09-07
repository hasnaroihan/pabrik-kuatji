import { useState,useRef, ChangeEvent, useEffect } from "react"
import { Navbar } from "../components/navbar"
import { NavProp } from "./types"

// const nearestIndex:any = (
//     currentPosition:number,
//     sectionPositionArray: HTMLElement[],
//     startIndex:number,
//     endIndex:number
// ) => {
//     if (startIndex === endIndex) return startIndex;
//   else if (startIndex === endIndex - 1) {
//     if (
//       Math.abs(
//         sectionPositionArray[startIndex].offsetTop -
//           currentPosition
//       ) <
//       Math.abs(
//         sectionPositionArray[endIndex].offsetTop -
//           currentPosition
//       )
//     )
//       return startIndex;
//     else return endIndex;
//   } else {
//     var nextNearest = ~~((startIndex + endIndex) / 2);
//     var a = Math.abs(
//       sectionPositionArray[nextNearest].offsetTop -
//         currentPosition
//     );
//     var b = Math.abs(
//       sectionPositionArray[nextNearest + 1].offsetTop -
//         currentPosition
//     );
//     if (a < b) {
//       return nearestIndex(
//         currentPosition,
//         sectionPositionArray,
//         startIndex,
//         nextNearest
//       );
//     } else {
//       return nearestIndex(
//         currentPosition,
//         sectionPositionArray,
//         nextNearest,
//         endIndex
//       );
//     }
//   }
// }

// TODO


export const Landing = () => {
    const scrollRef = useRef<HTMLInputElement>(null)
    const summaryRef = useRef<HTMLInputElement>(null)
    const interestRef = useRef<HTMLInputElement>(null)
    const projectRef = useRef<HTMLInputElement>(null)
    const [active, setActive] = useState(0);

    const navHeader: NavProp[] = [
        {
            title: "Summary",
            ref: summaryRef,
            id: "summary"
        },
        {
            title: "Interests",
            ref: interestRef,
            id: "interests"
        },
        {
            title: "Projects",
            ref: projectRef,
            id: "projects"
        },
    ]

    // useEffect(() => {
    //     const handleScroll = (e:any) => {
    //             var sections:HTMLElement[] = Array.from(e.currentTarget.getElementsByTagName("section"))
    //             var idx = nearestIndex(
    //                 e.currentTarget.scrollTop,
    //                 sections.map((el) => {return el.offsetTop}),
    //                 0,
    //                 sections.length
    //             )
    //             setActive(idx)
    //     }

    //     scrollRef.current?.addEventListener("scroll", handleScroll)
    //     console.log(active)
    //     return (() => {
    //         scrollRef.current?.removeEventListener("scroll", handleScroll)
    //     })
    // })
    
    
    return (
        <div 
            className="w-full h-screen overflow-y-scroll overscroll-contain snap-y snap-mandatory"
            ref={scrollRef}>
            <Navbar navHeader={navHeader} scrollRef={scrollRef}/>
            <section id="summary" ref={summaryRef} className="w-full h-screen snap-center bg-red-700"></section>
            <section id="interests" ref={interestRef} className="w-full h-screen snap-center bg-red-300"></section>
            <section id="projects" ref={projectRef} className="w-full h-screen snap-center bg-red-500"></section>
        </div>
        
    )
}