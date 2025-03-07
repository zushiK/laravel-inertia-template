
import React from 'react';

interface GooglePlayIconComponentProps {
  className?: string;
}

export const GooglePlayIconComponent: React.FC<GooglePlayIconComponentProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z"></path><path fill="currentColor" d="M20.25 10.7a1.5 1.5 0 0 1 0 2.599l-15 8.66A1.5 1.5 0 0 1 3 20.66V3.34a1.5 1.5 0 0 1 2.25-1.3zM18.5 12l-3.223-1.861-1.857 1.86 1.857 1.862zM6.644 18.795l6.74-4-1.376-1.379zm5.364-8.211 1.376-1.38-6.74-3.999zM5 6.389V17.61L10.596 12z"></path></g></svg>
  );
};
