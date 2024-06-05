import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {

    return (

        <footer>
            <div className="grid grid-cols-1 md:grid-cols-5 justify-between gap-6 mt-10 px-16 py-10 bg-base-200 text-base-content">

                <aside className="md:col-span-2 pr-12">
                    <Link to={"/"}>
                        <button className="w-48 md:w-auto text-2xl md:text-4xl  font-bold">Residency <span className="text-[#2f7e4b]">Hub</span></button>
                    </Link>
                    <p className="my-4">Work with experienced real estate professionals to navigate the market.</p>

                </aside>

                <nav className="flex flex-col">
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Marketing & SEO</a>
                    <a className="link link-hover">Startup</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>

                <nav className="flex flex-col ">
                    <h6 className="footer-title">Useful Links</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Agents</a>
                    <a className="link link-hover">Properties</a>
                </nav>

                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="flex items-center gap-4 mt-4">
                    <a href="https://www.facebook.com/"><FaFacebookF /></a>
                    <a href="https://x.com/"><FaTwitter /></a>
                    <a href="https://www.instagram.com/"><FaInstagram /></a>
                    </div>
                </nav>


            </div>

            <div className="footer footer-center p-4 bg-base-300 text-base-content">
                <aside>
                    <p>Copyright © 2024 - All right reserved by Residency Hub</p>
                </aside>
            </div>

        </footer>

    );
};

export default Footer;