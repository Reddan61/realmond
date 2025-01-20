import { useRef, useState } from "react";

export const useSearchTimeout = (timeoutMS: number) => {
  const [state, setState] = useState({
    currentText: "",
    tempText: "",
  });

  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const onChange = (newText: string) => {
    setState({
      ...state,
      tempText: newText,
    });

    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setState((state) => {
        return {
          ...state,
          currentText: state.tempText,
        };
      });
    }, timeoutMS);
  };

  return {
    ...state,
    onChange,
  };
};
