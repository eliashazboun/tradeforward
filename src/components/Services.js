import React from "react";
import img from "../images/Site System Design.png";
import img2 from "../images/Site Managed Services.png";
import img3 from "../images/Site Image 2.png";
import Checklist from "./Checklist";

const Services = () => {
  return (
    <div id="services" className="bg-gray-50 py-16">
      <section data-aos="zoom-in-down">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-4xl font-semibold text-blue-900 mb-2">
            Services and Solutions
          </h2>
          <div className="flex justify-center my-3">
            <div className="w-24 border-b-4 border-blue-900"></div>
          </div>
          <p className="text-center text-xl text-blue-900 font-medium mb-10">
            We are deeply committed to the growth and success of our clients,
            crafting each service and solution to meet their unique needs.
          </p>
        </div>
        <div
          className="max-w-7xl mx-auto px-4"
          data-aos="fade-down"
          data-aos-delay="600"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white transition-transform hover:scale-105 duration-300 overflow-hidden text-gray-800 rounded-lg shadow-lg p-4">
              <img
                alt="Trade and Supply Chain Consulting"
                className="rounded-t-lg mx-auto w-full object-cover object-center"
                src={img3}
              />
              <div className="p-4">
                <h3 className="font-semibold text-2xl text-center mb-3">
                  Trade and Supply Chain Consulting
                </h3>
                <Checklist
                  items={[
                    "Conduct current state / future state process mapping efforts",
                    "Define benchmarks and apply industry best practices",
                    "Identify opportunities for process automation through software",
                    "Assist in software procurement and vendor selection processes",
                    "Deliver industry training tailored to meet client-specific needs",
                  ]}
                />
              </div>
            </div>
            <div className="bg-white transition-transform hover:scale-105 duration-300 overflow-hidden text-gray-800 rounded-lg shadow-lg p-4">
              <img
                alt="Global Trade Managed Services"
                className="rounded-t-lg mx-auto w-full object-cover object-center"
                src={img2}
              />
              <div className="p-4">
                <h3 className="font-semibold text-2xl text-center mb-3">
                  Global Trade Managed Services
                </h3>
                <Checklist
                  items={[
                    "Classify products for global procurement and distribution",
                    "Manage free trade agreement supplier solicitation and qualification",
                    "Screen partners and transactions for compliance risks",
                    "Manage daily import and export operations",
                    "Audit broker, forwarder, and self-filed declarations",
                  ]}
                />
              </div>
            </div>
            <div className="bg-white transition-transform hover:scale-105 duration-300 overflow-hidden text-gray-800 rounded-lg shadow-lg p-4">
              <img
                alt="System Design and Implementation"
                className="rounded-t-lg mx-auto w-full object-cover object-center"
                src={img}
              />
              <div className="p-4">
                <h3 className="font-semibold text-2xl text-center mb-3">
                  System Design and Implementation
                </h3>
                <Checklist
                  items={[
                    "Define and document functional and technical requirements",
                    "Translate requirements into actionable project milestones",
                    "Integrate data from critical business systems and service providers",
                    "Document standard operations procedures for end users",
                    "Deliver end-to-end project management and governance",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
       
      </section>
    </div>
  );
};

export default Services;
