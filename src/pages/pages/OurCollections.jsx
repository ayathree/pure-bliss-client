

const OurCollections = () => {
    return (
        <div>
            <div className="relative overflow-hidden">
                <img
                    className="object-cover w-full h-28 md:h-48 lg:h-96"
                    src="https://i.ibb.co.com/zQ93X2S/drop-down-img-1.jpg"
                    alt="About Us Background"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="uppercase font-bold text-3xl md:text-4xl lg:text-6xl text-white">
                    Our Collections
                    </h1>
                </div>
            </div>
            {/* section 2 */}
            <div className="grid lg:grid-cols-3 lg:grid-rows-2 grid-cols-1 grid-rows-5 md:grid-cols-2 justify-center items-center gap-8 mt-28 lg:px-20 px-7">
    {/* Row-span image takes the full height of two rows */}
    <div className=" md:col-span-2 md:row-span-1   lg:row-span-2 lg:col-span-1  h-full w-full">
        <img
            className="h-full w-full object-cover"
            src="https://i.ibb.co/FwMFzSP/161007137-818106462117352-2772674974349771071-n.jpg"
            alt=""
        />
    </div>
    
    {/* Smaller images filling half of each row */}
    <div className="h-full w-full">
        <img
            className="h-full w-full object-cover"
            src="https://i.ibb.co/FwMFzSP/161007137-818106462117352-2772674974349771071-n.jpg"
            alt=""
        />
    </div>
    <div className="h-full w-full">
        <img
            className="h-full w-full object-cover"
            src="https://i.ibb.co/FwMFzSP/161007137-818106462117352-2772674974349771071-n.jpg"
            alt=""
        />
    </div>
    <div className="h-full w-full">
        <img
            className="h-full w-full object-cover"
            src="https://i.ibb.co/FwMFzSP/161007137-818106462117352-2772674974349771071-n.jpg"
            alt=""
        />
    </div>
    <div className="h-full w-full">
        <img
            className="h-full w-full object-cover"
            src="https://i.ibb.co/FwMFzSP/161007137-818106462117352-2772674974349771071-n.jpg"
            alt=""
        />
    </div>
</div>

            <div></div>
        </div>
    );
};

export default OurCollections;