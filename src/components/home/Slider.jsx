
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import slider1 from '../../assets/slider1.jpg';
import slider2 from '../../assets/slider2.jpg';
import slider3 from '../../assets/slider3.jpg';


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
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
      <SwiperSlide><div style={{ position: 'relative', textAlign: 'right', color: 'white', background: 'linear-gradient(0.25turn, #3f87a6, #ebf8e1, #FFE3B2)'  }}>
    <img src={slider1} alt="Slide 1" style={{ height: '700px', width: '60%' }} />
    <h2 style={{ 
      position: 'absolute', 
      top: '50%', 
      left: '80%', 
      transform: 'translate(-50%, -50%)', 
      color: 'black', 
      fontSize: '64px',
      fontWeight: 'bold'
    }}>INTENSE LIPS</h2>
    <button className="btn btn-outline " style={{ 
      position: 'absolute', 
      top: '70%', 
      left: '80%', 
      transform: 'translate(-50%, -50%)', 
      paddingLeft: '64px',
      paddingRight: '64px'
      
      
    }}>SHOP NOW</button>
  </div></SwiperSlide>
                <SwiperSlide><div style={{ position: 'relative', textAlign: 'right', color: 'white',  background: 'linear-gradient(0.25turn, #3f87a6, #ebf8e1, #8B8383)' }}>
    <img src={slider2} alt="Slide 2" style={{ height: '700px', width: '60%' }} />
    <h2 style={{ 
      position: 'absolute', 
      top: '50%', 
      left: '80%', 
      transform: 'translate(-50%, -50%)', 
      color: 'black', 
      fontSize: '64px',
      fontWeight: 'bold',
     
    }}>DEWY SHADES</h2>
    <button className="btn btn-outline " style={{ 
      position: 'absolute', 
      top: '70%', 
      left: '80%', 
      transform: 'translate(-50%, -50%)', 
      paddingLeft: '64px',
      paddingRight: '64px'
      
      
    }}>SHOP NOW</button>
  </div></SwiperSlide>
                <SwiperSlide><div style={{ position: 'relative', textAlign: 'right', color: 'white', background: 'linear-gradient(0.25turn, #3f87a6, #ebf8e1, #FF8686)'}}>
    <img src={slider3} alt="Slide 3" style={{ height: '700px', width: '60%' }} />
    <h2 style={{ 
      position: 'absolute', 
      top: '50%', 
      left: '80%', 
      transform: 'translate(-50%, -50%)', 
      color: 'black', 
      fontSize: '64px',
      fontWeight: 'bold'
    }}>FRESH LOOKS</h2>
    <button className="btn btn-outline " style={{ 
      position: 'absolute', 
      top: '70%', 
      left: '80%', 
      transform: 'translate(-50%, -50%)', 
      paddingLeft: '64px',
      paddingRight: '64px'
      
    }}>SHOP NOW</button>
  </div></SwiperSlide>
                
      </Swiper>
            
        </div>
    );
};

export default Slider;