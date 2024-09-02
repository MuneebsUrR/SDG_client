import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button = ({ title, link = 1 }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`sdg/${link}`);
  }
  return (
    <button onClick={handleNavigate} className="relative bg-secondary text-white font-bold py-2 px-4 rounded-lg overflow-hidden group">
      <span className="absolute inset-0 bg-primary w-full h-full transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
      <span className="relative z-10">{title}</span>
    </button>
  );
};

export default Button;
