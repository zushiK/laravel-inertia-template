
import React from 'react';

interface MoaiIconComponentProps {
  className?: string;
}

export const MoaiIconComponent: React.FC<MoaiIconComponentProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z"></path><path fill="currentColor" d="M13.194 2a4 4 0 0 1 3.99 3.734l.085 1.268a1 1 0 0 1 1.062.931l.334 5a1 1 0 0 1-.93 1.065l.12 1.802a3.001 3.001 0 0 1-2.482 3.157l.576 1.727A1 1 0 0 1 15 22H9a1 1 0 0 1-.948-1.316l.575-1.727A3 3 0 0 1 6.145 15.8l.12-1.802a1 1 0 0 1-.93-1.064l.334-5a1 1 0 0 1 1.062-.932l.085-1.268A4 4 0 0 1 10.806 2zm.085 17h-2.558l-.333 1h3.225l-.333-1Zm-.085-15h-2.387A2 2 0 0 0 8.81 5.867l-.67 10.067A1 1 0 0 0 9.137 17h5.724a1 1 0 0 0 .998-1.066l-.67-10.067A2 2 0 0 0 13.193 4Zm-1.672 6.053c.135-.44.725-.468.92-.088l.036.088 1.124 3.653a1 1 0 0 1-.84 1.287l-.116.007h-1.292a1 1 0 0 1-.984-1.18l.028-.114zM10.5 7a1 1 0 1 1 0 2H10a1 1 0 0 1 0-2zM14 7a1 1 0 0 1 .117 1.993L14 9h-.5a1 1 0 0 1-.116-1.993L13.5 7z"></path></g></svg>
  );
};
