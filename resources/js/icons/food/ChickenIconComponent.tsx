
import React from 'react';

interface ChickenIconComponentProps {
  className?: string;
}

export const ChickenIconComponent: React.FC<ChickenIconComponentProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z"></path><path fill="currentColor" d="m12.373 8.092.809-.809a3.001 3.001 0 1 1 5.605-2.07 3 3 0 1 1-2.07 5.606l-.809.809.005.034c.116.926.047 1.956-.153 2.968-.395 2.001-1.347 4.15-2.7 5.502-1.366 1.366-2.978 1.93-4.591 1.786-1.583-.141-3.061-.954-4.247-2.14-1.186-1.185-1.998-2.663-2.14-4.247-.144-1.613.42-3.225 1.786-4.591C5.221 9.587 7.37 8.636 9.37 8.24c1.013-.2 2.042-.269 2.969-.152zm5.575-.979a1 1 0 0 0-2.058 1.705l-.737.736a3.137 3.137 0 0 0-.707-.707l.736-.736a1 1 0 0 0 0-1.414 1 1 0 1 1 1.705-.644 1 1 0 0 0 1.06 1.06Zm-12.665 5.24c.99-.99 2.73-1.806 4.475-2.15.86-.17 1.668-.214 2.33-.13.677.084 1.101.288 1.326.513.225.225.429.65.514 1.326.084.663.04 1.47-.13 2.33-.345 1.744-1.161 3.485-2.152 4.476-.976.977-2.016 1.296-2.999 1.208-1.013-.09-2.075-.626-3.01-1.562-.937-.935-1.472-1.998-1.563-3.01-.088-.984.232-2.023 1.209-3Z"></path></g></svg>
  );
};
