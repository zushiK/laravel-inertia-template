
import React from 'react';

interface BirdIconComponentProps {
  className?: string;
}

export const BirdIconComponent: React.FC<BirdIconComponentProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z"></path><path fill="currentColor" d="M15 2a5 5 0 0 1 4.49 2.799l.094.201H21a1 1 0 0 1 .9 1.436l-.068.119-1.552 2.327a1 1 0 0 0-.166.606l.014.128.141.774c.989 5.438-3.108 10.451-8.593 10.606l-.262.004H3a1 1 0 0 1-.832-1.555l3.992-6.01 2.012-2.995 1.441-2.163A2.3 2.3 0 0 0 10 7a5 5 0 0 1 5-5m0 2a3 3 0 0 0-2.995 2.824L12 7a4.3 4.3 0 0 1-.493 2A3.5 3.5 0 0 1 15 12.5c0 1.368-.675 2.43-1.582 3.227-.889.78-2.051 1.356-3.2 1.806-.826.323-1.686.596-2.489.835l-1.945.565L5.56 19h5.853c4.368 0 7.669-3.955 6.887-8.252l-.14-.774a3 3 0 0 1 .455-2.201L19.131 7c-.54 0-1.072-.154-1.226-.75A3.002 3.002 0 0 0 15 4m-3.5 7c-.271 0-.663.07-1.036.209-.375.14-.582.295-.654.378l-3.384 5.077c.998-.287 2.065-.603 3.063-.994 1.067-.417 1.978-.892 2.609-1.446.612-.537.902-1.092.902-1.724a1.5 1.5 0 0 0-1.5-1.5M15 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"></path></g></svg>
  );
};
