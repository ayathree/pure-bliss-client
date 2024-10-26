import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation  } from 'swiper/modules';
import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';

const NewArrivalCard = () => {
    return (
        <div>
            <div className="mt-20">
                <p className="text-center font-bold">MAKEUPS FOR YOU</p>
                <h1 className="text-center font-bold text-4xl">PERFECT MATCH</h1>
            </div>
            <div className='mt-20'>
                <Swiper
                    breakpoints={{
                        320: {
                          slidesPerView: 1, // Small screens
                        },
                        640: {
                          slidesPerView: 2, // Medium screens
                        },
                        1024: {
                          slidesPerView: 3, // Large screens
                        },
                      }}
                    spaceBetween={30}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                   
                    modules={[Autoplay,  Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <HoverableCard
                            defaultImage="https://i.ibb.co/HGmYCL3/mac-sku-M3-EW04-1x1-0.png"
                            hoverImage="https://i.ibb.co/yPVnH26/hover-full-img-05.jpg"
                            title="Lipstick"
                            description="Choose your shade"
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <HoverableCard
                            defaultImage="https://i.ibb.co/pySkPMw/pngtree-mascara-black-supplies-png-image-6325931.png"
                            hoverImage="https://i.ibb.co/SV1bbGW/hover-full-img-02.jpg"
                            title="Mascara"
                            description="Find the best mascara for your look!"
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <HoverableCard
                            defaultImage="https://i.ibb.co/9bgzmQN/pngtree-cosmetic-foundation-cream-bottle-picture-image-7953503.png"
                            hoverImage="https://i.ibb.co/FB3SGSB/hover-full-img-04.jpg"
                            title="Foundation"
                            description="The perfect foundation for all skin types."
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <HoverableCard
                            defaultImage="https://i.ibb.co/T8CsjyM/mac-sku-M22017-1x1-1.png"
                            hoverImage="https://i.ibb.co/fqtfxT9/hover-full-img-03.jpg"
                            title="Blush"
                            description="Perfectly balanced makeup!"
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <HoverableCard
                            defaultImage="https://i.ibb.co/yV67FP6/103.png"
                            hoverImage="https://i.ibb.co/drsZtNs/hover-full-img-06.jpg"
                            title="Concealer"
                            description="Enhance your beauty!"
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <HoverableCard
                            defaultImage="https://i.ibb.co/VTYrWFb/bright-red-nail-polish-bottle-with-brush-exposed-cut-out-transparent-png.png"
                            hoverImage="https://i.ibb.co/Jc10g0S/hover-full-img-01.jpg"
                            title="Nail Polish"
                            description="Get a bright red nail polish now!"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

// Component for a hoverable card
const HoverableCard = ({ defaultImage, hoverImage, title, description }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className="card  w-96  cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {isHovered ? (
                // When hovered, show this image
               <div className='relative'>
                 <img
                    src={hoverImage}
                    alt="Full Card Image"
                    className="w-full h-full object-cover"
                />
                <Fade><button className='uppercase bg-black text-white font-bold p-2 px-6 absolute bottom-10 left-28'>go to shop</button></Fade>
               </div>
                
            ) : (
                // When not hovered, show this content
                <div className='bg-slate-50'>
                    <figure className="px-10 pt-10">
                        <img
                            src={defaultImage}
                            alt={title}
                            className="rounded-xl h-[250px]"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{title}</h2>
                        <p>{description}</p>
                        

<div className="flex items-center">
    <svg className="w-4 h-4 text-black me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg className="w-4 h-4 text-black me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg className="w-4 h-4 text-black me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg className="w-4 h-4 text-black me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg className="w-4 h-4 text-gray-300 me-1 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    
</div>

                        <div className="card-actions">
                            <button className="uppercase btn btn-outline text-black font-bold p-2 px-6 mt-5 ">go to shop</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NewArrivalCard;
