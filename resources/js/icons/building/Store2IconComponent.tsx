
import React from 'react';

interface Store2IconComponentProps {
  className?: string;
}

export const Store2IconComponent: React.FC<Store2IconComponentProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path fill="currentColor" d="M18 2a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm-6 12h-1a1 1 0 0 0-1 1v4h3v-4a1 1 0 0 0-1-1m2.14-5.203A3.492 3.492 0 0 1 11.5 10a3.492 3.492 0 0 1-2.64-1.203A3.988 3.988 0 0 1 6 10a3.982 3.982 0 0 1-2-.535V18a1 1 0 0 0 1 1h3v-4a3 3 0 0 1 3-3h1a3 3 0 0 1 3 3v4h3a1 1 0 0 0 1-1V9.465A3.981 3.981 0 0 1 17 10c-1.12 0-2.133-.46-2.86-1.203M18 4H5a1 1 0 0 0-.993.883L4 5v1a2 2 0 0 0 3.995.15L8 6a1 1 0 0 1 1.993-.117L10 6v.5a1.5 1.5 0 0 0 2.993.144L13 6.5V6a1 1 0 1 1 2 0 2 2 0 0 0 3.995.15L19 6V5a1 1 0 0 0-.883-.993z"></path></g></svg>
  );
};
