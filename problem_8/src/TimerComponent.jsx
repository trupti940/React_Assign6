import React, { useRef, useState, useEffect } from 'react';
import './TimerComponent.css'; // Add some styles for progress bar and background

function TimerComponent() {
  const [remainingTime, setRemainingTime] = useState(0); // Time in seconds
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);
  const durationInputRef = useRef(null);
  const progressBarRef = useRef(null);
  const messageRef = useRef(null);

  useEffect(() => {
    if (remainingTime <= 0 && intervalRef.current) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
      messageRef.current.textContent = "Time's up!";
    }

    // Change background color dynamically
    if (remainingTime < 10) {
      document.body.style.backgroundColor = 'red';
    } else {
      document.body.style.backgroundColor = '';
    }

    // Update progress bar dynamically
    if (progressBarRef.current) {
      progressBarRef.current.style.width = `${(remainingTime / durationInputRef.current.value) * 100}%`;
    }

  }, [remainingTime]);

  const startTimer = () => {
    if (intervalRef.current) return; // Prevent multiple intervals

    setIsRunning(true);
    const duration = Number(durationInputRef.current.value) || 60; // Default to 60 seconds if input is empty
    setRemainingTime(duration);

    intervalRef.current = setInterval(() => {
      setRemainingTime(prevTime => {
        if (prevTime <= 1) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  const pauseTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setIsRunning(false);
    }
  };

  const resetTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setRemainingTime(Number(durationInputRef.current.value) || 60);
    setIsRunning(false);
    messageRef.current.textContent = ''; // Reset message
    document.body.style.backgroundColor = ''; // Reset background
  };

  return (
    <div className="timer-container">
      <h1>Countdown Timer</h1>
      <div className="progress-bar-container">
        <div ref={progressBarRef} className="progress-bar"></div>
      </div>
      <p>{Math.floor(remainingTime / 60)}:{remainingTime % 60 < 10 ? `0${remainingTime % 60}` : remainingTime % 60} remaining</p>
      
      <div>
        <label htmlFor="duration">Set Timer Duration (seconds):</label>
        <input ref={durationInputRef} type="number" id="duration" defaultValue={60} />
      </div>

      <div className="button-container">
        <button onClick={startTimer} disabled={isRunning}>Start</button>
        <button onClick={pauseTimer} disabled={!isRunning}>Pause</button>
        <button onClick={resetTimer}>Reset</button>
      </div>

      <p ref={messageRef}></p>
    </div>
  );
}

export default TimerComponent;
