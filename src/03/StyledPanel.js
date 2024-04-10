import React from 'react';

const StyledPanel = ({ children }) => {
  return (
    <div style={{
      margin: 50,
      padding: 20,
      border: '1px solid #000',
      width: 'fit-content',
      boxShadow: '10px 5px 5px #999',
      backgroundClip: '#FFF',
    }}>
      { children }
    </div>
  );
}

export default StyledPanel;
