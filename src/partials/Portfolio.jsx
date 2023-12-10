import React, { useState, useRef, useEffect } from 'react';
import PortfolioCard from './PortfolioCard';

function Portfolio() {
  return (
    <section className="flex items-center py-16">
      <div className="container p-10 mx-auto">
        <h2 className="pb-4 text-4xl font-bold text-center text-gray-800">
          Семейные фотоссесси
        </h2>
        <div className="mx-auto mb-10 border-b border-red-700 w-44"></div>
        <div className="grid gap-4 grid-cols-1 mt-8 lg:grid-cols-3 md:grid-cols-2">
          <PortfolioCard imageSource="https://i.postimg.cc/Hx5MQqQP/pexels-eberhard-grossgasteiger-1287145.jpg" />
          <PortfolioCard imageSource="https://i.postimg.cc/Hx5MQqQP/pexels-eberhard-grossgasteiger-1287145.jpg" />
          <PortfolioCard imageSource="https://i.postimg.cc/Hx5MQqQP/pexels-eberhard-grossgasteiger-1287145.jpg" />
          <PortfolioCard imageSource="https://i.postimg.cc/Hx5MQqQP/pexels-eberhard-grossgasteiger-1287145.jpg" />
          <PortfolioCard imageSource="https://i.postimg.cc/Hx5MQqQP/pexels-eberhard-grossgasteiger-1287145.jpg" />
          <PortfolioCard imageSource="https://i.postimg.cc/Hx5MQqQP/pexels-eberhard-grossgasteiger-1287145.jpg" />
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
