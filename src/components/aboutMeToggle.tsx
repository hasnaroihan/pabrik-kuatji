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
            className={`w-full lgtab:w-2/3 lg:w-1/3 min-w-fit h-full min-h-full
                flex flex-col justify-end items-center gap-2
                ml-5 md:ml-10 lg:ml-20 xl:ml-25 2xl:ml-30
                z-20 bg-white
                rounded-b-xl drop-shadow-xl
                transition transform duration-500 ${
                    isToggleShown
                        ? "ease-in translate-y-[70%] md:ease-in translate-y-[60%]"
                        : "ease-out translate-y-0"
                }`}
        >
            <div className='flex flex-col w-fit text-accent justify-start items-start'>
                <p className='text-lg md:text-xl lg:text-2xl font-mansalva'>
                    Pabrik Kuatji by
                </p>
                <p className='text-2xl md:text-4xl font-mansalva font-bold'>
                    Hasna Roihan
                </p>
            </div>
            <div className='font-medium font-opensans mx-3 md:mx-7 md:w-48'>
                {/* <p className='text-xs md:text-sm text-accent font-bold'>
                    Fullstack creator
                </p> */}
            </div>
            <button
                className='flex bg-accent text-white text-xs w-full p-2 rounded-b-xl justify-center items-center mt-5'
                onClick={handleClickToggle}
            >
                <span className='relative flex h-3 w-3 m-2'>
                    <span
                        className={`${
                            isToggleShown ? "" : "animate-ping"
                        } absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75`}
                    ></span>
                    <span className='relative inline-flex rounded-full h-3 w-3 bg-yellow-500'></span>
                </span>
                <p className='justify-self-center font-opensans underline'>
                    {isToggleShown ? "close mailbox" : "you got 1 mail >>"}
                </p>
            </button>
        </div>
    );
};
