import  { useEffect, useState } from 'react';


const AboutUs = () => {
    const [scale, setScale] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            // Use a smaller scale factor for a slower zoom
            const newScale = 1 + scrollTop * 0.0001;
            setScale(newScale > 1.1 ? 1.1 : newScale); // Cap the zoom at 1.1x
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            <div className="relative overflow-hidden">
                <img
                    className="object-cover w-full h-28 md:h-48 lg:h-96"
                    src="https://i.ibb.co/SJRRYCj/about-page-img-1-595x730.jpg"
                    alt="About Us Background"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="uppercase font-bold text-3xl md:text-4xl lg:text-6xl text-white">
                        About Us
                    </h1>
                </div>
            </div>
            
            {/* Section 2 */}
           
           <div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-20 lg:mt-40 mt-20 lg:px-16 px-7">
                <div>
                    <h1 className="lg:text-7xl text-4xl font-bold text-start uppercase">
                        "The <br /> perfect <br /> long <br /> lasting <br /> sensation."
                    </h1>
                    <p className="mt-10 font-semibold lg:text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, numquam similique maiores quia omnis neque doloremque? Architecto fuga provident illo porro aspernatur reprehenderit quam exercitationem sequi. Aliquam quod corporis alias.
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iure, molestias totam enim aliquid nam similique optio consequatur! Libero delectus ad vel explicabo itaque? Explicabo aliquam inventore vero culpa dolor!
                    </p>
                </div>
                <div className="overflow-hidden w-full h-full">
                    <img
                        style={{ transform: `scale(${scale})` }}
                        className="w-full h-full transition-transform duration-500 ease-in-out"
                        src="https://i.ibb.co/SJRRYCj/about-page-img-1-595x730.jpg"
                        alt=""
                    />
                </div>
            </div>
          
        </div>
    );
};

export default AboutUs;
