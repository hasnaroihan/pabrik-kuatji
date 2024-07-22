import { ITProjectDesc } from "../pages/types";
import GitHubLogo from "../../assets/GitHub_Logo.png";

export const ITProjectCard = ({ project }: { project: ITProjectDesc }) => {
    return (
        <div
            className='w-full lg:w-[30vw] h-3/4 bg-white rounded-2xl grid grid-cols-3 grid-rows-3 lg:grid-rows-5 justify-items-center items-center
        overflow-clip font-plusjakarta shadow-lg'
        >
            <a
                className='relative flex justify-center items-center w-full h-full col-span-3 row-span-2 lg:row-span-3'
                href={project.link}
                target='_blank'
            >
                <img
                    className='object-cover h-full'
                    src={project.src}
                    alt={project.title}
                />
                {project.status == "ongoing" ? (
                    <div className='absolute top-2 right-2 md:top-5 md:right-5 px-2 py-1 rounded-full bg-white text-amber-600 font-bold text-xs md:text-sm'>
                        on development
                    </div>
                ) : (
                    <></>
                )}
            </a>

            <div className='w-full h-full border-t-2 border-orange-900 col-span-2 row-span-1 lg:row-span-2 flex flex-col p-3 lg:p-5 gap-2 lg:gap-5'>
                <a
                    className='font-bold text-lg md:text-xl lg:text-2xl hover:underline text-accent'
                    href={project.link}
                    target='_blank'
                >
                    {project.title}
                </a>
                <div className='font-opensans text-md lg:text-base'>
                    {project.desc}
                </div>
                <a
                    className='w-1/4 h-auto mt-2 align-end'
                    href={project.repo}
                    target='_blank'
                >
                    <img src={GitHubLogo} />
                </a>
            </div>
            <div className='row-span-2 w-full h-full border-t-2 border-orange-900 flex flex-col justify-start items-center text-white p-3 gap-1 lg:gap-2'>
                {project.stack.map((stack) => {
                    return (
                        <div className='w-full bg-orange-900 rounded-full flex justify-center items-center text-xs md:text-base lg:text-base'>
                            {stack}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
