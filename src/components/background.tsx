import { useEffect, useState, useRef } from "react";
import CloudsRight from "./../../assets/new/clouds-right.png";
import CloudsLeft from "./../../assets/new/clouds-left.png";

export const Background = ({
    active,
    scrollDown,
}: {
    active: number | undefined;
    scrollDown: number;
}) => {
    var [color, setColor] = useState("bg-white");

    const cloudLeft = useRef<HTMLImageElement>(null);
    const cloudRight = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (active === 0) {
            setColor("bg-bluesky");
        } else if (active === 1) {
            setColor("bg-sky-200");
        } else if (active === 2) {
            setColor("bg-amber-50");
        } else if (active === 3) {
            setColor("bg-amber-200");
        } else {
            setColor("bg-amber-200");
        }
    }, [active]);

    useEffect(() => {
        var cloudLeftRef: any = cloudLeft.current;
        var cloudRightRef: any = cloudRight.current;

        if (cloudLeftRef) {
            cloudLeftRef.style.transform =
                "translate(" + -scrollDown + "px, 0px)";
        }

        if (cloudRightRef) {
            cloudRightRef.style.transform =
                "translate(" + scrollDown + "px, 0px)";
        }
    }, [scrollDown]);

    return (
        <div
            className={`w-full h-screen fixed inset-0 -z-50 transition-all duration-500 ${color}`}
        >
            <div className='absolute inset-y-0 h-full w-full'>
                <div className='relative h-1/4 md:h-1/2'>
                    <img
                        className={`absolute top-12 md:top-0 -left-28 -z-20 h-full min-w-max`}
                        ref={cloudLeft}
                        src={CloudsLeft}
                    ></img>
                </div>
            </div>
            <div className='absolute inset-y-0 h-full w-full'>
                <div className='relative h-2/5 md:h-1/2'>
                    <img
                        className={`absolute top-44 md:top-0 -right-10 -z-20 h-full min-w-max`}
                        ref={cloudRight}
                        src={CloudsRight}
                    ></img>
                </div>
            </div>
        </div>
    );
};
