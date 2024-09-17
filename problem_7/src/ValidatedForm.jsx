import React, { useRef, useState } from 'react';

function ValidatedForm() {
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const ageInputRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");

  const validateForm = () => {
    if (!nameInputRef.current.value) {
      setErrorMessage("Name is required.");
      nameInputRef.current.focus();
      return false;
    }
    if (!emailInputRef.current.value.includes('@')) {
      setErrorMessage("Please enter a valid email.");
      emailInputRef.current.focus();
      return false;
    }
    if (ageInputRef.current.value <= 0) {
      setErrorMessage("Please enter a valid age.");
      ageInputRef.current.focus();
      return false;
    }
    setErrorMessage("");
    return true;
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully.");
      console.log("Name:", nameInputRef.current.value);
      console.log("Email:", emailInputRef.current.value);
      console.log("Age:", ageInputRef.current.value);
    }
  };

  return (
    <form onSubmit={handleFormSubmission}>
      <h2>Validated Form</h2>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
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
      <button type="submit">Submit</button>
    </form>
  );
}

export default ValidatedForm;
