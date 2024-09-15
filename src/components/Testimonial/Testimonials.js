import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import PropTypes from "prop-types";
import spiritaero from "../../images/spirit.jfif";
import thirdwave from "../../images/3rdwave.jfif";
import cardinal from "../../images/cardinal.jpg";

const testimonials = [
  {
    img: thirdwave,
    quote:
      "The need for experts who understand trade compliance and complexities of system design are essential and fully represented by Trade Forward.",
    name: "N. Blinick",
    role: "3rdwave",
  },
  {
    img: spiritaero,
    quote:
      "Complex manufacturing operations require unique Trade Compliance solutions. The experts at Trade Forward develop specialized tools for our business challenges.",
    name: "M. Bennett",
    role: " Nordson Corporation",
  },
  {
    img: spiritaero,
    quote:
      "Global trade system are a challenge to implement and manage. Trade Forward has always delivered the experienced support for system integration testing when needed, as committed.",
    name: "S. Shaw ",
    role: "Aviation Customer",
  },
  {
    img: cardinal,
    quote:
      "Trade Forward has been instrumental in our team's success. From presentation to training all the way through continued support, they have been with us every step of the way. I am immensely thankful for their partnership and can not imagine a better team to work with day in and day out!",
    name: "S. Dill ",
    role: " Cardinal Health 3PL",
  },
];

const FancyTestimonialsSlider = () => {
  const testimonialsRef = useRef(null);
  const [active, setActive] = useState(0);
  const [autorotate, setAutorotate] = useState(true);
  const autorotateTiming = 7000;

  useEffect(() => {
    if (!autorotate) return;
    const interval = setInterval(() => {
      setActive(
        active + 1 === testimonials.length ? 0 : (active) => active + 1
      );
    }, autorotateTiming);
    return () => clearInterval(interval);
  }, [active, autorotate]);

  const heightFix = () => {
    if (testimonialsRef.current && testimonialsRef.current.parentElement)
      testimonialsRef.current.parentElement.style.height = `${testimonialsRef.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto text-center">
      {/* Testimonial image */}
      <div className="relative h-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[390px] h-[390px] sm:w-[460px] sm:h-[460px] pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-b before:from-indigo-500/25 before:via-indigo-500/5 before:via-25% before:to-indigo-500/0 before:to-75% before:rounded-full before:-z-10">
          <div className="h-32 [mask-image:_linear-gradient(0deg,transparent,theme(colors.white)_20%,theme(colors.white))]">
            {testimonials.map((testimonial, index) => (
              <Transition
                key={index}
                show={active === index}
                className="absolute inset-0 h-full -z-10"
                enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                enterFrom="opacity-0 -rotate-[60deg]"
                enterTo="opacity-100 rotate-0"
                leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                leaveFrom="opacity-100 rotate-0"
                leaveTo="opacity-0 rotate-[60deg]"
              >
                <h2 className="relative object-fill top-11 left-1/2 -translate-x-1/2 text-4xl font-bold text-gray-800 tracking-wide ">
                  {testimonial.name}
                </h2>
              </Transition>
            ))}
          </div>
        </div>
      </div>
      {/* Text */}
      <div className="mb-9 transition-all duration-150 delay-300 ease-in-out">
        <div className="relative flex flex-col" ref={testimonialsRef}>
          {testimonials.map((testimonial, index) => (
            <Transition
              key={index}
              show={active === index}
              enter="transition ease-in-out duration-500 delay-200 order-first"
              enterFrom="opacity-0 -translate-x-4"
              enterTo="opacity-100 translate-x-0"
              leave="transition ease-out duration-300 delay-300 absolute"
              leaveFrom="opacity-100 translate-x-0"
              leaveTo="opacity-0 translate-x-4"
              beforeEnter={() => heightFix()}
            >
              {/* eslint-disable-next-line no-octal-escape */}
              <div className="text-2xl font-bold text-slate-900 before:content-['\201C'] after:content-['\201D']">
                {testimonial.quote}
              </div>
            </Transition>
          ))}
        </div>
      </div>
      {/* Buttons */}
      <div className="flex flex-wrap justify-center -m-1.5">
        {testimonials.map((testimonial, index) => (
          <button
            key={index}
            className={`inline-flex justify-center whitespace-nowrap rounded-full px-3 py-1.5 m-1.5 text-xs shadow-sm focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ${
              active === index
                ? "bg-indigo-500 text-white shadow-indigo-950/10"
                : "bg-white hover:bg-indigo-100 text-slate-900"
            }`}
            onClick={() => {
              setActive(index);
              setAutorotate(false);
            }}
          >
            <span
              className={`${
                active === index ? "text-indigo-200" : "text-slate-300"
              }`}
            ></span>
            <span>{testimonial.role}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

FancyTestimonialsSlider.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      quote: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FancyTestimonialsSlider;
