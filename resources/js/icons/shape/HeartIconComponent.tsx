
import React from 'react';

interface HeartIconComponentProps {
  className?: string;
}

export const HeartIconComponent: React.FC<HeartIconComponentProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z"></path><path fill="currentColor" d="M18.494 3.801c2.095 1.221 3.569 3.7 3.504 6.592-.081 3.61-2.89 6.794-7.679 9.638-.71.422-1.458.969-2.319.969-.845 0-1.625-.557-2.32-.97-4.787-2.843-7.597-6.028-7.678-9.637-.065-2.892 1.409-5.37 3.504-6.592C7.466 2.66 9.928 2.653 12 4.338c2.072-1.685 4.534-1.679 6.494-.537M17.487 5.53c-1.394-.812-3.136-.783-4.644.743a1.188 1.188 0 0 1-1.686 0c-1.508-1.526-3.25-1.555-4.644-.743-1.444.842-2.56 2.628-2.511 4.82.056 2.511 2.04 5.194 6.7 7.962.408.243.834.554 1.298.683.464-.129.89-.44 1.298-.683 4.66-2.768 6.644-5.45 6.7-7.963.05-2.19-1.067-3.977-2.511-4.819"></path></g></svg>
  );
};
