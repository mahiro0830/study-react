import React from 'react';

/**
 * 複数の children を受け取るコンポネント
 */
const TitledPanel = ({ children }) => {
  const title = children.find( el => el.key === 'title' );
  const body = children.find( el => el.key === 'body' );

  return (
    <div style={{
      margin: 50,
      padding: 20,
      border: '1px solid #000',
      width: 'fit-content',
      boxShadow: '10px 5px 5px #999',
      backgroundClip: '#FFF',
    }}>
      { title }
      { body }
    </div>
  );
}

export default TitledPanel;
