
import React from 'react';

interface Document2IconComponentProps {
  className?: string;
}

export const Document2IconComponent: React.FC<Document2IconComponentProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z"></path><path fill="currentColor" d="M13.586 2A2 2 0 0 1 15 2.586L19.414 7A2 2 0 0 1 20 8.414V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2ZM12 4H6v16h12V10h-4.5A1.5 1.5 0 0 1 12 8.5zm3 10a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2zm-5-4a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2Zm4-5.586V8h3.586z"></path></g></svg>
  );
};
