
import React from 'react';

interface LowTemperatureIconComponentProps {
  className?: string;
}

export const LowTemperatureIconComponent: React.FC<LowTemperatureIconComponentProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z"></path><path fill="currentColor" d="M9 2a3 3 0 0 1 3 3v7.956l.01.021a.34.34 0 0 0 .087.097 5 5 0 1 1-6.193 0 .385.385 0 0 0 .068-.069l.028-.05V5a3 3 0 0 1 3-3m0 2a1 1 0 0 0-1 1v7.958c0 .675-.337 1.226-.744 1.59l-.113.096a3 3 0 1 0 3.86.123l-.146-.123c-.456-.36-.857-.95-.857-1.686V5a1 1 0 0 0-1-1m2 13a2 2 0 1 1-4 0zm6-11a1 1 0 0 1 .993.883L18 7v1.268l1.098-.634a1 1 0 0 1 1.098 1.668l-.098.064L19 10l1.098.634a1 1 0 0 1-.896 1.784l-.104-.052L18 11.732V13a1 1 0 0 1-1.993.117L16 13v-1.268l-1.098.634a1 1 0 0 1-1.098-1.668l.098-.064L15 10l-1.098-.634a1 1 0 0 1 .895-1.785l.105.053L16 8.268V7a1 1 0 0 1 1-1"></path></g></svg>
  );
};
