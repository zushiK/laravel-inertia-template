
import React from 'react';

interface MedalIconComponentProps {
  className?: string;
}

export const MedalIconComponent: React.FC<MedalIconComponentProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z"></path><path fill="currentColor" d="M9.42 2a2 2 0 0 1 1.736 1.008L12 4.484l.844-1.476A2 2 0 0 1 14.58 2h4.558a1.5 1.5 0 0 1 1.303 2.244l-3.382 5.918a7 7 0 1 1-10.118 0L3.559 4.244A1.5 1.5 0 0 1 4.862 2zM12 10a5 5 0 1 0 0 10 5 5 0 0 0 0-10m0 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4m6.277-9H14.58l-1.428 2.5 1.06 1.857c.44.146.86.335 1.255.56zM9.42 4H5.723l2.81 4.917a6.961 6.961 0 0 1 3.176-.911z"></path></g></svg>
  );
};
