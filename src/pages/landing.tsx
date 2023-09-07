import { useState,useRef, ChangeEvent, useEffect } from "react"
import { Navbar } from "../components/navbar"
import { NavProp } from "./types"
import { Background } from "../components/background"

const nearestSection = (
    currentPosition: number,
    sectionArray: NavProp[]
) => {
    if (sectionArray) {
        var target = 0
        var start = 0
        var end = sectionArray.length-1
        // edge case start
        target = sectionArray[start].ref.current?.offsetTop??0
        if (currentPosition <= target ) {
            return start
        }

        // edge case end
        target = sectionArray[end].ref.current?.offsetTop ?? 0
        if (currentPosition >= target) {
            return end
        }

        // binary search
        let i = 0, j = end, mid= 0
        while(i<j) {
            mid = i+j/2
            target = sectionArray[mid].ref.current?.offsetTop ?? 0

            // return if equal to mid value
            if (currentPosition == target) {
                return mid
            }

            // search left if lower, else search right
            if (currentPosition < target) {
                let target2 = sectionArray[mid-1].ref.current?.offsetTop ?? 0
                if ((mid > 0) && (currentPosition > target2)) {
                    return Math.abs(currentPosition-target) < Math.abs(currentPosition-target2) ? mid : mid-1
                }

                j = mid
            } else {
                let target2 = sectionArray[mid+1].ref.current?.offsetTop ?? 0
                if ((mid < end) && (currentPosition < target2)) {
                    return Math.abs(currentPosition-target) < Math.abs(currentPosition-target2) ? mid : mid+1
                }

                i = mid + 1
            }
        }

        return mid

    }
    return 0
}

export const Landing = () => {
    const scrollRef = useRef<HTMLInputElement>(null)
    const summaryRef = useRef<HTMLInputElement>(null)
    const interestRef = useRef<HTMLInputElement>(null)
    const projectRef = useRef<HTMLInputElement>(null)
    const [active, setActive] = useState<number | undefined>(0);

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

    useEffect(() => {
        const handleScroll = (e:any) => {
            var idx = nearestSection(
                scrollRef.current?.scrollTop??0,
                navHeader
            )
            //var idx = nearestIndex(scrollRef.current?.scrollTop??0, navHeader)
            //console.log(scrollRef.current?.scrollTop)
            //console.log(idx)
            setActive(idx)
        }
        

        console.log("akucape")
        scrollRef.current?.addEventListener("scroll", handleScroll)
        return () => {
            scrollRef.current?.removeEventListener("scroll", handleScroll)
        }
    },[])

    return (
        <div 
            className="w-full h-screen overflow-y-scroll overscroll-contain scroll-smooth snap-y snap-mandatory"
            ref={scrollRef}>
            <Navbar navHeader={navHeader} active={active}/>
            <section id="summary" ref={summaryRef} className="w-full h-screen snap-start"></section>
            <section id="interests" ref={interestRef} className="w-full h-screen snap-start"></section>
            <section id="projects" ref={projectRef} className="w-full h-screen snap-start"></section>
            <Background active={active} />
        </div>
        
    )
}