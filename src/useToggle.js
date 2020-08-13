import React, { useState } from "react";

const useToggle = (toggledVal = false) => {
  const [isTrue, setIsTrue] = useState(toggledVal);
  const toggleValue = () => {
    setIsTrue(!isTrue);
  };

  return [isTrue, toggleValue];
};

export { useToggle };
