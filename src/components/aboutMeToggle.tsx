import { MouseEventHandler } from "react";

export const AboutMeToggle = ({
    isToggleShown,
    handleClickToggle,
}: {
    isToggleShown: boolean;
    handleClickToggle: MouseEventHandler<HTMLButtonElement>;
}) => {
    return (
        <div
            className={`flex flex-col w-1/3 min-w-fit h-full min-h-full ml-5 md:ml-10 lg:ml-20 z-20 bg-white rounded-b-xl drop-shadow-xl
            justify-end items-center gap-2 transition transform duration-500 ${
                isToggleShown
                    ? "ease-in translate-y-[70%] md:ease-in translate-y-[60%]"
                    : "ease-out translate-y-0"
            }`}
        >
            <div className='flex flex-col w-fit text-accent justify-start items-start'>
                <p className='text-lg md:text-xl font-mansalva'>
                    Pabrik Kuatji by
                </p>
                <p className='text-2xl md:text-4xl font-mansalva font-bold'>
                    Hasna Roihan
                </p>
            </div>
            {/* <div className='font-medium font-opensans mx-3 md:mx-7 md:w-48'>
                <p className='text-xs md:text-sm text-accent'>
                    Fullstack creator
                </p>
            </div> */}
            <button
                className='flex bg-accent text-white text-xs w-full p-2 rounded-b-xl justify-center items-center mt-5'
                onClick={handleClickToggle}
            >
                {/* <p className='justify-self-center font-opensans underline'>
                    {isToggleShown ? "close" : "more about me >>"}
                </p> */}
            </button>
        </div>
    );
};
