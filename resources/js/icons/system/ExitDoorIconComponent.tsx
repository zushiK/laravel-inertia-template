
import React from 'react';

interface ExitDoorIconComponentProps {
  className?: string;
}

export const ExitDoorIconComponent: React.FC<ExitDoorIconComponentProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z"></path><path fill="currentColor" d="M11.5 3a1 1 0 0 1 .117 1.993L11.5 5H6v14h10v-6.5a1 1 0 0 1 1.993-.117L18 12.5V19h2a1 1 0 0 1 .117 1.993L20 21H4a1 1 0 0 1-.117-1.993L4 19V5a2 2 0 0 1 1.85-1.995L6 3zm2 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m5.087-6.828 2.12 2.12a1 1 0 0 1 0 1.413l-2.12 2.123a1 1 0 0 1-1.415-1.413l.416-.417H14.38a1 1 0 1 1 0-2h3.205l-.412-.412a1 1 0 0 1 1.414-1.414"></path></g></svg>
  );
};
