import { useState } from "react";

const useInput = () => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(!focused);
  };

  return {
    handleFocus,
    focused,
  };
};

export default useInput;
