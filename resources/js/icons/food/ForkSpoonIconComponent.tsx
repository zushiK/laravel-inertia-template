
import React from 'react';

interface ForkSpoonIconComponentProps {
  className?: string;
}

export const ForkSpoonIconComponent: React.FC<ForkSpoonIconComponentProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z"></path><path fill="currentColor" d="M18.41 3.287a1 1 0 0 1-.233 1.395l-2.101 1.501a1.965 1.965 0 0 0-.762 2.089l3.343-3.343a1 1 0 1 1 1.414 1.414l-3.343 3.343a1.965 1.965 0 0 0 2.089-.762l1.501-2.101a1 1 0 0 1 1.627 1.162l-1.5 2.102a3.967 3.967 0 0 1-5.234 1.116L12.914 13.5l4.157 4.157a1 1 0 0 1-1.414 1.414L11.5 14.914l-4.157 4.157a1 1 0 1 1-1.414-1.414l4.157-4.157-1.61-1.61c-.463.25-1.017.44-1.606.509a3.891 3.891 0 0 1-3.278-1.15C2.663 10.319 2.132 9.15 2 8.027c-.13-1.105.12-2.289.93-3.098.809-.81 1.992-1.06 3.097-.93 1.123.133 2.293.664 3.222 1.593a3.891 3.891 0 0 1 1.15 3.278 4.503 4.503 0 0 1-.51 1.605l1.611 1.61 2.297-2.296a3.967 3.967 0 0 1 1.116-5.233l2.102-1.501a1 1 0 0 1 1.395.232M3.986 7.793c.08.68.411 1.433 1.02 2.041.522.522 1.099.64 1.631.578.58-.068 1.056-.348 1.242-.533.186-.186.465-.662.533-1.242.063-.533-.055-1.11-.577-1.631-.61-.609-1.362-.94-2.042-1.02-.698-.082-1.199.106-1.45.357-.25.251-.439.751-.357 1.45"></path></g></svg>
  );
};
