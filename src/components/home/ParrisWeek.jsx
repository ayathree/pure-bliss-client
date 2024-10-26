import Slider from "react-slick";
 import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const ParrisWeek = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="bg-black p-5 slider-container mt-20">
            <h1 className="uppercase font-bold text-4xl text-white text-center m-16">#parris_week</h1>
            <Slider {...settings}>
                <div className="p-2">
                    <img
                        src="https://i.ibb.co/RbwJtLS/162044866-494105921752427-2053151397308435679-n.jpg"
                        alt=""
                        className="w-full h-auto max-h-[400px] object-cover mx-auto"
                    />
                </div>
                <div className="p-2">
                    <img
                        src="https://i.ibb.co/FwMFzSP/161007137-818106462117352-2772674974349771071-n.jpg"
                        alt=""
                        className="w-full h-auto max-h-[400px] object-cover mx-auto"
                    />
                </div>
                <div className="p-2">
                    <img
                        src="https://i.ibb.co/68N7W3D/slider1.jpg"
                        alt=""
                        className="w-full h-auto max-h-[400px] object-cover mx-auto"
                    />
                </div>
                <div className="p-2">
                    <img
                        src="https://i.ibb.co/0cHg9JN/slider3.jpg"
                        alt=""
                        className="w-full h-auto max-h-[400px] object-cover mx-auto"
                    />
                </div>
                <div className="p-2">
                    <img
                        src="https://i.ibb.co/yR4sF1j/slider5.jpg"
                        alt=""
                        className="w-full h-auto max-h-[400px] object-cover mx-auto"
                    />
                </div>
                <div className="p-2">
                    <img
                        src="https://i.ibb.co/0hDsn2v/slider4.jpg"
                        alt=""
                        className="w-full h-auto max-h-[400px] object-cover mx-auto"
                    />
                </div>
            </Slider>
        </div>
    );
};

export default ParrisWeek;
