
import { Linkedin, Facebook, Instagram, Twitter } from "lucide-react";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import Circles from "./Circles";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';

import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
const Footer = () => {
  return (

    <div className="relative dark:text-white dark:bg-slate-600 bg-footer py-16 pb-6 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4 px-4 mb-10">
            <div className="flex items-center ">
              <img width={80} src={logo} name="logo" />
              <h2 className="text-2xl font-bold ml-2">BSG FOR SDG</h2>
            </div>
            <p className="text-lg mb-4 py-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link href="#" className="relative z-10">
              <Button size="lg">Contact Us</Button>
            </Link>
          </div>


          <div className="w-full md:w-1/4 px-4 mb-8 relative z-10">
            <h3 className="font-bold mb-4 text-xl">Explore</h3>
            <ul className="flex flex-col space-y-4 text-md">
              <li>
                <Link to="/" className="hover:underline ">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/sdg/1" className="hover:underline">
                  17 SDGs
                </Link>
              </li>
              <li>
                <Link to="/quotes" className="hover:underline">
                  SDG Quotes
                </Link>
              </li>
              <li>
                <Link to="/sdg-campaigns" className="hover:underline">
                  SDG Campaigns
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 px-4 mb-8 relative z-10">
            <h3 className="font-bold mb-4 text-xl">Help</h3>
            <ul className="flex flex-col space-y-4 text-md">
              <li>
                <Link href="#" className="hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  FeedBack
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Term of Use
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="relative w-full md:w-1/4 px-4 mb-8">
            <h3 className="font-bold mb-4 text-xl">BSG Headquarters</h3>
            <p className="text-lg">
              <LocationOnIcon /> J - 21, Hauz Khas Enclave, New Delhi-110016, Delhi, India
            </p>
            <p className="text-lg mt-4">
              <EmailIcon /> contact@gmail.com
            </p>
            <p className="text-lg mt-4">
              <LocalPhoneIcon /> +91-1140012800
            </p>
            <div className="md:absolute bottom-0 left-4 flex space-x-2 py-0 pt-4 lg:py-8 mb-4 md:mb-0 relative z-10">
              <Link
                href="#"
                aria-label="Facebook"
                className="hover:text-gray-300"
              >
                <Button isIconOnly color="primary" variant="ghost">
                  <Facebook size={20} />
                </Button>
              </Link>
              <Link
                href="#"
                aria-label="Instagram"
                className="hover:text-gray-300"
              >
                <Button isIconOnly color="primary" variant="ghost">
                  <Instagram size={20} />
                </Button>
              </Link>
              <Link
                href="#"
                aria-label="Twitter"
                className="hover:text-gray-300"
              >
                <Button isIconOnly color="primary" variant="ghost">
                  <Twitter size={20} />
                </Button>
              </Link>
              <Link
                href="#"
                aria-label="LinkedIn"
                className="hover:text-gray-300"
              >
                <Button isIconOnly color="primary" variant="ghost">
                  <Linkedin size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row text-center justify-between items-center lg:mt-4 pt-8 border-t"></div>
        <div className="text-center text-md ">
          All Right Reserved 2024 - Muneeb Ur Rehman
        </div>
      </div>
      <div className="absolute top-1/2 right-36 -z-3">
        <Circles options={[1, 1, 0]} />
      </div>

    </div>
  );
};

export default Footer;
