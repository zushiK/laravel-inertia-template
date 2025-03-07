
import React from 'react';

interface PrayIconComponentProps {
  className?: string;
}

export const PrayIconComponent: React.FC<PrayIconComponentProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z"></path><path fill="currentColor" d="M13.099 3a2.1 2.1 0 0 1 2.02 1.526l.038.161 1.451 7.255a2 2 0 0 0 1.318 1.502l.158.046 1.696.424a1.5 1.5 0 0 1 1.128 1.611l-.021.139-.694 3.469A2 2 0 0 1 17.83 20.7l-.146-.036-3.057-.874A4.993 4.993 0 0 1 12 17.983a4.993 4.993 0 0 1-2.38 1.73l-.246.077-3.057.874a2 2 0 0 1-2.475-1.384l-.035-.147-.694-3.47a1.5 1.5 0 0 1 .973-1.709l.134-.04 1.696-.424a2 2 0 0 0 1.437-1.388l.039-.16 1.45-7.255A2.099 2.099 0 0 1 12 3.31c.32-.196.696-.31 1.099-.31m4.707 12.482-.655 2.95 1.081.309.6-3.002zm-11.612 0-1.026.257.6 3.002 1.081-.31zM13.099 5a.1.1 0 0 0-.099.099v9.884a3 3 0 0 0 2.003 2.83l.221.068.734-3.301a3.999 3.999 0 0 1-1.311-2.245l-1.45-7.255a.1.1 0 0 0-.098-.08m-2.198 0a.1.1 0 0 0-.097.08l-1.451 7.255a3.998 3.998 0 0 1-1.31 2.245l.733 3.301.048-.014A3 3 0 0 0 11 14.983V5.099A.1.1 0 0 0 10.9 5Z"></path></g></svg>
  );
};
