import { useState } from 'react';
import '../css/CSS.css';  
import { FaRegHeart } from 'react-icons/fa';
import { IoBagOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="relative bg-black text-white shadow ">
            <div className="container px-6 py-3 mx-auto">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
                    <div className="flex flex-row items-center justify-between">
                        <div className="hidden mx-10 lg:block">
                            <div className="relative">
                                <input type="text" className="w-full py-2 pl-10 pr-4 text-gray-700 bg-black border-b-2 border-white focus:outline-none bold-placeholder" placeholder="Search" />
                                <span className="absolute inset-y-0 right-0 flex items-center pl-3">
                                    <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                                        <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <div className="lg:mx-52">
                            <h1 className="lg:text-4xl text-lg font-bold">PURE BLISS</h1>
                        </div>

                        <div className="flex lg:hidden">
                            <div className='flex flex-row items-center mx-5'>
                                <a className="my-2 text-sm transition-colors duration-300 transform hover:text-blue-600 hover:underline md:mx-4 md:my-0" href="#">Bag</a>
                                <IoBagOutline />
                            </div>
                            <button onClick={() => setIsOpen(!isOpen)} type="button" className="focus:outline-none" aria-label="toggle menu">
                                {isOpen ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    <div className='hidden lg:block'>
                        <div className="flex flex-row">
                            <div className='lg:flex lg:flex-row lg:items-center'>
                                <a className="my-2 text-sm transition-colors duration-300 transform hover:text-blue-600 hover:underline md:mx-4 md:my-0" href="#">WishList</a>
                                <FaRegHeart />
                            </div>
                            <div className='flex flex-row items-center'>
                                <a className="my-2 text-sm transition-colors duration-300 transform hover:text-blue-600 hover:underline md:mx-4 md:my-0" href="#">Bag</a>
                                <IoBagOutline />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'} absolute inset-x-0 z-20 w-full px-6 py-2 transition-all duration-300 ease-in-out bg-white text-black lg:text-white top-16 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0`}>
                    <div className="py-3 lg:mt-20 flex flex-col lg:flex-row lg:justify-center items-start lg:items-center">
                       <Link to={'/'}> <a className="mx-4 text-xs uppercase font-bold hover:underline" href="#">Home</a>
                       </Link>
                        {/* Dropdown */}
                        <div className="relative group">
    <a className="mx-4 px-4 py-2  rounded text-xs leading-5 uppercase font-bold lg:text-white transition-colors duration-300 transform dark:text-gray-200 hover:underline md:my-0" href="#">
        Pages
    </a>
    <div className="absolute left-0 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 ease-in-out bg-white text-black p-3 mt-1 rounded shadow-lg z-10 group-hover:pointer-events-auto pointer-events-none">
        <div className="flex flex-col space-y-2">
           <Link to={'/aboutUs'}> <a href="#" className="px-4 py-2 text-sm font-medium hover:bg-gray-200 rounded transition-colors duration-200">About Us</a></Link>
            <a href="#" className="px-4 py-2 text-sm font-medium hover:bg-gray-200 rounded transition-colors duration-200">Our Collections</a>
            <a href="#" className="px-4 py-2 text-sm font-medium hover:bg-gray-200 rounded transition-colors duration-200">Contact Us</a>
            <a href="#" className="px-4 py-2 text-sm font-medium hover:bg-gray-200 rounded transition-colors duration-200">Brand List</a>
        </div>
    </div>
</div>
<div className="relative group">
    <a className="mx-4 px-4 py-2  rounded text-xs leading-5 uppercase font-bold lg:text-white transition-colors duration-300 transform dark:text-gray-200 hover:underline md:my-0" href="#">
        Store
    </a>
    <div className="absolute left-0 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 ease-in-out bg-white text-black p-3 mt-1 rounded shadow-lg z-10 group-hover:pointer-events-auto pointer-events-none">
        <div className="flex flex-col space-y-2">
            <a href="#" className="px-4 py-2 text-sm font-medium hover:bg-gray-200 rounded transition-colors duration-200">Complexion</a>
            <a href="#" className="px-4 py-2 text-sm font-medium hover:bg-gray-200 rounded transition-colors duration-200">Lipstick</a>
            <a href="#" className="px-4 py-2 text-sm font-medium hover:bg-gray-200 rounded transition-colors duration-200">Powder</a>
            <a href="#" className="px-4 py-2 text-sm font-medium hover:bg-gray-200 rounded transition-colors duration-200">Must have</a>
            <a href="#" className="px-4 py-2 text-sm font-medium hover:bg-gray-200 rounded transition-colors duration-200">Makeup</a>
        </div>
    </div>
</div>
<div className="relative group">
    <a className="mx-4 px-4 py-2  rounded text-xs leading-5 uppercase font-bold lg:text-white transition-colors duration-300 transform dark:text-gray-200 hover:underline md:my-0" href="#">
        Shop
    </a>
    <div className="absolute left-0 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 ease-in-out bg-white text-black p-3 mt-1 rounded shadow-lg z-10 group-hover:pointer-events-auto pointer-events-none">
        <div className="flex flex-col space-y-2">
            <a href="#" className="px-4 py-2 text-sm font-medium hover:bg-gray-200 rounded transition-colors duration-200">My Account</a>
            <a href="#" className="px-4 py-2 text-sm font-medium hover:bg-gray-200 rounded transition-colors duration-200">Cart</a>
            <a href="#" className="px-4 py-2 text-sm font-medium hover:bg-gray-200 rounded transition-colors duration-200">Checkout</a>
            <a href="#" className="px-4 py-2 text-sm font-medium hover:bg-gray-200 rounded transition-colors duration-200">Order Tracking</a>
        </div>
    </div>
</div>



                        
                        
                        <a className="mx-4 text-xs uppercase font-bold hover:underline" href="#">Blog</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
