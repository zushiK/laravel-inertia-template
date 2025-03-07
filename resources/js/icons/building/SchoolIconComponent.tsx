
import React from 'react';

interface SchoolIconComponentProps {
  className?: string;
}

export const SchoolIconComponent: React.FC<SchoolIconComponentProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z"></path><path fill="currentColor" d="M11.063 2.469a1.5 1.5 0 0 1 1.753-.087l.121.087 4.312 3.45a2 2 0 0 1 .743 1.38L18 7.48V10h2a2 2 0 0 1 1.995 1.85L22 12v7.9a1.1 1.1 0 0 1-.98 1.094L20.9 21H3.1a1.1 1.1 0 0 1-1.094-.98L2 19.9V12a2 2 0 0 1 1.85-1.995L4 10h2V7.48a2 2 0 0 1 .614-1.442l.137-.12zM12 4.28l-4 3.2V19h8V7.48zM20 12h-2v7h2zM6 12H4v7h2zm6-4a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2"></path></g></svg>
  );
};
