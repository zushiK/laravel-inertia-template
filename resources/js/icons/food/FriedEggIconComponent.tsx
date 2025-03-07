
import React from 'react';

interface FriedEggIconComponentProps {
  className?: string;
}

export const FriedEggIconComponent: React.FC<FriedEggIconComponentProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z"></path><path fill="currentColor" d="M4 12c0-2.694 1.902-5.217 4.445-6.716 2.584-1.523 5.34-1.726 6.945-.492.472.363.733.96.946 1.85.052.216.098.436.146.667l.015.076c.042.204.086.417.134.625.105.462.244.972.474 1.435.345.695.84 1.285 1.27 1.785l.118.136c.405.47.754.875 1.03 1.325.288.468.475.954.507 1.535.032.589-.091 1.35-.544 2.367-1.29 2.904-5.005 4.039-8.732 3.148C7.092 18.865 4 16.144 4 12m12.61-8.793c-2.562-1.97-6.306-1.34-9.18.354C4.515 5.279 2 8.359 2 12c0 5.355 4.037 8.67 8.29 9.686 4.187 1.001 9.172-.114 11.024-4.28.547-1.233.766-2.312.713-3.289-.054-.985-.38-1.79-.8-2.474-.366-.595-.82-1.122-1.21-1.572l-.124-.144c-.439-.51-.777-.928-.998-1.372-.12-.244-.217-.565-.314-.99a28.897 28.897 0 0 1-.125-.585l-.016-.076c-.048-.232-.1-.479-.159-.727-.23-.964-.619-2.16-1.671-2.97M10 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0m2-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8"></path></g></svg>
  );
};
