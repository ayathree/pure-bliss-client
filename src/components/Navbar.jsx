import { useState } from 'react';
import '../css/CSS.css';  
import { FaChevronRight, FaRegHeart } from 'react-icons/fa';
import { IoBagOutline } from 'react-icons/io5';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="relative lg:bg-black bg-white shadow ">
            <div className="container px-6 py-3 mx-auto">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
                    <div className="flex flex-row items-center justify-between">
                        
                       
                        <div className="hidden mx-10 lg:block">
                                <div className="relative">
                                    
                                    <input type="text" className="w-full py-2 pl-10 pr-4 text-gray-700 bg-black  border-b-2 border-white  dark:text-gray-300 dark:border-gray-600 focus:outline-none bold-placeholder " placeholder="Search" />
                                    <span className="absolute inset-y-0 right-0 flex items-center pl-3">
                                    <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                                            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                        
                                    </span>

                                    
                                </div>
                            </div>

                            
                        

                          <div className='lg:mx-52 '>
                          <h1 className='lg:text-4xl text-lg lg:text-white font-bold '>PURE BLISS</h1>
                          </div>
                       
                        <div className="flex   lg:hidden ">
                        <div className='flex flex-row items-center mx-5' >
                            <a className="my-2 text-sm leading-5 lg:text-white transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:mx-4 md:my-0" href="#">Bag </a>
                            <IoBagOutline className='lg:text-white ' />
                            </div>
                            <button onClick={() => setIsOpen(!isOpen)} type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
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
                        <div className="flex flex-row ">
                            <div className='lg:flex lg:flex-row lg:items-center'>
                            <a className="my-2 text-sm leading-5 md:text-white  transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:mx-4 md:my-0" href="#">WishList </a>
                            <FaRegHeart className='md:text-white'/>
                            </div>
                            <div className='flex flex-row items-center' >
                            <a className="my-2 text-sm leading-5 md:text-white transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:mx-4 md:my-0" href="#">Bag </a>
                            <IoBagOutline className='md:text-white ' />
                            </div>
                            
                        </div>

                       
                    </div>
                </div>
                <div className={`${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'} absolute inset-x-0 z-20 w-full px-6 py-2 transition-all duration-300 ease-in-out bg-white top-16 dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 `}>
                <div className="py-3 lg:mt-20 -mx-3 flex flex-col lg:flex-row lg:justify-center justify-start lg:items-center overflow-y-auto whitespace-nowrap scroll-hidden">
                   <div className='flex mb-3 flex-row justify-between items-center'>
                   <a className="mx-4 text-xs leading-5 uppercase font-bold lg:text-white transition-colors duration-300 transform dark:text-gray-200  hover:underline md:my-0" href="#">Home</a>
                    <FaChevronRight className='md:block' />

                   </div>
                   <div className='flex mb-3 flex-row justify-between items-center'>
                   <a className="mx-4 text-xs leading-5 uppercase font-bold lg:text-white transition-colors duration-300 transform dark:text-gray-200  hover:underline md:my-0" href="#">Pages</a>
                    <FaChevronRight className='md:block' />

                   </div>
                   <div className='flex mb-3 flex-row justify-between items-center'>
                   <a className="mx-4 text-xs leading-5 uppercase font-bold lg:text-white transition-colors duration-300 transform dark:text-gray-200  hover:underline md:my-0" href="#">Store</a>
                    <FaChevronRight className='md:block' />

                   </div>
                   <div className='flex mb-3 flex-row justify-between items-center'>
                   <a className="mx-4 text-xs leading-5 uppercase font-bold lg:text-white transition-colors duration-300 transform dark:text-gray-200  hover:underline md:my-0" href="#">Shop</a>
                    <FaChevronRight className='md:block' />

                   </div>
                   <div className='flex mb-3 flex-row justify-between items-center'>
                   <a className="mx-4 text-xs leading-5 uppercase font-bold lg:text-white transition-colors duration-300 transform dark:text-gray-200  hover:underline md:my-0" href="#">Blog</a>
                    <FaChevronRight className='md:block' />

                   </div>

                    
                </div>

                </div>

                
            </div>
        </nav>
    );
}

export default Navbar;
