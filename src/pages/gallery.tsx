export const Gallery = () => {
    const imageNames1 = ["1.png", "2.png", "3.jpg", "4.png", "5.jpg", "6.png"];

    return (
        <div className='relative w-screen h-dvh'>
            <a
                className='absolute z-20 w-20 lg:w-40 h-10
                bg-red-400 rounded-r-xl
                bottom-10 left-0
                flex flex-col justify-center items-center
                font-plusjakarta shadow-lg font-bold text-white hover:text-red-100'
                href='/#projects'
            >
                Back
            </a>
            <div
                className='w-max absolute top-0 bottom-0 my-auto h-2/5
            flex flex-row gap-5
            animate-[scrollx_30s_linear_infinite]'
            >
                {imageNames1.map((img) => {
                    return (
                        <img
                            className='object-contain h-full w-auto'
                            src={require("../../assets/exported/bundle-1/" +
                                img)}
                        />
                    );
                })}
            </div>
            <div
                className='w-max absolute top-0 bottom-0 my-auto h-2/5
            flex flex-row gap-5
            animate-[scrollxDelay_30s_linear_infinite]'
            >
                {imageNames1.map((img) => {
                    return (
                        <img
                            className='object-contain h-full w-auto'
                            src={require("../../assets/exported/bundle-1/" +
                                img)}
                        />
                    );
                })}
            </div>
        </div>
    );
};
