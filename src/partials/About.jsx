import React, { useState, useRef, useEffect } from 'react';
import meImage from '../images/me.jpg';

function About() {
  return (
    <section className="relative">
      <div className="flex items-center w-full mx-auto px-4 py-14 text-slate-50 font-light sm:px-6">
        <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div className="flex flex-wrap ">
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
              <img
                src={meImage}
                alt=""
                className="relative z-40 object-cover w-full h-[38rem] rounded-md z-0 "
              />
            </div>
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
              <h2 className="mb-4 text-4xl font-semibold text-slate-800">
                Обо мне
              </h2>
              <p className="mb-10 text-base leading-7 text-gray-800">
                Я Аленочка Михайлова. Люблю фотографировать. Буду рада запечатлеть самые важные моменты в вашей жизни &#128512;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
