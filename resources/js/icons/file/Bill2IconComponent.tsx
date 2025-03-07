
import React from 'react';

interface Bill2IconComponentProps {
  className?: string;
}

export const Bill2IconComponent: React.FC<Bill2IconComponentProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z"></path><path fill="currentColor" d="M3 5.5A2.5 2.5 0 0 1 5.5 3H18a3 3 0 0 1 3 3v14a1 1 0 0 1-1.524.852l-2.726-1.678-2.726 1.678a1 1 0 0 1-1.048 0l-2.726-1.678-2.726 1.678A1 1 0 0 1 6 20v-6H4a1 1 0 0 1-1-1zm5 12.71 1.726-1.062a1 1 0 0 1 1.048 0l2.726 1.678 2.726-1.678a1 1 0 0 1 1.048 0L19 18.21V6a1 1 0 0 0-1-1H7.95c.033.162.05.329.05.5zM5.5 5a.5.5 0 0 0-.5.5V12h1V5.5a.5.5 0 0 0-.5-.5M10 9a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1"></path></g></svg>
  );
};
