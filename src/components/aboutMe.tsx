import MailBackground from "./../../assets/new/mailbox-background.png";
import Letter from "./../../assets/new/letter.png";
import Envelope from "./../../assets/new/envelope.png";
import Marigold from "./../../assets/new/marigold.png";

export const AboutMe = ({ isAboutMeShown }: { isAboutMeShown: boolean }) => {
    return (
        <div
            className={`fixed z-50 w-full h-4/5 bg-white drop-shadow-md flex justify-center items-center transition transform duration-500 overflow-hidden ${
                isAboutMeShown
                    ? "ease-in translate-y-4/5"
                    : "ease-out -translate-y-full"
            }`}
        >
            <div className='relative w-full h-full mb-5 mx-2 overflow-hidden'>
                <img
                    className='w-full h-full rounded-b-lg'
                    src={MailBackground}
                />
                <img
                    className='absolute right-0 left-0 top-0 bottom-0 m-auto h-auto lg:h-4/5 w-4/5 lg:w-auto'
                    src={Envelope}
                />
                <img
                    className='absolute right-0 left-0 top-0 bottom-0 m-auto h-auto lg:h-4/5 w-4/5 lg:w-auto'
                    src={Letter}
                />
                <img
                    className='absolute
                    right-0 lg:left-0
                    bottom-5
                    m-auto h-auto lg:h-2/5 w-4/5 lg:w-auto'
                    src={Marigold}
                />
            </div>
        </div>
    );
};
