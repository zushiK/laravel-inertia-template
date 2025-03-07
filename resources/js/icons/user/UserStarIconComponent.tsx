
import React from 'react';

interface UserStarIconComponentProps {
  className?: string;
}

export const UserStarIconComponent: React.FC<UserStarIconComponentProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z"></path><path fill="currentColor" d="M11 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6M6 7a5 5 0 1 1 10 0A5 5 0 0 1 6 7M4.413 17.601c-.323.41-.413.72-.413.899 0 .122.037.251.255.426.249.2.682.407 1.344.582C6.917 19.858 8.811 20 11 20c.222 0 .441-.002.658-.005a1 1 0 0 1 .027 2c-.226.003-.455.005-.685.005-2.229 0-4.335-.14-5.913-.558-.785-.208-1.524-.506-2.084-.956C2.41 20.01 2 19.345 2 18.5c0-.787.358-1.523.844-2.139.494-.625 1.177-1.2 1.978-1.69C6.425 13.695 8.605 13 11 13c.447 0 .887.024 1.316.07a1 1 0 0 1-.211 1.989C11.745 15.02 11.375 15 11 15c-2.023 0-3.843.59-5.136 1.379-.647.394-1.135.822-1.45 1.222Zm14.451-3.604a1 1 0 0 0-1.728 0l-.91 1.562-1.766.382a1 1 0 0 0-.534 1.644l1.204 1.348-.182 1.798a1 1 0 0 0 1.398 1.016l1.654-.73 1.654.73a1 1 0 0 0 1.398-1.016l-.182-1.799 1.204-1.347a1 1 0 0 0-.534-1.644l-1.766-.382zm-1.131 2.949.267-.46.267.46a1 1 0 0 0 .653.474l.52.112-.355.397a1 1 0 0 0-.25.767l.054.528-.486-.214a1 1 0 0 0-.806 0l-.486.214.053-.528a1 1 0 0 0-.25-.767l-.353-.397.52-.112a1 1 0 0 0 .652-.474"></path></g></svg>
  );
};
