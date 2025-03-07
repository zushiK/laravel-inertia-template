
import React from 'react';

interface Layout5IconComponentProps {
  className?: string;
}

export const Layout5IconComponent: React.FC<Layout5IconComponentProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path fill="currentColor" d="M19 3a2 2 0 0 1 1.995 1.85L21 5v14a2 2 0 0 1-1.85 1.995L19 21H5a2 2 0 0 1-1.995-1.85L3 19V5a2 2 0 0 1 1.85-1.995L5 3zm0 7H5v9h14zm-3 5a1 1 0 0 1 .117 1.993L16 17H8a1 1 0 0 1-.117-1.993L8 15zm0-3a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zm3-7H5v3h14z"></path></g></svg>
  );
};
