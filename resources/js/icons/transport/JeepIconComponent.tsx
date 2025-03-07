
import React from 'react';

interface JeepIconComponentProps {
  className?: string;
}

export const JeepIconComponent: React.FC<JeepIconComponentProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path fill="currentColor" d="M12.868 5a3 3 0 0 1 2.572 1.457l2.167 3.611 2.641.33A2 2 0 0 1 22 12.383V15a3.001 3.001 0 0 1-2.128 2.872A3.001 3.001 0 0 1 14.17 18H9.829a3.001 3.001 0 0 1-5.7-.128A3.001 3.001 0 0 1 2 15v-3.807a2 2 0 0 1 .143-.743l1.426-3.564A3 3 0 0 1 6.354 5zM17 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2M7 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2m10-4.026V12H4v3c0 .276.112.526.292.707a3 3 0 0 1 5.47.12L9.83 16h4.342a3.001 3.001 0 0 1 5.537-.293c.15-.151.253-.35.283-.571L20 15v-2.617l-2.641-.33a2.007 2.007 0 0 1-.242-.046zM12.868 7H11v3h4.234l-1.509-2.514A1 1 0 0 0 12.868 7M9 7H6.354a1 1 0 0 0-.928.629L4.477 10H9z"></path></g></svg>
  );
};
