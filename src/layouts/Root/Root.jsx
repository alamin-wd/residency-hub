import { Outlet } from "react-router-dom";
// import Header from "../../components/Header/Header";
import Footer from "../../components/Shared/Footer/Footer";
import Navbar from "../../components/Shared/Navbar/Navbar";

const Root = () => {

    return (

        <div>

            <div className="max-w-6xl mx-auto font-poppins">
                <div>
                    <Navbar></Navbar>
                </div>
                <Outlet></Outlet>
            </div>

            <Footer></Footer>

        </div>
    );
};

export default Root;