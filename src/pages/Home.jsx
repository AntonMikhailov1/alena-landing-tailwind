import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import About from '../partials/About';
// import FeaturesBlocks from '../partials/FeaturesBlocks';
// import Testimonials from '../partials/Testimonials';
// import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';
import Banner from '../partials/Banner';

function Home() {
  return (
    <div className="flex flex-col text-gray-900 min-h-screen overflow-hidden bg-gradient-to-r from-pink-100 via-indigo-100 to-white text-slate-50 font-light">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />
        <About />
        {/* <FeaturesBlocks />
        <Testimonials />
        <Newsletter /> */}

      </main>

      <Banner />

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;