import React from "react";
import PropTypes from "prop-types";

function MyComponent({ name, age, isStudent }) {
  console.log("Received props:", { name, age, isStudent });

  return (
    <div>
      <h2>Student Details</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Student: {isStudent ? "Yes" : "No"}</p>
      <ul>
        {["Hi", "Hi", "Hi", "Hi"].map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <hr />
    </div>
  );
}

MyComponent.propTypes = {
  name: PropTypes.string.isRequired, // Make it required
  age: PropTypes.number.isRequired,
  isStudent: PropTypes.bool.isRequired,
};

export default MyComponent;
