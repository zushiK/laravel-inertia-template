
import React from 'react';

interface Layout9IconComponentProps {
  className?: string;
}

export const Layout9IconComponent: React.FC<Layout9IconComponentProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path fill="currentColor" d="M19 3a2 2 0 0 1 1.995 1.85L21 5v14a2 2 0 0 1-1.85 1.995L19 21H5a2 2 0 0 1-1.995-1.85L3 19V5a2 2 0 0 1 1.85-1.995L5 3zm0 2h-6v14h6zm-8 11H5v3h6zm0-6H5v4h6zm0-5H5v3h6z"></path></g></svg>
  );
};
