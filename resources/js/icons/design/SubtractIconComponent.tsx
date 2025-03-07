
import React from 'react';

interface SubtractIconComponentProps {
  className?: string;
}

export const SubtractIconComponent: React.FC<SubtractIconComponentProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z"></path><path fill="currentColor" d="M15.943 8A1 1 0 0 0 14 8.333V14H8.333A1 1 0 0 0 8 15.943V19a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2zM10 16v3h9v-9h-3v4a2 2 0 0 1-2 2zM3 5a2 2 0 0 1 2-2h.75a1 1 0 0 1 0 2H5v.75a1 1 0 0 1-2 0zm4.75-1a1 1 0 0 1 1-1h1.5a1 1 0 1 1 0 2h-1.5a1 1 0 0 1-1-1m4.5 0a1 1 0 0 1 1-1H14a2 2 0 0 1 2 2v.667a1 1 0 1 1-2 0V5h-.75a1 1 0 0 1-1-1M4 7.75a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0v-1.5a1 1 0 0 1 1-1m0 4.5a1 1 0 0 1 1 1V14h.667a1 1 0 1 1 0 2H5a2 2 0 0 1-2-2v-.75a1 1 0 0 1 1-1"></path></g></svg>
  );
};
