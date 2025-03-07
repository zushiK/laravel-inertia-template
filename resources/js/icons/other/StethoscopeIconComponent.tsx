
import React from 'react';

interface StethoscopeIconComponentProps {
  className?: string;
}

export const StethoscopeIconComponent: React.FC<StethoscopeIconComponentProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z"></path><path fill="currentColor" d="M8 4a1 1 0 0 0-2 0 3 3 0 0 0-3 3v2a6.002 6.002 0 0 0 5 5.917V15a6 6 0 0 0 12 0v-1.17a3.001 3.001 0 1 0-2 0V15a4 4 0 0 1-8 0v-.083A6.002 6.002 0 0 0 15 9V7a3 3 0 0 0-3-3 1 1 0 1 0-2 0v2a1 1 0 1 0 2 0 1 1 0 0 1 1 1v2a4 4 0 0 1-8 0V7a1 1 0 0 1 1-1 1 1 0 0 0 2 0zm11 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2"></path></g></svg>
  );
};
