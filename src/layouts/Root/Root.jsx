import { Outlet } from "react-router-dom";
// import Header from "../../components/Header/Header";
import Footer from "../../components/Shared/Footer/Footer";

const Root = () => {

    return (

        <div>

            {/* <Header></Header> */}

            <div className="max-w-6xl mx-auto font-poppins">
                <Outlet></Outlet>
            </div>

            <Footer></Footer>

        </div>
    );
};

export default Root;