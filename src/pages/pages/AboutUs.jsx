const AboutUs = () => {
    return (
        <div className="relative">
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
    );
};

export default AboutUs;
