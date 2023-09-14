import { ITProjectDesc } from "../pages/types";

export const ITProjectCard = ({project}: {project: ITProjectDesc}) =>{
    return (
        <div className="w-full md:w-[30rem] h-3/4 bg-white rounded-2xl grid grid-cols-3 grid-rows-5 justify-items-center items-center
        overflow-clip font-plusjakarta shadow-lg">
            <div className="relative flex justify-center items-center w-full h-full col-span-3 row-span-3 md:col-span-3">
                <img className="object-cover h-full"
                src={project.src} alt={project.title} />
                {project.status == "ongoing" ? 
                <div className="absolute top-2 right-2 md:top-5 md:right-5 px-2 py-1 rounded-full bg-black text-white text-xs md:text-sm">
                    ongoing
                </div>:
                <></>}
            </div>
            
            <div className="w-full h-full border-t-2 border-orange-900 col-span-2 row-span-2 flex flex-col p-3 lg:p-5 gap-0 lg:gap-5">
                <a className="font-bold text-md md:text-xl lg:text-2xl hover:underline text-accent" href={project.link} target="_blank">
                    {project.title}
                </a>
                <div className="font-opensans text-sm lg:text-base">{project.desc}</div>
            </div>
            <div className="row-span-2 w-full h-full border-t-2 border-orange-900 flex flex-col justify-start items-center text-white p-3 gap-1 lg:gap-2">
                {project.stack.map((stack) => {
                    return(
                        <div className="w-full bg-orange-900 rounded-full flex justify-center items-center text-xs md:text-sm lg:text-base">
                            {stack}
                        </div>
                    )
                })}
            </div>
        </div>
)
}