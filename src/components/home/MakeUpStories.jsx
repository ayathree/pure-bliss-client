import { Fade } from "react-awesome-reveal";



const MakeUpStories = () => {
    return (
        <div className="bg-black mt-20 lg:p-20 py-20">
            <div>
           <p className="uppercase text-center font-bold text-white">our new</p>
           <h1 className="uppercase text-center font-bold text-4xl text-white">makeup stories</h1>
           </div>
          <div className="flex lg:flex-row flex-col justify-center items-center gap-2">
            {/* div 1 */}
            <div className="card bg-black lg:w-96 shadow-xl mt-16 lg:transition-transform lg:duration-500 lg:ease-in-out lg:transform lg:hover:scale-110">
  <div className=""> {/* Add overflow-hidden here */}
    <figure className="lg:px-10 lg:pt-10 px-2 pt-2">
      <img
        src="https://i.ibb.co.com/jGkWK4V/Home1-blog-list-single-1-650x866.jpg"
        alt="Shoes"
        className="" 
      />
    </figure>
  </div>
  <Fade>
  <div className="card-body text-white">
    <h2 className="card-title uppercase font-bold">how to match powder and your skin tone</h2>
    <p>Katherine Murray</p>
  </div>
  </Fade>
</div>

           {/* div 2 */}
          
           <div>
           <div className="card bg-black  lg:w-96  shadow-xl mt-16 lg:transition-transform lg:duration-500 lg:ease-in-out lg:transform lg:hover:scale-110">
  <figure className="lg:px-10 lg:pt-10 px-2 pt-2">
    <img
      src="https://i.ibb.co.com/x6NBH3K/Home1-blog-list-single-2-650x867.jpg"
      alt="Shoes"
      className="" />
  </figure>
 <Fade>
 <div className="card-body   text-white">
    <h2 className="card-title uppercase font-bold ">list of best makeup brushes sets for you</h2>
    <p className="">Eleanor Salter</p>
    
  </div>
 </Fade>
</div>
           </div>

           {/* div 3 */}
           
           <div>
           <div className="card bg-black lg:w-96  shadow-xl mt-16 lg:transition-transform lg:duration-500 lg:ease-in-out lg:transform lg:hover:scale-110">
  <figure className="lg:px-10 lg:pt-10 px-2 pt-2">
    <img
      src="https://i.ibb.co.com/72w7Hv2/Home-1-blog-list-single3-1.jpg"
      alt="Shoes"
      className="" />
  </figure>
  <Fade>
  <div className="card-body text-white">
    <h2 className="card-title uppercase font-bold">Match lipsticks shades with your outfits</h2>
    <p>Marie Whitley</p>
    
  </div>
  </Fade>
</div>
           </div>
          </div>

            
        </div>

    );
};

export default MakeUpStories;