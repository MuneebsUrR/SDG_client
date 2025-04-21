import React from 'react';

import {colors} from '../../../lib/colors';

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
