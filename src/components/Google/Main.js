import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import resume from './Resume-Main.png';

function Main({ onSearch, className }) {
  const [value, setValue] = useState('');
  const onChange = e => setValue(e.target.value);
  const onClick = () => onSearch(value);
  const onKeyDown = e => {
    if (e.key !== 'Enter') return;
    onSearch(value);
  };

  return (
    <div className={className}>
      <section className="content">
        <img
          className="logo"
          alt="Resume"
          src={resume}
          style={{ width: '60%', height: '60%' }}
        />
      </section>
    </div>
  );
}

export default { Main };
