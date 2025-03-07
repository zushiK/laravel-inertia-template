
import React from 'react';

interface BulbIconComponentProps {
  className?: string;
}

export const BulbIconComponent: React.FC<BulbIconComponentProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z"></path><path fill="currentColor" d="M13 20a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2zM12 2c4.41 0 8 3.543 8 7.933 0 3.006-1.522 5.196-2.78 6.494l-.284.283-.27.252-.252.22-.33.27-.328.244c-.196.138-.34.329-.466.535l-.145.251-.141.252c-.24.412-.518.766-1.111.766h-3.786c-.593 0-.871-.354-1.11-.766l-.213-.378c-.145-.253-.305-.494-.54-.66l-.232-.171-.199-.155-.227-.188-.252-.22-.27-.252-.285-.283C5.522 15.129 4 12.939 4 9.933 4 5.543 7.59 2 12 2m0 2C8.677 4 6 6.665 6 9.933c0 2.624 1.533 4.494 2.593 5.471l.245.218.22.182.27.208.072.052c.315.222.549.531.762.854l.373.582h2.93l.373-.582c.213-.323.447-.632.762-.854l.243-.182.206-.165.233-.2C16.342 14.576 18 12.662 18 9.933 18 6.665 15.323 4 12 4m.293 2.293a1 1 0 0 1 1.497 1.32l-.083.094L12.414 9l1.286 1.286c.364.364.392.937.084 1.333l-.084.095-1.993 1.993a1 1 0 0 1-1.497-1.32l.083-.094L11.586 11 10.3 9.714a1.01 1.01 0 0 1-.084-1.333l.084-.095z"></path></g></svg>
  );
};
