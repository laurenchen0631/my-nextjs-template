import {useEffect, useRef} from 'react';

const useInterval = (callback: () => void, delay: number): void => {
  const savedCallback = useRef<undefined | (() => void)>(undefined);
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  useEffect(() => {
    const id = setInterval(() => {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }, delay);
    return () => clearInterval(id);
  }, [delay]);
};

export default useInterval;
