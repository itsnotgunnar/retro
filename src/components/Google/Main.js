import React, { useState } from 'react';
import styled from 'styled-components';
import resume from '../../assets/personal/resume.png';

function Main({ onSearch, className }) {
  const [value, setValue] = useState('');
  function onChange(e) {
    setValue(e.target.value);
  }
  function onClick() {
    onSearch(value);
  }
  function onKeyDown(e) {
    if (e.key !== 'Enter') return;
    onSearch(value);
  }
  return (
    <div className={className}>
      <body>
        <section className="content">
          <img
            className="logo"
            alt="Resume"
            src={resume}
            style={{ width: '60%', height: '60%' }}
          />
        </section>
      </body>
    </div>
  );
}

export default Main;
