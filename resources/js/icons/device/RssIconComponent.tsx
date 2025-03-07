
import React from 'react';

interface RssIconComponentProps {
  className?: string;
}

export const RssIconComponent: React.FC<RssIconComponentProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z"></path><path fill="currentColor" d="M18 3a3 3 0 0 1 2.995 2.824L21 6v12a3 3 0 0 1-2.824 2.995L18 21H6a3 3 0 0 1-2.995-2.824L3 18V6a3 3 0 0 1 2.824-2.995L6 3zm0 2H6a1 1 0 0 0-.993.883L5 6v12a1 1 0 0 0 .883.993L6 19h12a1 1 0 0 0 .993-.883L19 18V6a1 1 0 0 0-.883-.993zm-9.5 9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M8 10.5a5.5 5.5 0 0 1 5.5 5.5 1 1 0 1 1-2 0A3.5 3.5 0 0 0 8 12.5a1 1 0 1 1 0-2M8.5 7a8.5 8.5 0 0 1 8.481 9.066 1 1 0 1 1-1.995-.132 6.5 6.5 0 0 0-6.92-6.92 1 1 0 1 1-.132-1.995C8.121 7.006 8.31 7 8.5 7"></path></g></svg>
  );
};
