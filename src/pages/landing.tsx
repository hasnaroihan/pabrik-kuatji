import { useState, useRef, ChangeEvent, useEffect, MouseEvent } from "react";
import { Navbar } from "../components/navbar";
import { NavProp } from "./types";
import { Background } from "../components/background";
import { Summary } from "./summary";
import { Interests } from "./interests";
import { Projects } from "./projects";
import { ProjectDetails } from "./projectDetails";
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";

const nearestSection = (currentPosition: number, sectionArray: NavProp[]) => {
    if (sectionArray) {
        var target = 0;
        var start = 0;
        var end = sectionArray.length - 1;
        // edge case start
        target = sectionArray[start].ref.current?.offsetTop ?? 0;
        if (currentPosition <= target) {
            return start;
        }

        // edge case end
        target = sectionArray[end].ref.current?.offsetTop ?? 0;
        if (currentPosition >= target) {
            return end;
        }

        // binary search
        let i = 0,
            j = end,
            mid = 0;
        while (i < j) {
            mid = Math.floor((i + j) / 2);
            target = sectionArray[mid].ref.current?.offsetTop ?? 0;
            // return if equal to mid value
            if (currentPosition == target) {
                return mid;
            }

            // search left if lower, else search right
            if (currentPosition < target) {
                let target2 = sectionArray[mid - 1].ref.current?.offsetTop ?? 0;
                if (mid > 0 && currentPosition > target2) {
                    return Math.abs(currentPosition - target) <
                        Math.abs(currentPosition - target2)
                        ? mid
                        : mid - 1;
                }

                j = mid;
            } else {
                let target2 = sectionArray[mid + 1].ref.current?.offsetTop ?? 0;
                if (mid < end && currentPosition < target2) {
                    return Math.abs(currentPosition - target) <
                        Math.abs(currentPosition - target2)
                        ? mid
                        : mid + 1;
                }

                i = mid + 1;
            }
        }

        return mid;
    }
    return 0;
};

export const Landing = () => {
    const scrollRef = useRef<HTMLInputElement>(null);

    const summaryRef = useRef<HTMLInputElement>(null);
    const interestRef = useRef<HTMLInputElement>(null);
    const projectRef = useRef<HTMLInputElement>(null);
    const projectDetailsRef = useRef<HTMLInputElement>(null);
    // const contactRef = useRef<HTMLInputElement>(null)

    const [active, setActive] = useState<number | undefined>(0);
    const [scrollDown, setScrollDown] = useState(0);
    const [isAboutMeShown, setAboutMeShown] = useState(false);
    const [projectToggle, setProjectToggle] = useState("it");

    const handleClickToggle = (event: MouseEvent<HTMLButtonElement>): void => {
        event.preventDefault();
        setAboutMeShown(!isAboutMeShown);
    };
    const handleClickIT = (event: MouseEvent<HTMLAnchorElement>): void => {
        // event.preventDefault()
        setProjectToggle("it");
    };
    const handleClickGallery = (event: MouseEvent<HTMLAnchorElement>): void => {
        // event.preventDefault()
        setProjectToggle("gallery");
    };

    const navHeader: NavProp[] = [
        {
            title: "Summary",
            ref: summaryRef,
            id: "summary",
        },
        {
            title: "Interests",
            ref: interestRef,
            id: "interests",
        },
        {
            title: "Projects",
            ref: projectRef,
            id: "projects",
        },
        {
            title: "Project Details",
            ref: projectDetailsRef,
            id: "projectdetails",
        },
        // {
        //     title: "Contact",
        //     ref: contactRef,
        //     id: "contact"
        // }
    ];

    useEffect(() => {
        const handleScroll = (e: any) => {
            var idx = nearestSection(
                scrollRef.current?.scrollTop ?? 0,
                navHeader
            );
            // console.log(scrollRef.current?.scrollTop)
            // console.log(idx)
            setActive(idx);
            setScrollDown(scrollRef.current?.scrollTop ?? 0);
        };

        scrollRef.current?.addEventListener("scroll", handleScroll);
        return () => {
            scrollRef.current?.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            id='base'
            className={`w-full h-screen ${
                isAboutMeShown
                    ? "overflow-hidden"
                    : "overflow-y-scroll overscroll-contain snap-y snap-mandatory no-scrollbar"
            }`}
            ref={scrollRef}
        >
            <ScrollToHashElement behavior='smooth' />
            <Navbar navHeader={navHeader} active={active} />
            <section
                id='summary'
                ref={summaryRef}
                className='relative w-full h-screen snap-start overflow-x-clip'
            >
                <Summary
                    active={active}
                    isAboutMeShown={isAboutMeShown}
                    handleClickToggle={handleClickToggle}
                />
            </section>
            <section
                id='interests'
                ref={interestRef}
                className='w-full h-screen snap-start'
            >
                <Interests active={active} />
            </section>
            <section
                id='projects'
                ref={projectRef}
                className='w-full h-screen snap-start'
            >
                <Projects
                    active={active}
                    handleClickIT={handleClickIT}
                    handleClickGallery={handleClickGallery}
                />
            </section>
            <section
                id='projectdetails'
                ref={projectDetailsRef}
                className='w-full h-screen snap-start'
            >
                <ProjectDetails
                    project={projectToggle}
                    setProject={setProjectToggle}
                />
            </section>
            {/* <section id="contact" ref={contactRef} className="w-full h-screen snap-start">
                contact me
            </section> */}
            <Background active={active} scrollDown={scrollDown} />
        </div>
    );
};
