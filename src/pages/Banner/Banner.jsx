
const Banner = () => {

    return (

        <div className="carousel w-full">

            <div id="slide1" className="carousel-item relative w-full">

                <img src="https://i.ibb.co/W0TKSC6/slider1.png" className="w-full" />
               
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
                    <div className="w-2/3 mx-auto text-center mt-16">
                        <h2 className="text-white text-6xl font-bold">Find Your Dream Home</h2>
                        <p className="text-white my-4">Search through our extensive listings to find the home that fits your lifestyle and budget. Residency Hub makes home hunting easy and enjoyable.</p>
                    </div>
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="bg-[#1a472a] hover:bg-[#2f7e4b] text-white px-2 rounded-full">❮</a>
                    <a href="#slide2" className="bg-[#1a472a] hover:bg-[#2f7e4b] text-white px-2 rounded-full">❯</a>
                </div>

            </div>

            <div id="slide2" className="carousel-item relative w-full">

                <img src="https://i.ibb.co/G7dYZ3X/slider2.png" className="w-full" />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
                    <div className="w-2/3 mx-auto text-center">
                        <h2 className="text-white text-6xl font-bold mt-16">Connect with Trusted Agents</h2>
                        <p className="text-white my-4">Work with experienced real estate professionals to navigate the market. Our trusted agents are here to guide you every step of the way.</p>
                    </div>
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

                    <a href="#slide1" className="bg-[#1a472a] hover:bg-[#2f7e4b] text-white px-2 rounded-full">❮</a>
                    <a href="#slide3" className="bg-[#1a472a] hover:bg-[#2f7e4b] text-white px-2 rounded-full">❯</a>
                </div>

            </div>

            <div id="slide3" className="carousel-item relative w-full">

                <img src="https://i.ibb.co/ZLpRc7k/slider3.png" className="w-full" />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
                    <div className="w-2/3 mx-auto text-center">
                        <h2 className="text-white text-6xl font-bold mt-16">Explore Top Neighborhoods</h2>
                        <p className="text-white my-4">Discover the best neighborhoods for your needs. Get detailed insights and recommendations to choose the perfect location for your new home.</p>
                    </div>
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="bg-[#1a472a] hover:bg-[#2f7e4b] text-white px-2 rounded-full">❮</a>
                    <a href="#slide4" className="bg-[#1a472a] hover:bg-[#2f7e4b] text-white px-2 rounded-full">❯</a>
                </div>

            </div>

        </div>
    );
};

export default Banner;