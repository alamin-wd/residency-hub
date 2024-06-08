import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Estate from "../Estate/Estate";
import { useState } from "react";
import { Helmet } from "react-helmet-async";


const Home = () => {

    const estates = useLoaderData();
    const [estatesLength, setEstatesLength] = useState(6);

    return (

        <div>
            <Helmet>
                <title>Residency Hub | Home </title>
            </Helmet>

            <Banner></Banner>

            <div className="mt-10 ">

                <div className="w-3/5 mx-auto text-center">
                    <h2 className="text-[#05264e] text-4xl font-bold">Featured Residential Estates</h2>
                    <p className="my-3 text-[#5f7384]">Explore our collection of featured residential estates, each offering unique charm and modern comforts. Find the estate that fits your lifestyle and aspirations.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8 mx-6">
                    {
                        estates.slice(0, estatesLength).map(estate => <Estate
                            key={estate.id}
                            estate={estate}
                        ></Estate>)
                    }
                </div>

                <div className="w-48 mx-auto mt-10">
                    <div className={estatesLength === estates.length && "hidden"}>

                        <Link to="property">
                            <button onClick={() => setEstatesLength(estates.length)}
                                className="w-full mx-auto bg-white hover:bg-[#1a472a] text-[#1a472a] hover:text-white py-2 rounded-lg font-medium border border-[#2f7e4b]">
                                View All Properties
                            </button>
                        </Link>


                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;

