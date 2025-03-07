
import React from 'react';

interface WastebasketIconComponentProps {
  className?: string;
}

export const WastebasketIconComponent: React.FC<WastebasketIconComponentProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z"></path><path fill="currentColor" d="M12 3c-2.281 0-4.387.288-5.955.778-.778.243-1.48.553-2.01.945-.785.58-1.172 1.465-1.023 2.43l1.535 9.981c.339 2.199 1.904 4.16 4.247 4.567.962.167 2.077.299 3.206.299 1.13 0 2.244-.132 3.206-.299 2.343-.406 3.909-2.368 4.247-4.567l1.535-9.982c.149-.964-.238-1.85-1.022-2.43-.53-.39-1.233-.701-2.01-.944C16.385 3.288 14.281 3 12 3M6.641 7.313C7.97 7.728 9.863 8 12.001 8c2.136 0 4.03-.272 5.358-.687 1.642-.513 1.785-1.068 0-1.626C16.032 5.272 14.137 5 12 5s-4.031.272-5.359.687C4.856 6.245 5 6.8 6.641 7.313m12.045 1.65C16.594 9.804 14.232 10 12 10s-4.594-.197-6.686-1.036l1.21 7.866c.232 1.507 1.262 2.666 2.612 2.9.888.155 1.883.27 2.864.27.981 0 1.977-.115 2.864-.27 1.35-.234 2.38-1.393 2.612-2.9z"></path></g></svg>
  );
};
