
import React from 'react';

interface ListSearchIconComponentProps {
  className?: string;
}

export const ListSearchIconComponent: React.FC<ListSearchIconComponentProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z"></path><path fill="currentColor" d="M4 4a1 1 0 0 0 0 2h16a1 1 0 1 0 0-2zm-1 8a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 7a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m7-5a5 5 0 1 1 9.172 2.757l1.535 1.536a1 1 0 0 1-1.414 1.414l-1.536-1.535A5 5 0 0 1 10 14m5-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6"></path></g></svg>
  );
};
