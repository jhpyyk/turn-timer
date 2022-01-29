import { useState, useEffect } from "react";

export default function useColorValidation(str) {
  const [isValid, setIsValid] = useState(true);
  useEffect(() => {
    if (
      str.match(/^[#][0-9a-fA-F]+$/) &&
      (str.length == 9 || str.length == 7)
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [str]);
  return isValid;
}
