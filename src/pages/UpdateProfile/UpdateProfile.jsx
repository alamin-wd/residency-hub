
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {

    const { user } = useContext(AuthContext);

    return (

        <div className="w-1/2 mx-auto my-6">

            <Helmet>
                <title>Profile Update | Residency Hub</title> 
            </Helmet>

            <img className="w-[200px] mx-auto" src={user.photoURL} alt="" />

            <ul className="w-[300px] mx-auto mt-4">
                <li>
                    {
                        user?.displayName ?
                            (<p className="text-xl text-[#05264e] font-bold">Name: <span className="text-lg text-[#05264e] font-semibold">{user.displayName}</span></p>
                            )
                            :
                            (<p className="text-xl text-[#05264e] font-bold">Name: <span className="text-lg text-[#05264e] font-bold">Unknown</span></p>)
                    }
                </li>

                <li className="">
                    {
                        user?.email ?
                            (<p className="text-xl text-[#05264e] font-bold">Email: <span className="text-lg text-[#05264e] font-semibold">{user.email}</span></p>
                            )
                            :
                            (<p className="text-xl text-[#05264e] font-bold">Email: <span className="text-lg text-[#05264e] font-bold">No Email Address Found</span></p>)
                    }
                </li>
            </ul>
        </div>

    );
};

export default UpdateProfile;