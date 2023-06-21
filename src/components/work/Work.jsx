import React from 'react';
import Works from './Works';

const Work = () => {
  return (
    <section className="work section">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">Most recent projects</span>

        <Works />
    </section>
  );
};

export default Work