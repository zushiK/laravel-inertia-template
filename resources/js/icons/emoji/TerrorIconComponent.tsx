
import React from 'react';

interface TerrorIconComponentProps {
  className?: string;
}

export const TerrorIconComponent: React.FC<TerrorIconComponentProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z"></path><path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16m0 7a3 3 0 0 1 3 3v1a3 3 0 1 1-6 0v-1a3 3 0 0 1 3-3m0 2a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0v-1a1 1 0 0 0-1-1m-1.995-5.344c.493.492.489 1.146.38 1.583-.115.46-.383.895-.733 1.245-.35.35-.785.618-1.245.733-.437.109-1.091.113-1.584-.38-.492-.492-.488-1.146-.379-1.583.115-.46.383-.895.733-1.245.35-.35.785-.618 1.245-.733.437-.109 1.09-.113 1.583.38m3.99 0c.492-.493 1.146-.489 1.583-.38.46.115.895.383 1.245.733.35.35.618.785.733 1.245.11.437.113 1.091-.38 1.584-.492.492-1.146.488-1.583.379-.46-.115-.895-.383-1.245-.733-.35-.35-.618-.785-.732-1.245-.11-.437-.114-1.091.379-1.583"></path></g></svg>
  );
};
