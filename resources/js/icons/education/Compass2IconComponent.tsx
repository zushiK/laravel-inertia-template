
import React from 'react';

interface Compass2IconComponentProps {
  className?: string;
}

export const Compass2IconComponent: React.FC<Compass2IconComponentProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z"></path><path fill="currentColor" d="M12 2a1 1 0 0 1 .993.883L13 3v2.17a3.001 3.001 0 0 1 1.093 4.98l-.144.131 1.834 4.77a8.034 8.034 0 0 0 2.18-1.718 1 1 0 1 1 1.49 1.334 10.04 10.04 0 0 1-2.578 2.066l-.37.197 1.428 3.711a1 1 0 0 1-1.818.824l-.048-.106-1.428-3.711a10.052 10.052 0 0 1-4.915.092l-.363-.092-1.428 3.711a1 1 0 0 1-1.902-.607l.036-.111 3.984-10.36a3 3 0 0 1 .776-5.043L11 5.17V3a1 1 0 0 1 1-1m1.917 13.77-1.835-4.771L12 11l-.082-.001-1.835 4.77A8.02 8.02 0 0 0 12 16c.66 0 1.303-.08 1.917-.23M12 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2"></path></g></svg>
  );
};
