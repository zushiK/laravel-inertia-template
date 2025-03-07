
import React from 'react';

interface LightSnowIconComponentProps {
  className?: string;
}

export const LightSnowIconComponent: React.FC<LightSnowIconComponentProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z"></path><path fill="currentColor" d="M12 13a1 1 0 0 1 1 1v1.268l1.098-.634a1 1 0 1 1 1 1.732L14 17l1.098.634a1 1 0 1 1-1 1.732L13 18.732V20a1 1 0 1 1-2 0v-1.268l-1.098.634a1 1 0 1 1-1-1.732L10 17l-1.098-.634a1 1 0 1 1 1-1.732l1.098.634V14a1 1 0 0 1 1-1m-.5-11a6.502 6.502 0 0 1 6.086 4.212A6.002 6.002 0 0 1 19.6 16.799a1 1 0 1 1-1.202-1.598 4.001 4.001 0 0 0-1.744-7.147 1.01 1.01 0 0 1-.81-.733A4.5 4.5 0 0 0 7.027 9a1.01 1.01 0 0 1-.76 1.09 3.002 3.002 0 0 0-1.252 5.16 1 1 0 1 1-1.324 1.5A5 5 0 0 1 5 8.416 6.5 6.5 0 0 1 11.5 2"></path></g></svg>
  );
};
