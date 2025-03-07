
import React from 'react';

interface SpoonIconComponentProps {
  className?: string;
}

export const SpoonIconComponent: React.FC<SpoonIconComponentProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z"></path><path fill="currentColor" d="m7.705 4.422 6.034 7.608c1.307-.571 3.3-.648 4.979 1.03 1.015 1.016 1.647 2.258 1.863 3.44.21 1.15.049 2.426-.803 3.278-.851.852-2.128 1.013-3.277.803-1.182-.216-2.425-.848-3.44-1.864-1.68-1.679-1.602-3.671-1.031-4.978L4.422 7.705a2.337 2.337 0 1 1 3.283-3.283m9.598 10.053c-1.2-1.2-2.572-.822-3.091-.431l-.092.075-.029.035c-.405.466-.864 1.9.384 3.15.741.74 1.62 1.17 2.386 1.31.797.145 1.294-.041 1.503-.25.21-.21.396-.706.25-1.504-.14-.765-.57-1.644-1.31-2.385ZM5.636 5.635a.337.337 0 0 0 .029.503l2.287 1.814-1.814-2.287a.337.337 0 0 0-.502-.03"></path></g></svg>
  );
};
