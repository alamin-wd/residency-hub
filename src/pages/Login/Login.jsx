import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {

    return (

        <div className="max-w-full bg-[#52bd78] mx-2">

            <div className="hero px-4 md:px-0 py-5 md:py-10">

                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-white">
                    <h3 className="text-[#403F3F] text-3xl font-semibold mx-auto pt-6">Login Your Account</h3>

                    <form
                        className="card-body">

                        <div className="form-control">

                            <label className="label">
                                <span className="label-text text-[#403F3F] font-medium">Email Address</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />

                        </div>

                        <div className="form-control">

                            <label className="label">
                                <span className="label-text text-[#403F3F] font-medium">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />

                        </div>

                        <div className="form-control mt-4">

                            <button className="bg-[#1a472a] hover:bg-[#2f7e4b] text-white text-lg font-medium py-3 rounded-lg">Login</button>

                            <span className="mx-auto my-2">
                                <h2 className="text-xl italic font-semibold">OR</h2>
                            </span>

                            <div className="space-y-3">

                                <button className="btn btn-outline w-full hover:bg-[#4267B2] text-[#4267B2]">
                                    <FaGoogle />
                                    Continue With Google
                                </button>

                                <button className="btn btn-outline w-full">
                                    <FaGithub />
                                    Continue With Github
                                </button>

                            </div>

                            <p className="mt-2 text-[#706F6F] ">Do not Have an Account?
                                <Link className="ms-2 text-[#1a472a] font-medium hover:text-[#2f7e4b] hover:underline" to={"/register"}>Register Now</Link>
                            </p>
                        </div>

                    </form>

                </div>

            </div>

        </div>
    );
};

export default Login;