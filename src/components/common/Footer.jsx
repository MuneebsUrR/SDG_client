import Link from "next/link";
import { Linkedin, Facebook, Instagram, Twitter } from "lucide-react";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import Circles from "./Circles";

const Footer = () => {
  return (
    <div className="relative bg-red-400 dark:bg-slate-600 py-16 pb-6 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4 px-4 mb-10">
            <div className="flex items-center ">
              <Avatar src="./NU-logo.png" name="logo" />
              <h2 className="text-2xl font-bold ml-2">FAST NUCES</h2>
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
            <h3 className="font-bold mb-4 text-xl">Contact Us</h3>
            <ul className="flex flex-col space-y-4 text-md">
              <li>
                <Link href="#" className="hover:underline ">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Program Trade
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Acquisions
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 px-4 mb-8 relative z-10">
            <h3 className="font-bold mb-4 text-xl">Help</h3>
            <ul className="flex flex-col space-y-4 text-md">
              <li>
                <Link href="#" className="hover:underline">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Care & Use
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Return
                </Link>
              </li>
            </ul>
          </div>

          <div className="relative w-full md:w-1/4 px-4 mb-8">
            <h3 className="font-bold mb-4 text-xl">Join Our Family</h3>
            <p className="text-lg">
              Lorem ipsum is a placeholder text commonly used in the graphic,
              print, placeholder text
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
          All Right Reserved 2024 - FAST NUCES
        </div>
      </div>
      <div className="absolute top-1/2 -left-20 -z-3">
        <Circles options={[1, 0, 1]} />
      </div>

      <div className="absolute -bottom-5 left-1/2 -z-3">
        <Circles options={[1, 1, 1]} />
      </div>
    </div>
  );
};

export default Footer;
