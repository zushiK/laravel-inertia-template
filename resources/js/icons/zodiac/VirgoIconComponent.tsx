
import React from 'react';

interface VirgoIconComponentProps {
  className?: string;
}

export const VirgoIconComponent: React.FC<VirgoIconComponentProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z"></path><path fill="currentColor" d="M3 4a1 1 0 0 1 1-1h1c.768 0 1.47.289 2 .764A2.989 2.989 0 0 1 9 3c.768 0 1.47.289 2 .764A3 3 0 0 1 16 6v4.652A3.344 3.344 0 0 1 18 10c1.453 0 2.594.676 3.126 1.833.504 1.098.364 2.424-.232 3.614-.664 1.329-1.858 2.252-3.078 2.904.628.41 1.378.649 2.184.649a1 1 0 1 1 0 2 5.981 5.981 0 0 1-4.245-1.76c-.949.333-1.846.563-2.513.73a1 1 0 1 1-.485-1.94 30.148 30.148 0 0 0 1.802-.499A5.977 5.977 0 0 1 14 15V6a1 1 0 1 0-2 0v9a1 1 0 1 1-2 0V6a1 1 0 0 0-2 0v9a1 1 0 1 1-2 0V6a1 1 0 0 0-1-1H4a1 1 0 0 1-1-1m13 11c0 .651.156 1.266.432 1.81 1.234-.585 2.208-1.326 2.674-2.257.404-.81.387-1.484.202-1.886C19.151 12.324 18.792 12 18 12c-.55 0-1.022.306-1.404.912A4.143 4.143 0 0 0 16 15"></path></g></svg>
  );
};
