import React, { useState } from "react";

function RadioButtons({ props }) {
  const handleChange = (event) => {
    props.setRole(event.target.value);
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          value="Manager"
          checked={props.role === "Manager"}
          onChange={handleChange}
        />
        Manager
      </label>
      <label>
        <input
          type="radio"
          value="Assistant"
          checked={props.role === "Assistant"}
          onChange={handleChange}
        />
        Assistant
      </label>
    </div>
  );
}

export default RadioButtons;
