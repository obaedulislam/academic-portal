import { HiMenuAlt1 } from "react-icons/hi";
import { BiLogIn } from "react-icons/bi";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react"


const Header = () => {
    const { data: session } = useSession();

    const menuItems = (
        <>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/dashboard" className="flex items-center">
                    Dashboard
                </Link>
            </li>
            <li>
                <Link href="/dashboard" className="flex items-center">
                    Blog
                </Link>
            </li>
            <li>
                <Link href="/dashboard" className="flex items-center">
                    About Us
                </Link>
            </li>
            <li>
                {
                    session?.user ?
                        <>
                            <Link href="/" onClick={() => signOut()}>
                                <button
                                    className=" focus:outline-none bg-gradient-to-tl from-primary to-accent rounded  sm:px-3 px-2 md:mt-0 mt-2 py-1  text-white flex items-center"
                                >
                                    <BiLogIn className="text-xl "></BiLogIn>
                                    <span className="  ml-1">Log Out</span>
                                </button>
                            </Link>
                        </>

                        :
                        <Link href="/login">
                            <button
                                className=" focus:outline-none bg-gradient-to-tl from-primary to-accent rounded  sm:px-3 px-2 md:mt-0 mt-2 py-1  text-white flex items-center"
                            >
                                <BiLogIn className="text-xl "></BiLogIn>
                                <span className="  ml-1">Login</span>
                            </button>
                        </Link>
                }
            </li>
        </>
    );

    return (
        <div className="bg-white  border border-gray-200 ">
            <div className="max-w-[1200px] mx-auto p-0 ">
                <div className="navbar flex justify-between bg-base-100 p-0">
                    <div className="">
                        <div className="dropdown flex ">
                            <ul

                                className="menu-compact dropdown-content mt-8 p-2 shadow bg-base-100 rounded-box w-52 text-md font-bold font-specially uppercase"
                            >
                                {menuItems}
                            </ul>
                            <label className=" lg:hidden md:hidden">
                                <HiMenuAlt1 className="text-3xl bg-accent text-white font-bold p-1  rounded"></HiMenuAlt1>
                            </label>
                        </div>

                        {/* Logo Insert Here */}
                        <div className="md:ml-0 ml-5">
                            <Link href="/" className="  flex items-center">
                                <h1 className="   md:text-2xl sm:text-xl text-lg font-bold text-primary ">
                                    Creative University
                                </h1>
                            </Link>
                        </div>
                    </div>
                    <div className=" hidden lg:flex md:flex">
                        <ul className="lg-menu menu-horizontal flex items-center p-0 font-semibold   text-primary space-x-5">
                            {menuItems}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
