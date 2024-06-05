import { FaKitchenSet } from "react-icons/fa6";
import { MdOutlineBedroomParent, MdOutlineLocationOn } from "react-icons/md";
import { PiGarageBold } from "react-icons/pi";
import { SiPluscodes } from "react-icons/si";
import { useLoaderData, useParams } from "react-router-dom";

const EstateDetails = () => {

    const estates = useLoaderData();
    const { id } = useParams();

    const idInt = parseInt(id);

    const estate = estates.find(estate => estate.id === idInt);

    const { image, estate_title, description, price, area, location, facilities } = estate;

    return (

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ms-2">

            <div className="col-span-2">
                <img className="w-full" src={image} alt="" />

                <div className="px-4 py-2">

                    <h3 className="text-xl md:text-3xl text-[#05264e] font-bold my-3">{estate_title}</h3>

                    <span className="flex items-center gap-1 text-[#5f7384]">
                        <MdOutlineLocationOn />
                        <p>{location}</p>
                    </span>

                    <div className="border mt-3 px-4 py-2 rounded-lg">
                        <h4 className="text-xl text-[#05264e] font-bold">
                            About Property:
                        </h4>
                        <p className="text-[#5f7384] mt-2">{description}</p>
                    </div>

                    <div className="flex items-start justify-between mt-4 px-4">
                        <div className=" text-[#5f7384]">

                            <h3 className="text-xl text-[#05264e] font-bold my-3">Facilities You Get:</h3>

                            <ul>
                                <span className="flex items-center gap-2">
                                    <MdOutlineBedroomParent />
                                    <p className=" font-medium">{facilities[0]}</p>
                                </span>

                                <span className="flex items-center gap-2">
                                    <PiGarageBold />
                                    <p className=" font-medium">{facilities[1]}</p>
                                </span>

                                <span className="flex items-center gap-2">
                                    <FaKitchenSet />
                                    <p className=" font-medium">{facilities[2]}</p>
                                </span>
                            </ul>

                        </div>

                        <div className="text-[#5f7384] pb-3">
                            <h3 className="text-xl text-[#05264e] font-bold my-3">Location:</h3>

                            <span className="flex items-center gap-2">
                                <MdOutlineLocationOn />
                                <p className=" font-medium">{location}</p>
                            </span>

                        </div>

                        <div>
                            <h3 className="text-xl text-[#05264e] font-bold my-3">Area:</h3>
                            <span className="flex items-center gap-2">
                                <SiPluscodes />
                                <p className=" font-medium">{area}</p>
                            </span>
                        </div>
                    </div>

                    <div className="w-80 mx-auto flex items-center mt-3">
                        <h3 className="text-2xl text-[#05264e] font-bold">Property Price:</h3>
                        <span className="text-3xl text-[#2f7e4b] font-bold ms-2">{price}</span>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default EstateDetails;