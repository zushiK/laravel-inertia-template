
import React from 'react';

interface Hexagons2IconComponentProps {
  className?: string;
}

export const Hexagons2IconComponent: React.FC<Hexagons2IconComponentProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z"></path><path fill="currentColor" d="m13 2.423 3.33 1.922a2 2 0 0 1 1 1.732v3.846l3.33 1.922a2 2 0 0 1 1 1.732v3.846a2 2 0 0 1-1 1.732l-3.33 1.922a2 2 0 0 1-2 0L12 19.155l-3.33 1.922a2 2 0 0 1-2 0l-3.33-1.922a2 2 0 0 1-1-1.732v-3.846a2 2 0 0 1 1-1.732l3.33-1.922V6.077a2 2 0 0 1 1-1.732L11 2.423a2 2 0 0 1 2 0m-5.33 9.232-3.33 1.922v3.846l3.33 1.922L11 17.423v-3.846zm11.99 1.922-3.33-1.922L13 13.577v3.846l3.33 1.922 3.33-1.922zM12 4.155 8.67 6.077v3.846L12 11.845l3.33-1.922V6.077z"></path></g></svg>
  );
};
