import React from 'react';

const Button = ({ type = 'button', onClick, children, className = '' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 ease-in-out ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
