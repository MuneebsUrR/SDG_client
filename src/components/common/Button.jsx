import React from 'react';

const Button = ({ title }) => {
  return (
    <button className="relative bg-secondary text-white font-bold py-2 px-4 rounded-lg overflow-hidden group">
      <span className="absolute inset-0 bg-primary w-full h-full transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
      <span className="relative z-10">{title}</span>
    </button>
  );
};

export default Button;
