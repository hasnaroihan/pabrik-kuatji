import { useEffect } from "react"
import Logo from "./../../assets/web-logo.svg"
import Kulky from "./../../assets/kulky.png"

export const ProjectDetails = ({project, setProject}: {project:string, setProject: React.Dispatch<React.SetStateAction<string>>}) => {
    return(
        <div className="w-full h-full flex flex-col bg-inherit">
            {
                project == "it" ?
                    <div className="w-full p-5 md:p-10 h-3/4 flex flex-col md:flex-row justify-center items-center gap-3 md:gap-10 bg-red-200 drop-shadow-md z-10">
                        <div className="w-full md:w-[30rem] h-3/4 bg-white rounded-2xl grid grid-cols-3 md:grid-rows-3 justify-items-center items-center overflow-clip">
                            <img className="w-full md:w-auto h-auto md:h-full col-span-2 md:row-span-2 md:col-span-3"
                            src={Logo} alt="Pabrik Kuatji" />
                            <div className="w-full h-full border-t-2 border-orange-900 col-span-3">

                            </div>
                        </div>
                        <div className="w-full md:w-[30rem] h-3/4 bg-white rounded-2xl grid grid-cols-3 md:grid-rows-3 justify-items-center items-center overflow-clip">
                            <img className="w-full md:w-auto h-auto md:h-full col-span-2 md:row-span-2 md:col-span-3"
                            src={Kulky} alt="Grocery Planner" />
                            <div className="w-full h-full border-t-2 border-orange-900 col-span-3">

                            </div>
                        </div>
                    </div>:
                    <div className="h-3/4 bg-white shadow-md z-10">

                    </div>
            }
            <div className="flex flex-row pl-5 h-1/4 bg-white gap-4 text-sm md:text-base font-plusjakarta font-bold text-white">
                <button className={`h-fit min-w-max p-4 rounded-b-lg transition-all origin-transform-top ${project === 'it' ? "scale-125 bg-orange-900" : "bg-red-200"}`}
                onClick={() =>{
                    setProject("it")
                }}>
                    IT Projects
                </button>
                <button className={`h-fit min-w-max p-4 rounded-b-lg transition-all origin-transform-top ${project === 'gallery' ? "scale-125 bg-orange-900" : "bg-red-200"}`}
                onClick={() =>{
                    setProject("gallery")
                }}>
                    Gallery
                </button>
            </div>
        </div>
    )
}