import React from "react";
import twitter from "../assets/images/icon-twitter.svg";
import facebook from "../assets/images/icon-facebook.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import instagram from "../assets/images/icon-instagram.svg";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-10 bg-verydarkviolet py-16 xl:flex-row xl:items-start xl:justify-between xl:px-36 2xl:px-36">
      <h1 className="text-3xl font-bold text-white">Shortly</h1>
      <div className="flex flex-col items-center gap-12 xl:flex-row xl:items-start xl:gap-20 2xl:gap-28">
        <div className="text-center xl:text-left">
          <h4 className="text-lg font-semibold text-white">Features</h4>
          <ul className="mt-3 flex flex-col gap-2 text-grayishviolet">
            <li>
              <button className="font-medium transition-colors hover:text-white">
                Link Shortening
              </button>
            </li>
            <li>
              <button className="font-medium transition-colors hover:text-white">
                Branded Links
              </button>
            </li>
            <li>
              <button className="font-medium transition-colors hover:text-white">
                Analytics
              </button>
            </li>
          </ul>
        </div>
        <div className="text-center xl:text-left">
          <h4 className="text-lg font-semibold text-white">Resources</h4>
          <ul className="mt-3 flex flex-col gap-2 text-grayishviolet">
            <li>
              <button className="font-medium transition-colors hover:text-white">
                Blog
              </button>
            </li>
            <li>
              <button className="font-medium transition-colors hover:text-white">
                Developers
              </button>
            </li>
            <li>
              <button className="font-medium transition-colors hover:text-white">
                Support
              </button>
            </li>
          </ul>
        </div>
        <div className="text-center xl:text-left">
          <h4 className="text-lg font-semibold text-white">Company</h4>
          <ul className="mt-3 flex flex-col gap-2 text-grayishviolet">
            <li>
              <button className="font-medium transition-colors hover:text-white">
                About
              </button>
            </li>
            <li>
              <button className="font-medium transition-colors hover:text-white">
                Our Team
              </button>
            </li>
            <li>
              <button className="font-medium transition-colors hover:text-white">
                Careers
              </button>
            </li>
            <li>
              <button className="font-medium transition-colors hover:text-white">
                Contact
              </button>
            </li>
          </ul>
        </div>

        <div className="flex gap-3">
          <button className="rounded-md border-2 border-solid border-transparent p-2 transition-all hover:border-grayishviolet">
            <img src={facebook} alt="facebook" />
          </button>
          <button className="rounded-md border-2 border-solid border-transparent p-2 transition-all hover:border-grayishviolet">
            <img src={twitter} alt="twitter" />
          </button>
          <button className="rounded-md border-2 border-solid border-transparent p-2 transition-all hover:border-grayishviolet">
            <img src={pinterest} alt="pinterest" />
          </button>
          <button className="rounded-md border-2 border-solid border-transparent p-2 transition-all hover:border-grayishviolet">
            <img src={instagram} alt="instagram" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
