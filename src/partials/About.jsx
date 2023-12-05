import React, { useState, useRef, useEffect } from 'react';


function About() {

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="flex flex-grow flex-wrap items-center justify-center gap-x-2"></div>
            <img src="../images/EOSR9101.JPG" alt="Фото" />
            <div className="flex flex-col flex-grow flex-wrap justify-center gap-x-2">
              <h2 className="">Кто Я?</h2>
              <p>Я Фотограф Фотограф Фотограф Фотограф Фотограф Фотограф Фотограф Фотограф Фотограф Фотограф</p>
            </div>
        </div>
      </div>
    </section >
  );
}

export default About;
