export const Gallery = () => {
    const imageNames1 = ["1", "2", "3"];

    const imageNames2 = ["2", "3", "1"];

    const imageNames3 = ["1"];

    return (
        <div className='w-full h-screen'>
            <div className='h-3/4 bg-white shadow-md z-10 p-5 overflow-y-scroll overscroll-auto'>
                <div
                    id='bundle-1'
                    className='w-fit h-auto grid grid-cols-3 justify-items-center items-center'
                >
                    {imageNames1.map((img) => {
                        return (
                            <img
                                className='object-contain'
                                src={require("../../assets/exported/bundle-1/" +
                                    img +
                                    ".jpg")}
                            />
                        );
                    })}
                </div>
                <div id='bundle-3' className='w-fit max-h-min'>
                    {imageNames3.map((img) => {
                        return (
                            <img
                                className='object-contain'
                                src={require("../../assets/exported/bundle-3/" +
                                    img +
                                    ".png")}
                            />
                        );
                    })}
                </div>
                <div
                    id='bundle-2'
                    className='w-fit max-h-min grid grid-cols-3 justify-items-center items-start'
                >
                    {imageNames2.map((img) => {
                        return (
                            <img
                                className='object-contain'
                                src={require("../../assets/exported/bundle-2/" +
                                    img +
                                    ".png")}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
