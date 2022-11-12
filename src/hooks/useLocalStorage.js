import React from "react";
import { getSavedValue } from "../Utils/helperFunctions";
export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = React.useState(() => {
    return getSavedValue(key, initialValue);
  });

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}
