import React, { useRef } from 'react';

function UncontrolledInput() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);

  const handleInput = () => {
    // Display the current value of the input field
    resultRef.current.textContent = inputRef.current.value;
  };

  return (
    <div>
      <input ref={inputRef} type="text" onInput={handleInput} placeholder="Type something..." />
      <p>Current Value: <span ref={resultRef}></span></p>
    </div>
  );
}

export default UncontrolledInput;
