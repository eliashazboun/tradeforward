import React from "react";
import { Link } from "react-router-dom";
import img3 from "../images/unnamed.jpg";

const Products = () => {
  return (
    <>
      <div className="my-4 py-4" id="portfolio">
        <h2 className="my-2 text-center text-3xl text-blue-900  font-bold">
          Cloud Analytics The Way You Imagined
        </h2>
        <div className="flex justify-center">
          <div className="w-24 border-b-4 border-blue-900 mb-8"></div>
        </div>

        <div className="px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2  ">
            <div className="m-auto">
              <div className={``}>
                <div className=" m-auto" data-aos="fade-right">
                  <h1 className="my-2 text-center text-3xl text-blue-900  font-bold">
                    Trade Analytics
                  </h1>
                  <p className="my-3 text-xl text-gray-600 font-semibold text-center">
                    Integrate data from GTM, WMS, and TMS platforms to provide a
                    holistic trade and logistics visibility solution
                  </p>
                </div>
              </div>
              <div>
                <div data-aos="fade-right">
                  <h1 className="my-2 text-center text-3xl text-blue-900  font-bold ">
                    Supply Chain Planning
                  </h1>
                  <p className="my-3 text-xl text-gray-600 font-semibold text-center">
                    Leverage your inventory, orders, and forecast data to gain
                    visibility into Sales Forecast vs. Actual, Global Product
                    Availability, and Inventory Days of Stock
                  </p>
                </div>
              </div>
              <div>
                <div
                  className="flex-1 flex flex-col justify-center items-center"
                  data-aos="fade-right"
                >
                  <h1 className="my-2 text-center text-3xl text-blue-900  font-bold">
                    Duty Optimization
                  </h1>
                  <p className="my-3 text-xl text-gray-600 font-semibold text-center">
                    Aggregate your import and export data to track and manage
                    strategic programs such as Drawback, Reconciliation, and
                    Temporary Importation under Bond
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img src={img3} alt="" className="m-auto flex-1" />
            </div>
          </div>
        </div>
        <div className="flex mt-20 w-full">
          <Link
            to="/contact"
            className="text-white bg-blue-900 hover:bg-blue-800 mx-auto inline-flex items-center justify-center mx-auto  px-10 py-6 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0"
          >
            Schedule a Demo Today
            <svg
              className="w-4 h-4 ml-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Products;
