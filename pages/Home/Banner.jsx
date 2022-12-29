import Link from "next/link";
import Image from "next/image";

const Banner = () => {
    return (
        <div>
            <div className="bg-primary">
                <div className="max-w-[1200px] items-center mx-auto grid md:grid-cols-2 gird-cols-1  border-[#333] py-16 ">
                    <div className="hero-left  text-white pr-12">
                        <h1 className="lg:text-4xl md:text-3xl text-2xl font-semibold leading-4">
                            <span>Welcome to</span>
                            <span className="text-accent border-b-4 border-accent ml-3 	">
                                Creative University
                            </span>
                        </h1>
                        <p className=" mt-6 ">
                            Landmark to create future. Excellence in teaching, learning, and research Transform your life with endless opportunities Be inspired by the diverse community. Discover yourself for lifetime success.
                        </p>
                        <div className="mt-10">
                            <Link
                                href="/"
                                className="px-5 py-3  text-white focus:outline-none bg-gradient-to-tl from-blue-900 to-accent capitalize rounded font-semibold"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                    <div className="hero-right  ">
                        <Image
                            src="/hero.png"
                            width={1080}
                            height={520}
                            style={{ height: "100%", width: "100%" }}
                        ></Image>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;