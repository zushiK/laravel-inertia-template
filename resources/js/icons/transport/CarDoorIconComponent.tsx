
import React from 'react';

interface CarDoorIconComponentProps {
  className?: string;
}

export const CarDoorIconComponent: React.FC<CarDoorIconComponentProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z"></path><path fill="currentColor" fill-rule="nonzero" d="M12 2c1.751 0 3.19.592 4.168 1.159C17.492 3.926 18 5.369 18 6.657v1.71a29.634 29.634 0 0 1 2.624 1.852 1 1 0 0 1-1.248 1.562A25.958 25.958 0 0 0 18 10.769v6.817A4.414 4.414 0 0 1 13.586 22h-3.172A4.414 4.414 0 0 1 6 17.586v-6.817c-.467.324-.93.657-1.375 1.012a1 1 0 0 1-1.25-1.562A29.616 29.616 0 0 1 6 8.368V6.657c0-1.289.508-2.731 1.832-3.498C8.81 2.592 10.25 2 12 2m4 9.414-.121.122-.136.144a3 3 0 0 0-.735 1.759l-.008.218V17l-.005.15a2 2 0 0 1-1.838 1.844L13 19h-2l-.15-.005a2 2 0 0 1-1.844-1.838L9 17v-3.343l-.007-.198a3 3 0 0 0-.723-1.764l-.149-.16-.121-.12v6.17l.008.192a2.414 2.414 0 0 0 2.215 2.215l.191.008h3.172l.191-.008a2.414 2.414 0 0 0 2.215-2.215l.008-.191zM12 8c-.554 0-1.284.192-2.128.547-.284.12-.572.254-.859.398l-.43.223.953.953a5 5 0 0 1 1.457 3.271l.007.265V17h2v-3.343a5 5 0 0 1 1.282-3.344l.182-.192.953-.953a15.16 15.16 0 0 0-1.29-.621C13.285 8.192 12.555 8 12 8m0-4c-1.297 0-2.39.44-3.165.89C8.323 5.185 8 5.823 8 6.656v.56c.361-.185.729-.359 1.096-.514C10.034 6.308 11.054 6 12 6s1.966.308 2.904.703c.367.155.735.329 1.096.513v-.56c0-.832-.323-1.47-.835-1.767C14.39 4.44 13.297 4 12 4"></path></g></svg>
  );
};
