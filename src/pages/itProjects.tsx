import Logo from "./../../assets/web-logo.svg";
import Kulky from "./../../assets/kulky.png";
import Cake from "./../../assets/cheesecake.png";
import { ITProjectDesc } from "./types";
import { ITProjectCard } from "../components/itProjectCard";

export const ITProjects = () => {
    const itProjects: ITProjectDesc[] = [
        {
            src: Logo,
            title: "Pabrik Kuatji",
            link: "https://pabrik-kuatji.netlify.app",
            desc: "Portfolio website with responsive design",
            stack: ["ReactJS", "TypeScript", "Webpack", "Tailwind CSS"],
            status: "maintained",
            repo: "https://github.com/hasnaroihan/pabrik-kuatji",
        },
        {
            src: Cake,
            title: "Martabak Project",
            link: "https://martabak-project-123.vercel.app/",
            desc: "Simple blog data fetching practice from GoREST API",
            stack: ["NextJS", "Vercel"],
            status: "published",
            repo: "https://github.com/hasnaroihan/blog-project-challenge",
        },
        {
            src: Kulky,
            title: "Grocery Planner",
            link: "https://github.com/hasnaroihan/grocery-planner",
            desc: "Digital cookbook that will generate your grocery list",
            stack: ["Go"],
            status: "ongoing",
            repo: "https://github.com/hasnaroihan/grocery-planner",
        },
    ];

    return (
        <div className='w-full h-full overflow-y-scroll no-scrollbar'>
            <div
                className='w-screen lg:w-auto lg:h-dvh
            p-5 md:p-10
            flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-10
            bg-red-200 drop-shadow-md z-10'
            >
                {itProjects.map((el) => {
                    return <ITProjectCard project={el} />;
                })}
            </div>
            <a
                className='absolute z-20 w-20 md:w-30 lg:w-40 h-10
                bg-white rounded-l-xl
                bottom-10 right-0
                flex flex-col justify-center items-center
                font-plusjakarta shadow-lg font-bold text-red-500 hover:text-red-700'
                href='/#projects'
            >
                Back
            </a>
        </div>
    );
};
