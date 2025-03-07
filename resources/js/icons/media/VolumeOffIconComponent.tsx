
import React from 'react';

interface VolumeOffIconComponentProps {
  className?: string;
}

export const VolumeOffIconComponent: React.FC<VolumeOffIconComponentProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z"></path><path fill="currentColor" d="m4.596 8 2 2H4v4h2.68a2 2 0 0 1 1.162.373L13 18.057v-1.653l2 2v1.402a1.1 1.1 0 0 1-1.74.895L6.68 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2zm8.665-4.7a1.1 1.1 0 0 1 1.733.78l.006.114v9.392l1.113 1.113a1 1 0 0 1 .132-1.119l.088-.089c.41-.368.667-.899.667-1.491a1.99 1.99 0 0 0-.548-1.376l-.119-.115a1 1 0 1 1 1.334-1.49A3.993 3.993 0 0 1 19 12a3.99 3.99 0 0 1-1.333 2.981 1 1 0 0 1-1.007.196l-.123-.054 1.47 1.47a.999.999 0 0 1 .326-.866A4.985 4.985 0 0 0 20 12c0-1.48-.642-2.81-1.667-3.727a1 1 0 1 1 1.334-1.49A6.985 6.985 0 0 1 22 12a6.985 6.985 0 0 1-2.333 5.217.996.996 0 0 1-.669.255l-.119-.007 1.606 1.606a1 1 0 0 1-1.32 1.497l-.094-.083L3.515 4.93a1 1 0 0 1 1.32-1.497l.094.083L8.275 6.86l4.986-3.562ZM13 5.942 9.709 8.294 13 11.586z"></path></g></svg>
  );
};
