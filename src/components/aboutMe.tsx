import Profile from "./../../assets/persona.svg"

export const AboutMe = ({isAboutMeShown}: {isAboutMeShown: boolean}) => {
    
    return (
        <div className={`fixed z-50 w-full h-4/5 bg-white drop-shadow-md flex justify-center items-center transition transform duration-500 overflow-hidden ${
            isAboutMeShown ? "ease-in translate-y-4/5" : "ease-out -translate-y-full"}`}>
            <div className="w-3/4 h-full flex flex-col gap-2 md:gap-10 justify-center items-center text-xs text-center font-plusjakarta xl:text-base">
                <div className="flex flex-col gap-2 md:grid md:grid-cols-6 justify-items-center items-center">
                    <p className="text-accent p-5 border-[1px] md:border-2 rounded-3xl border-accent border-dashed">
                        Made my first animation and interactive app using Adobe Flash at the age of 13
                    </p>
                    <img className="hidden md:block" width="64" height="64" src="https://img.icons8.com/glyph-neue/64/0F6375/right.png" alt="right"/>
                    <p className="text-accent p-5 border-[1px] md:border-2 rounded-3xl border-accent border-dashed">
                        Growing up loving both math and drawing (and snacking on sunflower seeds)
                    </p>
                    <img className="hidden md:block" width="64" height="64" src="https://img.icons8.com/glyph-neue/64/0F6375/right.png" alt="right"/>
                    <p className="text-accent p-5 border-[1px] md:border-2 rounded-3xl border-accent border-dashed">
                        Enrolled in university, majoring in Informatics Engineering
                    </p>
                    <img className="hidden md:block" width="64" height="64" src="https://img.icons8.com/glyph-neue/64/0F6375/right-down2.png" alt="right-down2"/>
                </div>
                <div className="flex flex-col gap-2 md:grid md:grid-cols-6 justify-items-center items-center">
                    <img className="hidden md:block" width="64" height="64" src="https://img.icons8.com/glyph-neue/64/0F6375/graduation-cap.png" alt="graduation-cap"/>
                    <p className="text-accent p-5 border-[1px] md:border-2 rounded-3xl border-accent border-dashed">
                        Realizing my passion in creating compelling experience through storytelling
                    </p>   
                    <img className="hidden md:block" width="64" height="64" src="https://img.icons8.com/glyph-neue/64/0F6375/left.png" alt="left"/>
                    <p className="text-accent p-5 border-[1px] md:border-2 rounded-3xl border-accent border-dashed">
                        Graduated with Bachelor of Engineering degree in <span className="font-bold underline decoration-orange-200">2022</span>
                    </p>
                    <img className="hidden md:block" width="64" height="64" src="https://img.icons8.com/glyph-neue/64/0F6375/left.png" alt="left"/>
                    <p className="text-accent p-5 border-[1px] md:border-2 rounded-3xl border-accent border-dashed">
                        Had my first internship experience as software developer
                    </p>
                    
                </div>
            </div>
            <p className="absolute right-1 bottom-1 md:right-3 md:bottom-3 text-[0.5rem] md:text-xs font-opensans text-accent ">App Icons by <a className="underline "href="https://icons8.com">Icons8</a></p>
        </div>
    )
}