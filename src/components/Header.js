import React from 'react';

import logoImg from '../assets/one-ring.png';

export default function Header() {
  return (
    <header>
      <img src={logoImg} alt="Quiz logo" />
      <h1>The Lord of the Rings Quiz</h1>
    </header>
  );
}