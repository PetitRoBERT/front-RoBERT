import React, { useState } from 'react';
import './App.css';
import styled from '@emotion/styled';

type ButtonProps = {
  counter: number;
};

const StyledButtonTest = styled.button<ButtonProps>`
  width: ${({ counter }) => ((counter + 4) * 10) % 200}px;
`;

const App = () => {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => setCounter(counter + 1);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to PetitRoBERT.
          <br />
          🚧👷🏻‍♂️🚧
        </p>
        <StyledButtonTest onClick={incrementCounter} counter={counter}>
          Test
        </StyledButtonTest>
      </header>
    </div>
  );
};

export default App;
