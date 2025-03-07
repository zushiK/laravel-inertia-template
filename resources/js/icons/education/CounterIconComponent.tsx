
import React from 'react';

interface CounterIconComponentProps {
  className?: string;
}

export const CounterIconComponent: React.FC<CounterIconComponentProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z"></path><path fill="currentColor" d="M19 3a2 2 0 0 1 1.995 1.85L21 5v14a2 2 0 0 1-1.85 1.995L19 21H5a2 2 0 0 1-1.995-1.85L3 19V5a2 2 0 0 1 1.85-1.995L5 3zm0 2H5v14h14zM7.793 13.379l.707.707.707-.707a1 1 0 0 1 1.414 1.414l-.707.707.707.707a1 1 0 0 1-1.414 1.414l-.707-.707-.707.707a1 1 0 0 1-1.414-1.414l.707-.707-.707-.707a1 1 0 1 1 1.414-1.414M17 15.75a1 1 0 0 1 .117 1.993L17 17.75h-3a1 1 0 0 1-.117-1.993L14 15.75zm0-2.5a1 1 0 1 1 0 2h-3a1 1 0 1 1 0-2zM15.5 6.5a1 1 0 0 1 1 1V8h.5a1 1 0 1 1 0 2h-.5v.5a1 1 0 1 1-2 0V10H14a1 1 0 1 1 0-2h.5v-.5a1 1 0 0 1 1-1M10 8a1 1 0 1 1 0 2H7a1 1 0 0 1 0-2z"></path></g></svg>
  );
};
