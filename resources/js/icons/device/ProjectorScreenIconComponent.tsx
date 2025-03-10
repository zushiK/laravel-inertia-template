
import React from 'react';

interface ProjectorScreenIconComponentProps {
  className?: string;
}

export const ProjectorScreenIconComponent: React.FC<ProjectorScreenIconComponentProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z"></path><path fill="currentColor" d="M20 2a1 1 0 0 1 .993.883L21 3v3a1 1 0 0 1-.883.993L20 7h-1v7h1a1 1 0 0 1 .117 1.993L20 16h-7v1.208a2.5 2.5 0 1 1-2.153.073l.153-.073V16H4a1 1 0 0 1-.117-1.993L4 14h1V7H4a1 1 0 0 1-.993-.883L3 6V3a1 1 0 0 1 .883-.993L4 2zm-8 17a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m5-12H7v7h10zm2-3H5v1h14z"></path></g></svg>
  );
};
