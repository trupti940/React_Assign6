import React, { useRef } from 'react';

function ColorBox() {
  const boxRef = useRef(null);

  const changeColor = () => {
    // Change the background color when clicked
    boxRef.current.style.backgroundColor = 
      boxRef.current.style.backgroundColor === 'lightblue' ? 'lightcoral' : 'lightblue';
  };

  return (
    <div
      ref={boxRef}
      onClick={changeColor}
      style={{ width: '200px', height: '200px', backgroundColor: 'lightblue', cursor: 'pointer' }}
    >
      Click to change color
    </div>
  );
}

export default ColorBox;
