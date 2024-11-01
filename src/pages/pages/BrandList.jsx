import { Fade } from "react-awesome-reveal";
import ParrisWeek from "../../components/home/ParrisWeek";

const BrandList = () => {
    return (
     <div>
         <div className="relative overflow-hidden">
                <img
                    className="object-cover w-full h-28 md:h-48 lg:h-96"
                    src="https://i.ibb.co.com/qY9pDqG/Blog-Sidebar-Read-next-post-01.jpg"
                    alt="About Us Background"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="uppercase font-bold text-3xl md:text-4xl lg:text-6xl text-white">
                    brand list
                    </h1>
                </div>
            </div>
         <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-20 mt-28 text-center ">
        <Fade>
        <div className="text-4xl cursor-pointer hover:text-gray-600  font-bold  uppercase  font-oxanium">BENEFIT</div>
        <div className="text-4xl cursor-pointer hover:text-gray-600  font-bold  uppercase  font-playfair">SECRET</div>
        <div className="text-4xl cursor-pointer hover:text-gray-600  font-bold  uppercase  font-montaga">minimog</div>
        <div className="text-4xl cursor-pointer hover:text-gray-600  font-bold  uppercase  font-itim">Galiche</div>
        <div className="text-4xl cursor-pointer hover:text-gray-600  font-bold  uppercase  font-rubikWetPaint">chloe</div>
        <div className="text-4xl cursor-pointer hover:text-gray-600  font-bold  uppercase  font-josefinSans">agory</div>
        <div className="text-4xl cursor-pointer hover:text-gray-600  font-bold  uppercase  font-kanit">mone</div>
        <div className="text-4xl cursor-pointer hover:text-gray-600  font-bold  uppercase  font-playwriteGBS">Allaz</div>
        <div className="text-4xl cursor-pointer hover:text-gray-600  font-bold  uppercase  font-bebasNeue">URBAN</div>
        <div className="text-4xl cursor-pointer hover:text-gray-600  font-bold  uppercase  font-kablammo">Emility</div>
        <div className="text-4xl cursor-pointer hover:text-gray-600  font-bold  uppercase  font-dancingScript">revlon</div>
        <div className="text-4xl cursor-pointer hover:text-gray-600  font-bold  uppercase  font-anton">NYX</div>
        </Fade>
        
      </div>
        <ParrisWeek></ParrisWeek>
     </div>
    );
  };
  
  export default BrandList;
  