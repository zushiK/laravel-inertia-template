
import React from 'react';

interface AirBalloonIconComponentProps {
  className?: string;
}

export const AirBalloonIconComponent: React.FC<AirBalloonIconComponentProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z"></path><path fill="currentColor" d="M13 19a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1ZM12 2a8 8 0 0 1 8 8c0 2.856-1.431 5.106-3.074 6.612a10.666 10.666 0 0 1-2.556 1.743c-.818.392-1.66.645-2.37.645l-.241-.01c-.656-.048-1.402-.287-2.129-.635a10.666 10.666 0 0 1-2.556-1.743C5.431 15.106 4 12.856 4 10a8 8 0 0 1 8-8m0 2.82c-.663 1.19-1.5 3.188-1.5 5.68 0 2.492.837 4.49 1.5 5.681.663-1.19 1.5-3.189 1.5-5.68 0-2.493-.837-4.491-1.5-5.682Zm-2.012-.474A6.002 6.002 0 0 0 6 10c0 2.144 1.069 3.894 2.426 5.138a8.97 8.97 0 0 0 1.313.998A13.651 13.651 0 0 1 8.5 10.5c0-2.6.77-4.73 1.488-6.154m4.024 0C14.73 5.769 15.5 7.9 15.5 10.5c0 2.3-.603 4.234-1.24 5.636a8.945 8.945 0 0 0 1.314-.998C16.931 13.894 18 12.144 18 10a6.002 6.002 0 0 0-3.988-5.654"></path></g></svg>
  );
};
