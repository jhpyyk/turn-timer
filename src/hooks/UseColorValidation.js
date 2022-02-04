import { useState, useEffect } from "react";

// Returns isValid == true if str is a HTML HEX color code
// Example: #F487BA
export default function useColorValidation(str) {
  const [isValid, setIsValid] = useState(null);
  const [isEmpty, setIsempty] = useState(null);
  useEffect(() => {
    setIsValid(str.match(/^[#][0-9a-fA-F]+$/) && str.length == 7);
    setIsempty(str.length == 0);
  }, [str]);
  return [isValid, isEmpty];
}
