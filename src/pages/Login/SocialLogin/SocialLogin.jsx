import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";

const SocialLogin = () => {

    const {googleLogin} = useContext(AuthContext);

    return (

        <div className="space-y-3">

            <button onClick={()=>googleLogin()}
            className="btn btn-outline w-full hover:bg-[#4267B2] text-[#4267B2]">
                <FaGoogle />
                Continue With Google
            </button>

            <button className="btn btn-outline w-full">
                <FaGithub />
                Continue With Github
            </button>

        </div>
    );
};

export default SocialLogin;