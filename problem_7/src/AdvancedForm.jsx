import React, { useRef } from 'react';

function AdvancedForm() {
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const ageInputRef = useRef(null);

  const handleFocus = () => {
    // Focus the name input field when the component renders
    nameInputRef.current.focus();
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    console.log("Name:", nameInputRef.current.value);
    console.log("Email:", emailInputRef.current.value);
    console.log("Age:", ageInputRef.current.value);
  };

  return (
    <form onSubmit={handleFormSubmission}>
      <h2>Advanced Form Handling</h2>
      <div>
        <label>Name:</label>
        <input ref={nameInputRef} type="text" placeholder="Enter your name" />
      </div>
      <div>
        <label>Email:</label>
        <input ref={emailInputRef} type="email" placeholder="Enter your email" />
      </div>
      <div>
        <label>Age:</label>
        <input ref={ageInputRef} type="number" placeholder="Enter your age" />
      </div>
      <button type="submit" onClick={handleFocus}>Submit</button>
    </form>
  );
}

export default AdvancedForm;
