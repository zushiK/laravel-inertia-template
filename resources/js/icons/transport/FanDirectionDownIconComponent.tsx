
import React from 'react';

interface FanDirectionDownIconComponentProps {
  className?: string;
}

export const FanDirectionDownIconComponent: React.FC<FanDirectionDownIconComponentProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z"></path><path fill="currentColor" d="M17.983 8.051a1 1 0 0 1 .632 1.265l-.527 1.581A6 6 0 0 1 12.396 15H9.854a2 2 0 0 0-1.789 1.106l-2.17 4.341a1 1 0 1 1-1.79-.894l2.171-4.342A4 4 0 0 1 9.854 13h2.542a4 4 0 0 0 3.795-2.735l.527-1.581a1 1 0 0 1 1.265-.633M6.492 5.088l.094.084L8 6.586l1.414-1.414a1 1 0 0 1 1.498 1.32l-.084.094-2.12 2.121a1 1 0 0 1-1.316.087l-.1-.087-2.12-2.121A1 1 0 0 1 6.39 5.019l.102.07ZM18.5 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"></path></g></svg>
  );
};
