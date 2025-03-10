
import React from 'react';

interface LoadingIconComponentProps {
  className?: string;
}

export const LoadingIconComponent: React.FC<LoadingIconComponentProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><linearGradient id="a" x1="50%" x2="50%" y1="5.271%" y2="91.793%"><stop offset="0%" stop-color="#09244B"></stop><stop offset="100%" stop-color="#09244B" stop-opacity=".55"></stop></linearGradient><linearGradient id="b" x1="50%" x2="50%" y1="8.877%" y2="90.415%"><stop offset="0%" stop-color="#09244B" stop-opacity="0"></stop><stop offset="100%" stop-color="#09244B" stop-opacity=".55"></stop></linearGradient></defs><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z"></path><path fill="currentColor" d="M8.886.006a1 1 0 0 1 .22 1.988A8.001 8.001 0 0 0 10 17.944v2c-5.523 0-10-4.476-10-10C0 4.838 3.848.566 8.886.007Z" transform="translate(2 2.055)"></path><path fill="currentColor" d="M14.322 1.985a1 1 0 0 1 1.392-.248A9.988 9.988 0 0 1 20 9.945c0 5.523-4.477 10-10 10v-2a8 8 0 0 0 4.57-14.567 1 1 0 0 1-.248-1.393" transform="translate(2 2.055)"></path></g></svg>
  );
};
