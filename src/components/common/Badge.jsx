import React from 'react';

const colors = [
  '#E5243B', '#DDA63A', '#4C9F38', '#C5192D', '#FF3A21', 
  '#26BDE2', '#FCC30B', '#A21942', '#FD6925', '#DD1367',
  '#FD9D24', '#BF8B2E', '#3F7E44', '#0A97D9', '#56C02B',
  '#00689D', '#19486A'
];

const Badge = ({ number }) => {
  // Ensure the number corresponds to a valid index
  const color = colors[number - 1] || '#000'; // Default to black if out of range

  return (
    <div style={{
      backgroundColor: color,
      color: 'white',
      width: '30px',
      height: '30px',
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '15px',
      fontWeight: 'bold',
      margin: '5px',
    }}>
      {number}
    </div>
  );
};

export default Badge;
