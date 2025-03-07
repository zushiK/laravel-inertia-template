
import React from 'react';

interface DeskLampIconComponentProps {
  className?: string;
}

export const DeskLampIconComponent: React.FC<DeskLampIconComponentProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z"></path><path fill="currentColor" d="M15.28 2a2 2 0 0 1 1.84 1.218l.057.15 3.552 10.658a1.5 1.5 0 0 1-1.29 1.968l-.133.006H13v4h3a1 1 0 0 1 .117 1.993L16 22H8a1 1 0 0 1-.117-1.993L8 20h3v-4H4.694a1.5 1.5 0 0 1-1.46-1.848l.037-.126L6.823 3.368a2 2 0 0 1 1.738-1.362L8.72 2h6.558ZM16 16a1 1 0 1 1 0 2 1 1 0 0 1 0-2m-.72-12H8.72L5.388 14h13.226z"></path></g></svg>
  );
};
