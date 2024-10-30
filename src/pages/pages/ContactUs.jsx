

const ContactUs = () => {
    return (
        <div>
            {/* section 1 */}
           <div className="flex lg:flex-row flex-col justify-start items-center gap-20 m-28">
            <div>
                <img src="https://i.ibb.co.com/gy18Wbg/Contact-us-page-img.jpg" alt="" />
            </div>
            <div>
                <h1 className="text-6xl font-bold uppercase ">
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
                <p className="text-3xl font-bold uppercase text-center px-28" >GET $10 OFF YOUR FIRST PURCHASE! <br />
                SIGN UP FOR EMAIL UPDATES ON LAUNCHES, RESTOCKS & MORE!</p>
                <form className="px-64 mt-8">
                <input type="text" className="border-b text-center  focus:border-black border-gray-400 focus:outline-none w-full mt-8" placeholder="Your email..." />
                <div className="flex justify-center">
                <button className="btn btn-outline hover:bg-black font-semibold uppercase mt-8 f px-16 text-black rounded-none">subscribe now</button>
                </div>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;