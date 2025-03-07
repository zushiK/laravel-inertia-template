
import React from 'react';

interface DrizzleIconComponentProps {
  className?: string;
}

export const DrizzleIconComponent: React.FC<DrizzleIconComponentProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z"></path><path fill="currentColor" d="M10.924 15.792a1 1 0 0 1 1.932.518l-.259.966a1 1 0 0 1-1.932-.518zM11.5 2a6.502 6.502 0 0 1 6.086 4.212 6.002 6.002 0 0 1-.387 11.668 1 1 0 1 1-.398-1.96 4.002 4.002 0 0 0-.15-7.868 1 1 0 0 1-.806-.726 4.5 4.5 0 0 0-8.817 1.68 1 1 0 0 1-.753 1.082 3.002 3.002 0 0 0-.169 5.777l.169.047a1 1 0 0 1-.481 1.941A5.002 5.002 0 0 1 5 8.416 6.5 6.5 0 0 1 11.5 2m.32 18.174a1 1 0 1 0-1.931-.518l-.259.966a1 1 0 0 0 1.932.518z"></path></g></svg>
  );
};
