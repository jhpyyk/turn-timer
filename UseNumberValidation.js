import { useState, useEffect } from "react";

export default function useNumberValidation(str) {
  const [isValid, setIsValid] = useState(null);
  const [isEmpty, setIsEmpty] = useState(null);
  useEffect(() => {
    setIsValid(str.match(/^[0-9]+$/));
    setIsEmpty(str.length == 0);
  }, [str]);
  return [isValid, isEmpty];
}
