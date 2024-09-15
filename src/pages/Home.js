import React from 'react';
import Clients from '../components/Clients';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Products from '../components/Products';
import Services from '../components/Services';
import WhoWeAre from '../components/About';


const Home = () => {
    return (
        <>
            <Hero />
            <br />
            <Intro />
            <br />
            <Services />
            <br />
            <br />
            <Products />
            <br />
            <br />

            
            <WhoWeAre />
            <br />
            <br />

            <Clients />
            <br />
            <br />

            <Cta/>
            <Footer />
        </>

    )
}

export default Home;

