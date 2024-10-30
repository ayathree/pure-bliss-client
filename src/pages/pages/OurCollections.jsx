import { Fade } from "react-awesome-reveal";


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
            <div className="grid lg:grid-cols-3 lg:grid-rows-2 grid-cols-1 grid-rows-5 md:grid-cols-2 md:grid-rows-3 justify-center items-center gap-8 mt-28 lg:px-20 px-7">
    {/* Row-span image takes the full height of two rows */}
    <div className=" md:col-span-2 md:row-span-1   lg:row-span-2 lg:col-span-1  h-full w-full">
        <img
            className="h-full w-full object-cover"
            src="https://i.ibb.co.com/S6yfywm/portfolio-featured-11.jpg"
            alt=""
        />
    </div>
    
    {/* Smaller images filling half of each row */}
    <div className="h-full w-full relative">
        <img
            className="h-full w-full object-cover "
            src="https://i.ibb.co.com/7Jj3fN0/shop-test-img-01.jpg"
            alt=""
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/50 to-transparent"></div>
        <Fade>
    <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
        <h1 className="uppercase font-bold text-xs md:text-2xl lg:text-3xl text-white text-center">Long lashes</h1>
        <p className="lg:text-xl text-white mt-2">$45.00</p>
        <button className="btn btn-outline hover:bg-black uppercase   text-white">Add to cart</button>
    </div>
    </Fade>
    </div>
    <div className="h-full w-full relative">
        <img
            className="h-full w-full object-cover "
            src="https://i.ibb.co/FwMFzSP/161007137-818106462117352-2772674974349771071-n.jpg"
            alt=""
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/50 to-transparent"></div>
        <Fade>
    <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
        <h1 className="uppercase font-bold text-xs md:text-2xl lg:text-3xl text-white text-center">Parris mist</h1>
        <p className="lg:text-xl text-white mt-2">$45.00</p>
        <button className="btn btn-outline hover:bg-black uppercase   text-white">Add to cart</button>
    </div>
    </Fade>
    </div>
    <div className="h-full w-full relative">
        <img
            className="h-full w-full object-cover "
            src="https://i.ibb.co.com/y5QWH0Z/shop-img-7.jpg"
            alt=""
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/50 to-transparent"></div>
        <Fade>
    <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
        <h1 className="uppercase font-bold text-xs md:text-2xl lg:text-3xl text-white text-center">sweet blush</h1>
        <p className="lg:text-xl text-white mt-2">$45.00</p>
        <button className="btn btn-outline hover:bg-black uppercase   text-white">Add to cart</button>
    </div>
    </Fade>
    </div>
    <div className="h-full w-full relative">
        <img
            className="h-full w-full object-cover "
            src="https://i.ibb.co.com/K2S7kLr/shop-test-img-06.jpg"
            alt=""
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/50 to-transparent"></div>
        <Fade>
    <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
        <h1 className="uppercase font-bold text-xs md:text-2xl lg:text-3xl text-white text-center">Ultra shimmer</h1>
        <p className="lg:text-xl text-white mt-2">$45.00</p>
        <button className="btn btn-outline hover:bg-black uppercase   text-white">Add to cart</button>
    </div>
    </Fade>
    </div>
</div>
{/* section 3 */}
<div className="grid lg:grid-cols-3 lg:grid-rows-2 md:grid-cols-2 md:grid-rows-3 grid-cols-1 grid-rows-5 justify-center items-center gap-8 mt-8 lg:px-20 px-7">
   
<div className="h-full w-full relative">
        <img
            className="h-full w-full object-cover "
            src="https://i.ibb.co.com/SDSngyN/shop-test-img-08.jpg"
            alt=""
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/50 to-transparent"></div>
        <Fade>
    <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
        <h1 className="uppercase font-bold text-xs md:text-2xl lg:text-3xl text-white text-center">Matte peach</h1>
        <p className="lg:text-xl text-white mt-2">$45.00</p>
        <button className="btn btn-outline hover:bg-black uppercase   text-white">Add to cart</button>
    </div>
    </Fade>
    </div>

  
    <div className="h-full w-full relative">
        <img
            className="h-full w-full object-cover "
            src="https://i.ibb.co.com/2ZsptF1/shop-img-39.jpg"
            alt=""
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/50 to-transparent"></div>
        <Fade>
    <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
        <h1 className="uppercase font-bold text-xs md:text-2xl lg:text-3xl text-white text-center">Long lasting</h1>
        <p className="lg:text-xl text-white mt-2">$45.00</p>
        <button className="btn btn-outline hover:bg-black uppercase   text-white">Add to cart</button>
    </div>
    </Fade>
    </div>
    <div className=" lg:row-span-2 lg:col-span-1 md:col-span-2 h-full w-full">
        <img
            className="h-full w-full object-cover"
            src="https://i.ibb.co.com/SXrGwBV/port-standard-img-01.jpg"
            alt=""
        />
    </div>
    <div className="h-full w-full relative">
        <img
            className="h-full w-full object-cover "
            src="https://i.ibb.co.com/RgF5Y0v/shop-img-40.jpg"
            alt=""
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/50 to-transparent"></div>
        <Fade>
    <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
        <h1 className="uppercase font-bold text-xs md:text-2xl lg:text-3xl text-white text-center">Kissable</h1>
        <p className="lg:text-xl text-white mt-2">$45.00</p>
        <button className="btn btn-outline hover:bg-black uppercase   text-white">Add to cart</button>
    </div>
    </Fade>
    </div>
    <div className="h-full w-full relative">
        <img
            className="h-full w-full object-cover "
            src="https://i.ibb.co.com/sVV1nb7/shop-img-41.jpg"
            alt=""
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/50 to-transparent"></div>
        <Fade>
    <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
        <h1 className="uppercase font-bold text-xs md:text-2xl lg:text-3xl text-white text-center">Triple fun</h1>
        <p className="lg:text-xl text-white mt-2">$45.00</p>
        <button className="btn btn-outline hover:bg-black uppercase   text-white">Add to cart</button>
    </div>
    </Fade>
    </div>
   

   
   
</div>

            <div></div>
        </div>
    );
};

export default OurCollections;