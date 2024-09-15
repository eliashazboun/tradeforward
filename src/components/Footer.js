import React from "react";
import logo from "../images/tf-logo.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b py-30">
          <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200 lg:ml-11">
            <div className="col-span-12 lg:col-span-6">
              <div className="box-border border-b-4 border-blue-900 p-8 bg-gray-200 text-gray-600 text-center rounded-lg xl:w-80 mx-auto">
                <img src={logo} alt="" />
                <div className="text-md font-medium text-gray-600">
                  <h5>17319 Inglewood Ln, </h5>
                  <p>Huntersville, NC 28078</p>
                </div>
              </div>
            </div>

            <div className="col-span-12 text-center mx-auto lg:col-span-3 font-bold uppercase text-blue-900">
              <div className="text-xl mb-6">Social Media Links.</div>

              <div className="text-md font-medium mb-6">
                Follow us on social media.
              </div>
              <div className="mx-auto text-center mt-2">
                <ul className="flex justify-center mb-4 md:mb-0">
                  <li>
                    <a
                      href="https://www.linkedin.com/company/trade-forward-llc/"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full flex justify-center bg-white h-8 text-blue-900  w-8  mx-1 text-center pt-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current font-black hover:animate-pulse"
                      >
                        <circle cx="4.983" cy="5.009" r="2.188"></circle>
                        <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
              <div className="text-sm text-white font-bold py-1">
                Copyright &copy; {new Date().getFullYear()}
                {"  "}
                Tradeforward LLC . All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
