import React from "react";

/**
 * SleekButton Component
 * @param {string} text - The label inside the button
 * @param {function} onClick - What happens when the user clicks it
 * @param {object} style - Overwrite button styling
 */
const SleekButton = ({ text, onClick, style }) => {
  // We define our "Styles" (CSS) inside a JavaScript object.
  // This is a "Minimalist" design: clean lines, lots of breathing room (padding),
  // and a subtle reaction when the user interacts with it.
  const buttonStyle = style || {
    backgroundColor: "#111111", // A deep, matte black
    color: "#ffffff", // Crisp white text
    padding: "12px 24px", // Space inside the button (Vertical, Horizontal)
    fontSize: "14px", // Clean, readable size
    fontWeight: "500", // Medium thickness for a premium feel
    borderRadius: "8px", // Rounded corners for a modern look
    border: "none", // Remove the ugly default border
    cursor: "pointer", // Change the mouse cursor to a "hand"
    letterSpacing: "0.5px", // Modern typography trick
    transition: "all 0.2s ease", // Smoothly change when clicked/hovered
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)", // A very soft shadow
  };

  return (
    <button
      style={buttonStyle}
      onClick={onClick}
      // Simple logic to make it "pop" when pressed
      onMouseDown={(e) => (e.target.style.transform = "scale(0.96)")}
      onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
    >
      {text}
    </button>
  );
};

export default SleekButton;
