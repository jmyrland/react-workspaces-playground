import React from 'react';
import './CompOne.css';

class Test {
  prop: string;
  constructor(v: string) {
    this.prop = v;
  }
}

const CompOne: React.FC = () => {
  const test = new Test('hey');

  return (
    <div className="Comp">
      <h3>
        <span role="img" aria-label="React Logo">
          ⚛️
        </span>
          {test.prop as string}
      </h3>
    </div>
  );
};

export default CompOne;
