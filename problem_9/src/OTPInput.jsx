import React, { useState, useRef } from 'react';
import './OTPInput.css';

const OTPInput = ({ length = 6 }) => {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (/^[0-9]$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move focus to the next input field
      if (index < length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "") {
      // Move focus to the previous input field on backspace
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handlePaste = (e) => {
    const pasteData = e.clipboardData.getData("text").slice(0, length).split('');
    const newOtp = [...otp];

    pasteData.forEach((char, index) => {
      if (/^[0-9]$/.test(char)) {
        newOtp[index] = char;
        if (index < length - 1) {
          inputRefs.current[index + 1].focus();
        }
      }
    });

    setOtp(newOtp);
  };

  const handleSubmit = () => {
    if (otp.every(digit => digit !== "")) {
      alert(`Entered OTP: ${otp.join("")}`);
      console.log(`Entered OTP: ${otp.join("")}`);
    }
  };

  return (
    <div className="otp-container">
      {otp.map((digit, index) => (
        <input
          key={index}
          type="text"
          maxLength="1"
          value={digit}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={(el) => (inputRefs.current[index] = el)}
          onPaste={handlePaste}
        />
      ))}
      <button
        onClick={handleSubmit}
        disabled={otp.some(digit => digit === "")}
      >
        Submit
      </button>
    </div>
  );
};

export default OTPInput;
