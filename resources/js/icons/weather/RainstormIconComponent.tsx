
import React from 'react';

interface RainstormIconComponentProps {
  className?: string;
}

export const RainstormIconComponent: React.FC<RainstormIconComponentProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z"></path><path fill="currentColor" d="M16.868 18.983a1 1 0 0 1 .707 1.225l-.259.966a1 1 0 0 1-1.932-.518l.26-.966a1 1 0 0 1 1.224-.707m-7 0a1 1 0 0 1 .707 1.225l-.259.966a1 1 0 0 1-1.932-.518l.26-.966a1 1 0 0 1 1.224-.707m4.15-2.415a1 1 0 0 1 .73 1.11l-.023.115-.518 1.932a1 1 0 0 1-1.955-.404l.023-.114.518-1.932a1 1 0 0 1 1.225-.707m-7 0a1 1 0 0 1 .707 1.225l-.518 1.932a1 1 0 1 1-1.932-.518l.518-1.932a1 1 0 0 1 1.225-.707m3.885-1.449a1 1 0 0 1 .707 1.225l-.258.966a1 1 0 0 1-1.932-.518l.258-.966a1 1 0 0 1 1.225-.707m7 0a1 1 0 0 1 .707 1.225l-.258.966a1 1 0 0 1-1.932-.518l.258-.966a1 1 0 0 1 1.225-.707M11.5 2a6.502 6.502 0 0 1 6.086 4.212 6.002 6.002 0 0 1 3.214 9.389 1 1 0 0 1-1.6-1.202 4.001 4.001 0 0 0-2.545-6.346 1.01 1.01 0 0 1-.81-.732A4.5 4.5 0 0 0 7.027 9a1.01 1.01 0 0 1-.76 1.09 3.002 3.002 0 0 0-1.97 4.216l.103.193a1 1 0 1 1-1.731 1.002A5 5 0 0 1 5 8.416 6.5 6.5 0 0 1 11.5 2"></path></g></svg>
  );
};
