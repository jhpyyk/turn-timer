import { useState, useEffect } from "react";

export default function useNumberValidation(str) {
  const [isValid, setIsValid] = useState(true);
  useEffect(() => {
    if (str.match(/^[0-9]+$/)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [str]);
  return isValid;
}
