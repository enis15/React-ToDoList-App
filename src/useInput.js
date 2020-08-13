import React, { useState } from "react";

const useInput = (value = "") => {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const resetValue = () => {
    setInputValue("");
  };

  return [inputValue, handleInputChange, resetValue];
};

export { useInput };
