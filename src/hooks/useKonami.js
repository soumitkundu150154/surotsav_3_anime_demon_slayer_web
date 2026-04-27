import { useState, useEffect } from 'react';

const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp',
  'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight',
  'ArrowLeft', 'ArrowRight',
  'b', 'a',
];

export function useKonami(callback, onDeactivate) {
  const [activated, setActivated] = useState(false);
  const [buffer, setBuffer] = useState([]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activated) {
        if (e.key === 'Escape') {
          setActivated(false);
          onDeactivate?.();
        }
        return;
      }

      const newBuffer = [...buffer, e.key].slice(-KONAMI_CODE.length);
      setBuffer(newBuffer);

      if (newBuffer.length === KONAMI_CODE.length &&
          newBuffer.every((key, i) => key === KONAMI_CODE[i])) {
        setActivated(true);
        callback?.();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [buffer, activated, callback, onDeactivate]);

  return activated;
}
