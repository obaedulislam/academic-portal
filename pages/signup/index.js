import Link from "next/link";
import { useState } from "react";
import { BiLogIn } from "react-icons/bi";
import {
  BsEye,
  BsEyeSlashFill,
  BsFillEyeSlashFill,
  BsGithub,
} from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  return (
    <div className="h-full bg-base-200 w-full py-16 px-4">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-5 md:p-10">
          <div>
            <p
              tabIndex={0}
              className="text-2xl text-tighter text-center font-extrabold leading-6 text-primary tracking-tighter	"
            >
              Signup Your Account
            </p>

            <div className="sm:mt-5 mt-3">
              <button
                className="btn btn-outline border-gray-300 duration-300 hover:bg-gray-200 hover:text-secondary hover:border-gray-300 w-full mt-3 flex items-center text-md text-secondary font-semibold capitalize "
                type="submit"
              >
                <FcGoogle className="md:text-2xl text-xl  "></FcGoogle>
                <span className="ml-1 ">Continue With Google</span>
              </button>
              <button
                className="btn btn-outline border-gray-300 duration-300 hover:bg-gray-200 hover:text-secondary hover:border-gray-300 w-full mt-3 flex items-center text-md text-secondary font-semibold capitalize "
                type="submit"
              >
                <BsGithub className="md:text-2xl text-xl text-primary "></BsGithub>
                <span className="ml-1">Continue With GitHub</span>
              </button>
              <div className="divider sm:text-xl text-md font-bold text-secondary font-special">
                Or
              </div>
            </div>

            <form>
              <div className="relative">
                <input
                  name="email"
                  type="email"
                  id="floating_outlined3"
                  className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_outlined3"
                  className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  Email Address
                </label>
              </div>
              <div className="w-full pt-4">
                <div className="relative flex items-center justify-center">
                  <div className="w-full">
                    <input
                      type={passwordShown ? "text" : "password"}
                      id="floating_outlined2"
                      className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_outlined2"
                      className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                    >
                      Password
                    </label>
                  </div>
                  <div
                    onClick={() => setPasswordShown(!passwordShown)}
                    className="absolute right-0 mr-3 cursor-pointer"
                  >
                    {passwordShown ? (
                      <BsEye className="text-primary" />
                    ) : (
                      <BsFillEyeSlashFill className="text-primary" />
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-4 ">
                <button
                  type="submit"
                  className="flex items-center justify-center text-lg rounded-md font-semibold leading-none text-white focus:outline-none bg-gradient-to-tl from-primary to-accent  py-3 w-full"
                >
                  <BiLogIn className="text-2xl mr-2 "></BiLogIn>
                  Login Now
                </button>
              </div>
            </form>

            <div>
              <p className="text-primary text-center mt-3 sm:text-md text-sm">
                New to Academic Portal?
                <Link href="/signup" className="text-accent font-bold">
                  Create new account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
