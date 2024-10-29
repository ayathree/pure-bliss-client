

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
        </div>
    );
};

export default OurCollections;