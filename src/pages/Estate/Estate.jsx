import { MdOutlineBedroomParent } from "react-icons/md";
import { FaKitchenSet } from "react-icons/fa6";
import { PiGarageBold } from "react-icons/pi";
import { MdOutlineLocationOn } from "react-icons/md";
import { SiPluscodes } from "react-icons/si";
import PropTypes from 'prop-types';

const Estate = ({ estate }) => {

    const { image, estate_title, segment_name, price, status, area, location, facilities } = estate;

    return (

        <div className="shadow-xl rounded-xl">

            <div className="indicator">
                <span className="indicator-item indicator-start indicator-top badge badge-success translate-x-5 translate-y-5 text-white p-3 font-medium">{estate.status}</span>
                <img className="w-[366px] rounded-t-xl" alt="" src={estate.image} />
            </div>

            {/* Card Content */}
            <div className="px-4 py-2">

                <div className="flex items-center justify-between">
                    <h4 className="text-lg text-[#05264e] font-semibold">
                        {estate.segment_name} </h4>

                    <h4 className="text-2xl text-[#2f7e4b] font-semibold">{estate.price}</h4>
                </div>

                <h3 className="text-xl text-[#05264e] font-bold my-3">{estate.estate_title}</h3>

                <hr />

                <div className="flex items-center justify-between text-[#5f7384] mt-4">

                    <span className="flex items-center gap-2">
                        <MdOutlineBedroomParent />
                        <p className="text-sm font-medium">{estate.facilities[0]}</p>
                    </span>

                    <span className="flex items-center gap-2">
                        <PiGarageBold />
                        <p className="text-sm font-medium">{estate.facilities[1]}</p>
                    </span>

                    <span className="flex items-center gap-2">
                        <FaKitchenSet />
                        <p className="text-sm font-medium">{estate.facilities[2]}</p>
                    </span>

                </div>

                <div className="flex items-center justify-between text-[#5f7384] mt-2 pb-3">
                    <span className="flex items-center gap-2">
                        <MdOutlineLocationOn />
                        <p className="text-sm font-medium">{estate.location}</p>
                    </span>

                    <span className="flex items-center gap-2">
                        <SiPluscodes />
                        <p className="text-sm font-medium">{estate.area}</p>
                    </span>
                </div>

                <hr />

            </div>

            <div className="mt-2 mb-4 w-1/2 mx-auto">
                <button className="w-full bg-[#2f7e4b] hover:bg-[#1a472a] text-white py-2 rounded-lg font-medium">View Property</button>
            </div>

        </div>
    );
};

Estate.propTypes = {
    estate: PropTypes.node,
}

export default Estate;