import React, { useState, useRef, useEffect } from 'react';

function Portfolio() {
  return (
    <section className="flex items-center py-16 bg-gray-100">
      <div className="container p-4 mx-auto">
        <h2 className="pb-4 text-4xl font-bold text-center text-gray-800">
          Семейные фотоссесси
        </h2>
        <div className="mx-auto mb-10 border-b border-red-700 w-44"></div>
        <div className="grid gap-4 grid-cols-1 mt-8 lg:grid-cols-4 md:grid-cols-2">
          <div className="relative shadow-lg group">
            <img
              src="https://i.postimg.cc/jqwg12hG/pexels-asad-photo-maldives-1591373.jpg"
              className="group-hover:origin-center group-hover:scale-105 transition inset-0 object-cover object-center  duration-500 w-full h-[350px]"
              alt=""
            />
          </div>
          <div className="relative shadow-lg group">
            <img
              src="https://i.postimg.cc/Hx5MQqQP/pexels-eberhard-grossgasteiger-1287145.jpg"
              className="group-hover:origin-center group-hover:scale-105 transition inset-0 object-cover object-center  duration-500 w-full h-[350px]"
              alt=""
            />
          </div>
          <div className="relative shadow-lg group">
            <img
              src="https://i.postimg.cc/k4r6XTkN/pexels-aviv-perets-3274903.jpg"
              className="group-hover:origin-center group-hover:scale-105 transition inset-0 object-cover object-center  duration-500 w-full h-[350px]"
              alt=""
            />
          </div>
          <div className="relative shadow-lg group">
            <img
              src="https://i.postimg.cc/C1V5Vzqm/pexels-jacob-colvin-1757363.jpg"
              className="group-hover:origin-center group-hover:scale-105 transition inset-0 object-cover object-center  duration-500 w-full h-[350px]"
              alt=""
            />
          </div>
          <div className="relative shadow-lg group">
            <img
              src="https://i.postimg.cc/TYSR6K8g/pexels-frans-van-heerden-624015.jpg"
              className="group-hover:origin-center group-hover:scale-105 transition inset-0 object-cover object-center  duration-500 w-full h-[350px]"
              alt=""
            />
          </div>
          <div className="relative shadow-lg group">
            <img
              src="https://i.postimg.cc/LXRP3yN9/pexels-michael-block-3225517.jpg"
              className="group-hover:origin-center group-hover:scale-105 transition inset-0 object-cover object-center  duration-500 w-full h-[350px]"
              alt=""
            />
          </div>
          <div className="relative shadow-lg group">
            <img
              src="https://i.postimg.cc/Gt6hqtdF/pexels-cole-keister-4932184.jpg"
              className="group-hover:origin-center group-hover:scale-105 transition inset-0 object-cover object-center  duration-500 w-full h-[350px]"
              alt=""
            />
          </div>
          <div class="relative shadow-lg group">
            <img
              src="https://i.postimg.cc/MKXQ5fbQ/pexels-stein-egil-liland-3408744.jpg"
              className="group-hover:origin-center group-hover:scale-105 transition inset-0 object-cover object-center  duration-500 w-full h-[350px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
