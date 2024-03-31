import { useState, useEffect } from 'react';

const useBodyScrollLock = () => {
  const bodyStyle = document.body.style;

  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    bodyStyle.overflow = isLocked ? 'hidden' : 'auto';
  }, [isLocked, bodyStyle]);

  const toggle = () => setIsLocked(!isLocked);

  return toggle;
};

export default useBodyScrollLock;
