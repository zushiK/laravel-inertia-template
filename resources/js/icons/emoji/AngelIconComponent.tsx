
import React from 'react';

interface AngelIconComponentProps {
  className?: string;
}

export const AngelIconComponent: React.FC<AngelIconComponentProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z"></path><path fill="currentColor" d="M21.43 8.667A9.984 9.984 0 0 1 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12c0-1.167.2-2.29.57-3.333a1 1 0 1 1 1.885.666 8 8 0 1 0 15.09 0 1 1 0 0 1 1.886-.666Zm-6.034 6.671a1 1 0 0 1-.088 1.412A4.984 4.984 0 0 1 12 18a4.984 4.984 0 0 1-3.308-1.25 1 1 0 1 1 1.324-1.5c.53.468 1.223.75 1.984.75.761 0 1.455-.282 1.984-.75a1 1 0 0 1 1.412.088M8.5 10c1.087 0 1.957.68 2.394 1.552a1 1 0 0 1-1.73.997l-.058-.101C8.944 12.124 8.696 12 8.5 12c-.17 0-.382.095-.541.336l-.065.112a1 1 0 0 1-1.788-.896C6.542 10.68 7.413 10 8.5 10m7 0c1.087 0 1.957.68 2.394 1.552a1 1 0 0 1-1.73.997l-.058-.101c-.162-.324-.41-.448-.606-.448-.17 0-.382.095-.541.336l-.065.112a1 1 0 1 1-1.788-.896C13.543 10.68 14.413 10 15.5 10M12 2c2.536 0 4.862.228 6.58.61.852.189 1.61.428 2.178.726.283.15.569.338.795.584.23.25.447.616.447 1.08 0 .464-.216.83-.447 1.08a2.919 2.919 0 0 1-.795.584c-.569.298-1.326.537-2.177.726C16.862 7.772 14.536 8 12 8c-2.536 0-4.862-.228-6.58-.61-.852-.189-1.61-.428-2.178-.726a2.919 2.919 0 0 1-.795-.584C2.217 5.83 2 5.464 2 5c0-.464.216-.83.447-1.08.226-.246.512-.435.795-.584.569-.298 1.326-.537 2.177-.726C7.138 2.228 9.464 2 12 2m0 2c-2.435 0-4.609.22-6.147.562l-.432.102c-1.105.283-.96.465.432.774C7.391 5.78 9.565 6 12 6s4.609-.22 6.147-.562l.432-.102c1.105-.283.96-.465-.432-.774C16.609 4.22 14.435 4 12 4"></path></g></svg>
  );
};
