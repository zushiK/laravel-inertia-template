
import React from 'react';

interface OpenDoorIconComponentProps {
  className?: string;
}

export const OpenDoorIconComponent: React.FC<OpenDoorIconComponentProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z"></path><path fill="currentColor" d="M14.253 2.291a1.5 1.5 0 0 1 1.74 1.342l.007.138V5h2a2 2 0 0 1 1.995 1.85L20 7v10a2 2 0 0 1-1.85 1.994L18 19h-2v1.23a1.5 1.5 0 0 1-1.61 1.495l-.137-.016-8.582-1.43a2 2 0 0 1-1.665-1.812L4 18.306V5.694a2 2 0 0 1 1.513-1.94l.158-.033zM14 4.361 6 5.694v12.612l8 1.333zM18 7h-2v10h2zm-6.5 3.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"></path></g></svg>
  );
};
