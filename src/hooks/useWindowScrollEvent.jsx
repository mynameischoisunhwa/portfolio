import { useEffect } from 'react';

let throttleTimer = false;

const throttle = (callback, time) => {
  if (throttleTimer) return;

  throttleTimer = true;

  setTimeout(() => {
    callback();
    throttleTimer = false;
  }, time);
};

export const useWindowScrollEvent = eventHandler => {
  useEffect(() => {
    window.addEventListener('scroll', eventHandler);
    // window.addEventListener('scroll', throttle(eventHandler, 100));
    return () => {
      window.removeEventListener('scroll', eventHandler);
    };
  }, []);
};
