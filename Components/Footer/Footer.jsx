import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaGithub, FaHome, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";


const Footer = () => {
    return (
        <div className='bg-white'>
            <footer className="text-center lg:text-left bg-base-100 text-primary ">
                <div className="py-10 text-center md:text-left max-w-[1200px] mx-auto">
                    <div className="grid  grid-cols-12 gap-8">
                        <div className='col-span-4'>
                            <div className='mb-3'>
                                <Link className='flex items-center' href='/'>
                                    <div className="md:ml-0">
                                        <h1 className=" md:text-2xl sm:text-xl text-lg font-bold text-primary ">
                                            Academic Portal
                                        </h1>
                                    </div>
                                </Link>
                                <p className=' mt-3'>Academic portal is a teacher student portal for educational institution. We can see user profile, enrolled course & offered course.</p>
                            </div>
                            <div className=' flex mt-5'>
                                <div className='relative  w-[67%]'>
                                    <input name='email' type="email" id="floating_outlined3" className="block px-2.5 pb-2.5 pt-3 w-full text-sm text-gray-900 bg-transparent  border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required />
                                    <label htmlFor="floating_outlined3" className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Email Address</label>
                                </div>
                                <div className='w-[30%]'>
                                    <button className='px-2.5 py-2.5  text-white bg-accent hover:bg-secondary capitalize w-full font-semibold'>Subscribe</button>
                                </div>
                            </div>
                        </div>

                        <div className='col-span-2'>
                            <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                                Get in Touch
                            </h6>
                            <p className="mb-4">
                                <Link href='/category/apple-laptops'>Student Portal</Link>
                            </p>
                            <p className="mb-4">
                                <Link href='/category/hp-laptops'>Library</Link>
                            </p>
                            <p className="mb-4">
                                <Link href='/category/dell-laptops'>Admission</Link>
                            </p>
                            <p>
                                <Link href='/category/asus-laptops'>Contact Us</Link>
                            </p>
                        </div>

                        <div className='col-span-2'>
                            <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                                Useful links
                            </h6>
                            <p className="mb-4">
                                <Link href='/'>Home</Link>
                            </p>
                            <p className="mb-4">
                                <Link href='/about'>Dashboard</Link>
                            </p>
                            <p className="mb-4">
                                <Link href='/blog'>Blog</Link>
                            </p>
                            <p>
                                <Link href='/error-page'>About Us</Link>
                            </p>
                        </div>

                        <div className='col-span-4'>
                            <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                                Contact
                            </h6>
                            <p className="flex items-center justify-center md:justify-start mb-4">
                                <FaHome className='mr-2'></FaHome>
                                Mohammadpur, Dhaka-1207
                            </p>
                            <p className="flex items-center justify-center md:justify-start mb-4">
                                <IoMdMail className='mr-2'></IoMdMail>
                                info@academic-portal.com
                            </p>
                            <p className="flex items-center justify-center md:justify-start mb-3">
                                <IoCall className='mr-2'></IoCall>
                                +880-1313-191479
                            </p>
                            <div className="flex md:justify-start justify-center items-center md:order-2 order1">
                                <p className='font-bold'>Social:</p>
                                <ul className="flex ">
                                    <a
                                        className="w-[30px] h-[30px] mx-[5px] bg-white hover:bg-gray-200 text-primary   rounded-full pt-1.5 flex justify-center"
                                        href="https://www.facebook.com/obaedulislam.mohammad/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaFacebookF className="text-lg  "></FaFacebookF>
                                    </a>
                                    <a
                                        className="w-[30px] h-[30px] mx-[5px] bg-white hover:bg-gray-200  text-primary   rounded-full pt-1.5 flex justify-center"
                                        href="https://www.twitter.com/obaedulislam"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaTwitter className="text-lg  "></FaTwitter>
                                    </a>
                                    <a
                                        className="w-[30px] h-[30px] mx-[5px] bg-white hover:bg-gray-200 text-primary   rounded-full pt-1.5 flex justify-center"
                                        href="https://github.com/obaedulislam"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaGithub className="text-lg "></FaGithub>
                                    </a>
                                    <a
                                        className="w-[30px] h-[30px] mx-[5px] bg-white hover:bg-gray-200 text-primary   rounded-full pt-1.5 flex justify-center"
                                        href="https://www.linkedin.com/in/obaedulislam/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaLinkedinIn className="text-lg  "></FaLinkedinIn>
                                    </a>
                                    <a
                                        className="w-[30px] h-[30px] mx-[5px] bg-white hover:bg-gray-200 text-primary   rounded-full pt-1.5 flex justify-center"
                                        href="https://www.instagram.com/obaedul_islam/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaInstagram className="text-lg  "></FaInstagram>
                                    </a>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer Top End */}

                <div className="text-center p-6 bg-base-200">
                    <p>Copyright © 2022
                        <span className="text-primary font-semibold"> Academic Portal.</span> All Rights Reserved by <a className='font-semibold' href="http://obaedulislam.com/" target="_blank">Obaedul Islam</a>.
                    </p>
                </div>
                {/* Footer Bottom End */}
            </footer>
        </div>
    );
};

export default Footer;