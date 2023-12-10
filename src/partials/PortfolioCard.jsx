import React, { useState, useRef, useEffect } from 'react';

function PortfolioCard({ imageSource }) {
  return (
    <div className="relative shadow-lg group">
      <img
        src={imageSource}
        className="group-hover:origin-center group-hover:scale-105 transition inset-0 object-cover object-center duration-500 w-full h-[350px]"
        alt=""
      />
    </div>
  );
}

export default PortfolioCard;
