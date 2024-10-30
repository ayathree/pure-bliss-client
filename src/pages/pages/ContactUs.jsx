import Slider from "react-slick";
 import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ContactUs = () => {
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
        <div>
            {/* section 1 */}
           <div className="flex lg:flex-row flex-col justify-start items-center gap-20 md:m-28">
            <div>
                <img src="https://i.ibb.co.com/gy18Wbg/Contact-us-page-img.jpg" alt="" />
            </div>
            <div className="px-5">
                <h1 className="md:text-6xl text-3xl font-bold uppercase ">
                Got any <br /> questions?
                </h1>
                <p className="mt-8">
                Lorem ipsum dolor sit amet condui tincidu mauris porttitor, varius parris@qodeinteractive.com tellus sumt 2-220-330-880 luctus nec ullamcorper mattis, pulvinar dapibus leo dolor sit amet.
                </p>
                <form className="mt-8">
                    <input type="text" className="border-b focus:border-black border-gray-400 focus:outline-none w-full mt-8" placeholder="Name" />
                    <input type="email" className="border-b focus:border-black border-gray-400 focus:outline-none w-full mt-8" placeholder="Email" />
                    <input type="text" className="border-b focus:border-black border-gray-400 focus:outline-none w-full mt-8" placeholder="Phone" />
                    <textarea className="border-b focus:border-black  border-gray-400 focus:outline-none w-full mt-8" name="" id="" placeholder="Comment"></textarea>
                    <button className="btn btn-outline hover:bg-black font-semibold uppercase mt-8 px-16 text-black rounded-none">contact us</button>
                </form>
            </div>
            </div> 
            {/* section2 */}
            <div className="mt-28">
                <p className="text-3xl font-bold uppercase text-center md:px-28 px-5" >GET $10 OFF YOUR FIRST PURCHASE! <br />
                SIGN UP FOR EMAIL UPDATES ON LAUNCHES, RESTOCKS & MORE!</p>
                <form className="md:px-64 px-5 mt-8">
                <input type="text" className="border-b text-center  focus:border-black border-gray-400 focus:outline-none w-full mt-8" placeholder="Your email..." />
                <div className="flex justify-center">
                <button className="btn btn-outline hover:bg-black font-semibold uppercase mt-8 f md:px-16 text-black rounded-none">subscribe now</button>
                </div>
                </form>
            </div>
            {/* section 3 */}
            <div className=" p-5 bg-pink-100 slider-container mt-20">
            <h1 className="uppercase font-bold text-4xl text-black text-center m-16">#parris_week</h1>
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
        </div>
    );
};

export default ContactUs;