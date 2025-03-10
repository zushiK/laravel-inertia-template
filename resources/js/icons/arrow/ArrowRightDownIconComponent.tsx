
import React from 'react';

interface ArrowRightDownIconComponentProps {
  className?: string;
}

export const ArrowRightDownIconComponent: React.FC<ArrowRightDownIconComponentProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="nonzero"><path d="M24 0v24H0V0h24ZM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.105.074.014.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018Zm.264-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.092.01-.009.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z"></path><path fill="currentColor" d="M17 15.586V10a1 1 0 1 1 2 0v8a1 1 0 0 1-1 1h-8a1 1 0 1 1 0-2h5.586l-9.95-9.95A1 1 0 0 1 7.05 5.636l9.95 9.95Z"></path></g></svg>
  );
};
