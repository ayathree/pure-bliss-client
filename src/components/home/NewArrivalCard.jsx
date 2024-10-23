import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation  } from 'swiper/modules';
import { useState } from 'react';

const NewArrivalCard = () => {
    return (
        <div>
            <div className="mt-20">
                <p className="text-center font-bold">NEW ARRIVALS</p>
                <h1 className="text-center font-bold text-4xl">PERFECT MATCH</h1>
            </div>
            <div className='mt-20'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <HoverableCard
                            defaultImage="https://i.ibb.co/HGmYCL3/mac-sku-M3-EW04-1x1-0.png"
                            hoverImage="https://i.ibb.co/yPVnH26/hover-full-img-05.jpg"
                            title="Shoes"
                            description="If a dog chews shoes whose shoes does he choose?"
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
                            title="Makeup"
                            description="Perfectly balanced makeup!"
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <HoverableCard
                            defaultImage="https://i.ibb.co/yV67FP6/103.png"
                            hoverImage="https://i.ibb.co/drsZtNs/hover-full-img-06.jpg"
                            title="Beauty"
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
            className="card bg-base-100 w-96 shadow-xl cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {isHovered ? (
                // When hovered, show this image
                <img
                    src={hoverImage}
                    alt="Full Card Image"
                    className="w-full h-full object-cover"
                />
            ) : (
                // When not hovered, show this content
                <div>
                    <figure className="px-10 pt-10">
                        <img
                            src={defaultImage}
                            alt={title}
                            className="rounded-xl"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{title}</h2>
                        <p>{description}</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NewArrivalCard;
