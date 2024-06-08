import { Helmet } from "react-helmet-async";
import { FaKitchenSet } from "react-icons/fa6";
import { MdOutlineBedroomParent, MdOutlineLocationOn } from "react-icons/md";
import { PiGarageBold } from "react-icons/pi";
import { SiPluscodes } from "react-icons/si";
import { Link, useLoaderData } from "react-router-dom";

const Property = () => {

    const estates = useLoaderData();

    return (


        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8 mx-4">

            <Helmet>
                <title>Property | Residency Hub</title>
            </Helmet>

            {
                estates.map(property => <div
                    key={property.id}
                    className="shadow-xl rounded-xl">

                    <div className="indicator">
                        <span className="indicator-item indicator-start indicator-top badge badge-success translate-x-5 translate-y-5 text-white p-3 font-medium">{property.status}</span>
                        <img className="w-[310px] md:w-[358px] rounded-t-xl" alt="" src={property.image} />
                    </div>

                    {/* Card Content */}
                    <div className="px-4 py-2">

                        <div className="flex items-center justify-between">
                            <h4 className="text-lg text-[#05264e] font-semibold">
                                {property.segment_name} </h4>

                            <h4 className="text-2xl text-[#2f7e4b] font-semibold">{property.price}</h4>
                        </div>

                        <h3 className="text-xl text-[#05264e] font-bold my-3">{property.estate_title}</h3>

                        <hr />

                        <div className="flex items-center justify-between text-[#5f7384] mt-4">

                            <span className="flex items-center gap-2">
                                <MdOutlineBedroomParent />
                                <p className="text-sm font-medium">{property.facilities[0]}</p>
                            </span>

                            <span className="flex items-center gap-2">
                                <PiGarageBold />
                                <p className="text-sm font-medium">{property.facilities[1]}</p>
                            </span>

                            <span className="flex items-center gap-2">
                                <FaKitchenSet />
                                <p className="text-sm font-medium">{property.facilities[2]}</p>
                            </span>

                        </div>

                        <div className="flex items-center justify-between text-[#5f7384] mt-2 pb-3">
                            <span className="flex items-center gap-2">
                                <MdOutlineLocationOn />
                                <p className="text-sm font-medium">{property.location}</p>
                            </span>

                            <span className="flex items-center gap-2">
                                <SiPluscodes />
                                <p className="text-sm font-medium">{property.area}</p>
                            </span>
                        </div>

                        <hr />

                    </div>

                    <div className="mt-2 mb-4 w-1/2 mx-auto">
                        <Link to={`/estate/${property.id}`}>
                            <button className="w-full bg-[#2f7e4b] hover:bg-[#1a472a] text-white py-2 rounded-lg font-medium">View Property</button>
                        </Link>
                    </div>

                </div>)
            }
        </div>
    );
};

export default Property;