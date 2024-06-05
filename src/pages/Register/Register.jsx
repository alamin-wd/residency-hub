import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";

const Register = () => {

    const { createUser } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {

        const { email, password } = data;

        createUser(email, password)

            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
            })
    };

    return (

        <div className="max-w-full mx-2 bg-[#52bd78]">

            <div className="hero px-4 md:px-0 py-5 md:py-10">

                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h3 className="text-[#403F3F] text-3xl font-semibold mx-auto pt-6">Register Your Account</h3>

                    <form onSubmit={handleSubmit(onSubmit)}
                        className="card-body">

                        <div className="form-control">

                            <label className="label">
                                <span className="label-text text-[#403F3F] font-medium">Your Name</span>
                            </label>

                            <input type="text" name="name" placeholder="Your Name" className="input input-bordered"
                                {...register("fullName", { required: true })} />
                            {errors.fullName && <span className="text-red-600 mt-1">This field is required</span>}

                        </div>

                        <div className="form-control">

                            <label className="label">
                                <span className="label-text text-[#403F3F] font-medium">Photo URL</span>
                            </label>

                            <input type="link" name="photo" placeholder="Photo URL" className="input input-bordered"
                                {...register("photo", { required: true })} />
                            {errors.photo && <span className="text-red-600 mt-1">This field is required</span>}

                        </div>

                        <div className="form-control">

                            <label className="label">
                                <span className="label-text text-[#403F3F] font-medium">Email Address</span>
                            </label>

                            <input type="email" name="email" placeholder="Email" className="input input-bordered"
                                {...register("email", { required: true })} />
                            {errors.email && <span className="text-red-600 mt-1">This field is required</span>}

                        </div>

                        <div className="form-control">

                            <label className="label">
                                <span className="label-text text-[#403F3F] font-medium">Password</span>
                            </label>

                            <input type="password" name="password" placeholder="Password" className="input input-bordered"
                                {...register("password", { required: true })} />
                            {errors.password && <span className="text-red-600 mt-1">This field is required</span>}

                        </div>

                        <div className="form-control mt-4">
                            <button className="bg-[#1a472a] hover:bg-[#2f7e4b] text-white text-lg font-medium py-2 rounded-lg">Register</button>

                            <p className="mt-2 text-[#706F6F] ">Already Have an Account?
                                <Link className="ms-2 text-[#1a472a] font-medium hover:text-[#2f7e4b] hover:underline" to={"/login"}>Login Here</Link>
                            </p>
                        </div>

                    </form>

                </div>

            </div>

        </div>
    );
};

export default Register;