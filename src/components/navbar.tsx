import { RefObject, useEffect, useRef, useState } from "react"
import { NavProp } from "../pages/types"

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

// const nearestIndex:any = (
//     currentPosition: number,
//     sectionPositionArray: NavProp[],
//     startIndex:number,
//     endIndex:number
//   ) => {
//     if (startIndex === endIndex) return startIndex;
//     else if (startIndex === endIndex - 1) {
//       if (
//         Math.abs(
//           sectionPositionArray[startIndex].ref.current?.offsetTop??1000 -
//             currentPosition
//         ) <
//         Math.abs(
//           sectionPositionArray[endIndex].ref.current?.offsetTop??1000 -
//             currentPosition
//         )
//       )
//         return startIndex;
//       else return endIndex;
//     } else {
//       var nextNearest = ~~((startIndex + endIndex) / 2);
//       var a = Math.abs(
//         sectionPositionArray[nextNearest].ref.current?.offsetTop??1000 -
//           currentPosition
//       );
//       var b = Math.abs(
//         sectionPositionArray[nextNearest + 1].ref.current?.offsetTop??1000 -
//           currentPosition
//       );
//       if (a < b) {
//         return nearestIndex(
//           currentPosition,
//           sectionPositionArray,
//           startIndex,
//           nextNearest
//         );
//       } else {
//         return nearestIndex(
//           currentPosition,
//           sectionPositionArray,
//           nextNearest,
//           endIndex
//         );
//       }
//     }
//   };

// const nearestIndex = (currentPosition:number, navHeader:NavProp[]) => {
//     var one = navHeader[1].ref.current?.offsetTop??0
//     var two = navHeader[2].ref.current?.offsetTop??0
//     if (currentPosition < one) {
//         return 0
//     } else if ((currentPosition >= one) && (currentPosition < two)) {
//         console.log(currentPosition)
//         console.log(one)
//         return 1
//     } else if (currentPosition >= two){
//         return 2
//     }
// }


export const Navbar = ({navHeader, scrollRef}: {navHeader:NavProp[], scrollRef: RefObject<HTMLInputElement>}) => {
    const [active, setActive] = useState<number | undefined>(0);
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