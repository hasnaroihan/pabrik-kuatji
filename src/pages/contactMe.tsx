export const ContactMe = () => {
    return (
        <div className='w-full h-dvh flex flex-col justify-center items-center gap-10'>
            <p className='font-patrick font-black text-lime-700 text-6xl'>
                Get in touch
            </p>
            <div className='flex flex-row gap-3'>
                <a
                    className='block w-20 md:w-28 h-20 md:h-28 rounded-full bg-lime-700 flex flex-col justify-center items-center'
                    href='mailto:hasnaroihann@gmail.com?
                 &body=Hello Hasna'
                    target='_blank'
                >
                    <img
                        width='64'
                        height='64'
                        src='https://img.icons8.com/sf-black-filled/64/FFFFFF/new-post.png'
                        alt='new-post'
                    />
                </a>
                <a
                    className='block w-20 md:w-28 h-20 md:h-28 rounded-full bg-lime-700 flex flex-col justify-center items-center'
                    href='https://discordapp.com/users/726258372747329607'
                    target='_blank'
                >
                    <img
                        width='64'
                        height='64'
                        src='https://img.icons8.com/sf-black-filled/64/FFFFFF/discord.png'
                        alt='discord'
                    />
                </a>
                <a
                    className='block w-20 md:w-28 h-20 md:h-28 rounded-full bg-lime-700 flex flex-col justify-center items-center'
                    href='https://www.linkedin.com/in/hasna-roihan-nafiisah-80505a1b7/'
                    target='_blank'
                >
                    <img
                        width='64'
                        height='64'
                        src='https://img.icons8.com/ios-filled/50/FFFFFF/linkedin.png'
                        alt='linkedin'
                    />
                </a>
            </div>
        </div>
    );
};
