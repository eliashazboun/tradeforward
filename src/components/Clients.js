import React from "react";
import FancyTestimonialsSlider from "./Testimonial/Testimonials";

const Clients = () => {
  return (
    <div className="my-8 bg-gray-100">
      <section data-aos="fade-up">
        <div className="my-4 py-4">
          <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
            Our Clients
          </h2>
          <div className="flex justify-center">
            <div className="w-24 border-b-4 border-blue-900"></div>
          </div>
          <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">
            Some of our clients.
          </h2>
        </div>
        <FancyTestimonialsSlider />
      </section>
    </div>
  );
};

export default Clients;
