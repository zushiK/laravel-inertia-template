
import React from 'react';

interface Mountain2IconComponentProps {
  className?: string;
}

export const Mountain2IconComponent: React.FC<Mountain2IconComponentProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z"></path><path fill="currentColor" d="m11.3 5.75 3.499 6.062.902-1.562c.577-1 2.02-1 2.598 0l4.33 7.5A1.5 1.5 0 0 1 21.33 20H17v-.002l-.072.002H3.072a1.5 1.5 0 0 1-1.3-2.25l6.929-12c.577-1 2.02-1 2.598 0M10 12.202l-.945.63-.116.066a1 1 0 0 1-.878 0l-.116-.066-.739-.493L3.938 18h12.124l-3.268-5.66-.74.492-.115.066a1 1 0 0 1-.878 0l-.116-.066zM17 12l-1.046 1.812 2.273 3.938.065.124.051.126h2.121zm-7-4.5-1.792 3.104.292.194.945-.63a1 1 0 0 1 1.11 0l.945.63.292-.194z"></path></g></svg>
  );
};
