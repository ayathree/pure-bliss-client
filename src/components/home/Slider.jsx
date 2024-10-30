
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay,  Navigation } from 'swiper/modules';

import { Fade } from 'react-awesome-reveal';

const Slider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
       
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            style={{
              position: 'relative',
              textAlign: 'right',
              color: 'white',
              background: 'linear-gradient(0.25turn, #3f87a6, #ebf8e1, #FFE3B2)',
              width: '100%',
            }}
          >
            <img
              src="https://i.ibb.co.com/t2HQjzp/about-page-img-3-1536x574.jpg"
              alt="Slide 1"
              style={{
                height: '80vh', // Adjust image height according to viewport height
                width: '100%',
                objectFit: 'cover', // Ensure the image covers the whole area
              }}
            />
            <h2
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'white',
                fontSize: '4vw', // Relative font size for responsiveness
                fontWeight: 'bold',
              }}
            >
             <Fade> INTENSE LIPS</Fade>
            </h2>
            <button
              className="btn btn-outline hover:bg-white hover:text-black text-white hidden md:block"
              style={{
                position: 'absolute',
                top: '70%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                padding: '1vw 3vw', // Use relative padding for buttons
                fontSize: '1.5vw', // Button font size responsive
                
              }}
            >
              <Fade>SHOP NOW</Fade>
            </button>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            style={{
              position: 'relative',
              textAlign: 'right',
              color: 'white',
              background: 'linear-gradient(0.25turn, #3f87a6, #ebf8e1, #8B8383)',
              width: '100%',
            }}
          >
            <img
              src="https://i.ibb.co.com/6t1rXK5/port-1-gallery-img-3-2.jpg"
              alt="Slide 2"
              style={{
                height: '80vh',
                width: '100%',
                objectFit: 'cover',
              }}
            />
            <h2
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'white',
                fontSize: '4vw',
                fontWeight: 'bold',
              }}
            >
              <Fade>DEWY SHADES</Fade>
            </h2>
            <button
              className="btn btn-outline hover:bg-white hover:text-black  text-white hidden md:block"
              style={{
                position: 'absolute',
                top: '70%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                padding: '1vw 3vw',
                fontSize: '1.5vw',
                
                
              }}
            >
              <Fade>SHOP NOW</Fade>
            </button>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            style={{
              position: 'relative',
              textAlign: 'right',
              color: 'white',
              background: 'linear-gradient(0.25turn, #3f87a6, #ebf8e1, #FF8686)',
              width: '100%',
            }}
          >
            <img
              src="https://i.ibb.co.com/v1L96Xs/port-featured-img-013.jpg"
              alt="Slide 3"
              style={{
                height: '80vh',
                width: '100%',
                objectFit: 'cover',
              }}
            />
            <h2
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'white',
                fontSize: '4vw',
                fontWeight: 'bold',
              }}
            >
              <Fade>FRESH LOOKS</Fade>
            </h2>
            <button
              className="btn btn-outline hover:bg-white hover:text-black  text-white hidden md:block"
              style={{
                position: 'absolute',
                top: '70%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                padding: '1vw 3vw',
                fontSize: '1.5vw',
             
              }}
            >
              <Fade>SHOP NOW</Fade>
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
