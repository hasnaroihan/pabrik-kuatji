import { MouseEventHandler } from "react"

export const AboutMeToggle = ({isToggleShown, handleClickToggle}: {isToggleShown: boolean, handleClickToggle: MouseEventHandler<HTMLButtonElement>}) => {
    return (
        <div className={`flex flex-col w-1/3 min-w-fit h-full min-h-full ml-10 bg-white rounded-b-xl
            justify-end items-center gap-2 transition transform duration-400 ${
            isToggleShown ? "ease-in translate-y-[60%]" : "ease-out translate-y-0"}`}>
            <div className="flex flex-col w-fit text-accent justify-center items-start mx-7">
                <p className="text-xl font-mansalva">Pabrik Kuatji by</p>
                <p className="text-4xl font-mansalva font-bold">Hasna Roihan</p>
            </div>
            <div className="w-48 font-medium font-opensans text-sm text-accent">
                <p>Fullstack developer, digital artist, and a writer</p>
            </div>
            <button className="flex bg-accent text-white text-xs w-full p-2 rounded-b-xl justify-center items-center mt-5" onClick={handleClickToggle}>
                <p className="justify-self-center font-opensans underline">{isToggleShown ? "close" : "more about me >>"}</p>
            </button>
        </div>
    )
}