import React from 'react';
import Button from '../Button';

const ApplyButton = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      className="bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 rounded-lg"
    >
      Apply
    </Button>
  );
};

export default ApplyButton;
