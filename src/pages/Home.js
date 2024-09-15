import React from "react";
import Clients from "../components/Clients";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Products from "../components/Products";
import Services from "../components/Services";
import WhoWeAre from "../components/About";

const Home = () => {
  return (
    <div>
      <section>
        <Hero />
      </section>
      <section>
        <Intro />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <Products />
      </section>
      <section>
        <WhoWeAre />
      </section>
      <section>
        <Clients />
      </section>
      <section>
        <Cta />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Home;
