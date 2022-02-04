import { useState, useEffect } from "react";

// Returns isValid == true if str is a digit
export default function useNumberValidation(str) {
  const [isValid, setIsValid] = useState(null);
  const [isEmpty, setIsEmpty] = useState(null);
  useEffect(() => {
    setIsValid(str.match(/^[0-9]+$/));
    setIsEmpty(str.length == 0);
  }, [str]);
  return [isValid, isEmpty];
}
