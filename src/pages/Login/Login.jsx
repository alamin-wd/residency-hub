import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import SocialLogin from "./SocialLogin/SocialLogin";
import { toast } from "react-toastify";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";

const Login = () => {

    const { logIn } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [showPassword, setShowPassword] = useState(false);
    // const location = useLocation();
    const navigate = useNavigate();

    const onSubmit = (data) => {

        const { email, password } = data;

        logIn(email, password)
            .then((result) => {
                console.log(result.user);
                toast("Your Login is successful!");
                navigate('/');
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (

        <div className="max-w-full bg-[#52bd78] mx-2">

            <Helmet>
                <title>Login | Residency Hub</title>
            </Helmet>

            <div className="hero px-4 md:px-0 py-5 md:py-10">

                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-white">
                    <h3 className="text-[#403F3F] text-3xl font-semibold mx-auto pt-6">Login Your Account</h3>

                    <form onSubmit={handleSubmit(onSubmit)}
                        className="card-body">

                        <div className="form-control">

                            <label className="label">
                                <span className="label-text text-[#403F3F] font-medium">Email Address</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered"
                                {...register("email", { required: true })} />
                            {errors.email && <span className="text-red-600 mt-1">This field is required</span>}

                        </div>

                        <div className="form-control relative">

                            <label className="label">
                                <span className="label-text text-[#403F3F] font-medium">Password</span>
                            </label>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                                className="input input-bordered"
                                {...register("password", { required: true })} />
                            {errors.password && <span className="text-red-600 mt-1">This field is required</span>}

                            <button className="mt-1 absolute top-12 left-72"
                                onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <FaRegEyeSlash /> : <FaRegEye />
                                }
                            </button>

                        </div>

                        <div className="form-control mt-4 border">

                            <button className="bg-[#1a472a] hover:bg-[#2f7e4b] text-white text-lg font-medium py-3 rounded-lg">Login</button>

                        </div>

                        <span className="text-center">
                            <h2 className="text-xl italic font-semibold">OR</h2>
                        </span>
                    </form>

                    {/* Social Logins */}

                    <div className="mx-8">

                        <span>
                            <SocialLogin></SocialLogin>
                        </span>

                        <p className="my-2 text-[#706F6F] ">Do not Have an Account?
                            <Link className="ms-2 text-[#1a472a] font-medium hover:text-[#2f7e4b] hover:underline" to={"/register"}>Register Now</Link>
                        </p>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Login;