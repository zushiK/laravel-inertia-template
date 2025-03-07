
import React from 'react';

interface TShirtIconComponentProps {
  className?: string;
}

export const TShirtIconComponent: React.FC<TShirtIconComponentProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z"></path><path fill="currentColor" d="M7.121 5.293 3.414 9l1.478 1.478.788-1.052c.598-.797 1.867-.339 1.817.657l-.393 7.867A1 1 0 0 0 8.102 19h7.796a1 1 0 0 0 .998-1.05l-.393-7.867c-.05-.996 1.219-1.454 1.817-.657l.788 1.052L20.586 9l-3.707-3.707C16.5 4.915 15.95 5 15.465 5A3.998 3.998 0 0 1 12 7a3.998 3.998 0 0 1-3.465-2c-.486 0-1.036-.085-1.414.293M5.707 3.879A3 3 0 0 1 7.828 3H9.1c.472 0 .872.297 1.03.71a2.001 2.001 0 0 0 3.74 0c.158-.413.558-.71 1.03-.71h1.272a3 3 0 0 1 2.12.879L22 7.586a2 2 0 0 1 0 2.828l-1.478 1.478c-.52.52-1.246.689-1.9.526l.272 5.432A3 3 0 0 1 15.898 21H8.102a3 3 0 0 1-2.996-3.15l.272-5.432a1.996 1.996 0 0 1-1.9-.526L2 10.414a2 2 0 0 1 0-2.828z"></path></g></svg>
  );
};
