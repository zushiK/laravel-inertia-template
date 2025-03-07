
import React from 'react';

interface TextIconComponentProps {
  className?: string;
}

export const TextIconComponent: React.FC<TextIconComponentProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none"><path d="M0 0h24v24H0z"></path><path fill="currentColor" d="M5 4a1 1 0 0 0 0 2h6v14a1 1 0 1 0 2 0V6h6a1 1 0 1 0 0-2z"></path></g></svg>
  );
};
