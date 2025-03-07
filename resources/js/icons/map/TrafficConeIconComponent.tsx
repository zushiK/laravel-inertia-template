
import React from 'react';

interface TrafficConeIconComponentProps {
  className?: string;
}

export const TrafficConeIconComponent: React.FC<TrafficConeIconComponentProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z"></path><path fill="currentColor" d="M12.916 3.6a1 1 0 0 0-1.832 0L4.346 19H4a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2h-.346zM17.471 19l-.875-2H7.404l-.875 2zm-9.192-4h7.442l-1.312-3H9.592zm2.188-5h3.066L12 6.495z"></path></g></svg>
  );
};
