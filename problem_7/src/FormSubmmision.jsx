import React, { useRef } from 'react';

function FormSubmission() {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Access all form elements via the form ref
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());

    console.log('Form Data:', data);
    alert(`Form submitted successfully!\nName: ${data.name}\nEmail: ${data.email}\nAge: ${data.age}`);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <h2>Submit Form using useRef</h2>
      <div>
        <label>Name:</label>
        <input name="name" type="text" placeholder="Enter your name" />
      </div>
      <div>
        <label>Email:</label>
        <input name="email" type="email" placeholder="Enter your email" />
      </div>
      <div>
        <label>Age:</label>
        <input name="age" type="number" placeholder="Enter your age" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormSubmission;
