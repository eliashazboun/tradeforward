import React from "react";
import mike from "../images/a81c12fc70c33e1f2e8aa0aa3d8480a5_592x578_fit.jpg";
import allison from "../images/allison.jpg";
import cheryl from "../images/cheryl.jpg";
import Person from "./PersonHolder";

const WhoWeAre = () => {
  return (
    <div className="mb-8 py-8   bg-gradient-to-r" id="whoweare">
      <h2 className="text-center text-4xl text-blue-900 font-bold mb-6">
        Who We Are
      </h2>
      <div className="flex justify-center">
        <div className="w-24 border-b-4 border-blue-900 mb-12"></div>
      </div>

      <div
        className="px-4 sm:px-6 lg:px-8"
        data-aos="fade-down"
        data-aos-delay="600"
      >
        <div className="grid grid-cols-1 gap-10">
          <Person
            name="Mike Thompson"
            img={mike}
            description="As President of Trade Forward, Mike is responsible for daily oversight of the company's operations. His years of experience in software and professional services enable him to successfully partner with platform providers, deliver managed services, and staff mission critical software implementation projects."
            mailto="mthompson@tradeforward.io"
          />

          <Person
            name="Allison Thompson"
            img={allison}
            description="As Partner at Trade Forward, Allison is responsible for
            marketing and event coordination. Her prior work experience in
            global trade content and quality assurance along with her
            passion for event management help to drive year-over-year growth
            of this woman-owned small business."
            mailto={"athompson@tradeforward.io"}
          />

          <Person
            name="Cheryl McCauley"
            img={cheryl}
            description=" As Partner at Trade Forward, Cheryl leads trade compliance and
            managed services. She is a career global logistics and
            forwarding practitioner with a focus on export compliance,
            international documentation, and training. Cheryl is PMP,
            Hazmat, and Dangerous goods certified."
            mailto="cmccauley@tradeforward.io"
          />
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
