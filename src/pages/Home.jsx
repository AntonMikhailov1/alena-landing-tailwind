import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import About from '../partials/About';
import Portfolio from '../partials/Portfolio';
import Footer from '../partials/Footer';

function Home() {
  return (
    <div className="flex flex-col text-gray-900 min-h-screen overflow-hidden bg-gradient-to-b from-indigo-100 via-pink-100/50 to-cyan-100/50 font-light">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />
        <About />
        <Portfolio />
      </main>
      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;