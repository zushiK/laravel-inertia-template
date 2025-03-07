
import React from 'react';

interface EaseOutControlPointIconComponentProps {
  className?: string;
}

export const EaseOutControlPointIconComponent: React.FC<EaseOutControlPointIconComponentProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z"></path><path fill="currentColor" d="M20 3a1 1 0 1 1 0 2c-1.688 0-3.444.796-5.192 2.15-1.74 1.347-3.383 3.178-4.824 5.08l-.22.293-.431.589-.415.586-.4.58-.381.573-.365.562-.346.547-.483.788-.298.5-.407.702-.36.638-.399.732-.506.971-.079.156a1 1 0 1 1-1.788-.895l.422-.822.363-.678.46-.831.407-.71.457-.77.33-.542.534-.85.38-.586.399-.599.417-.607.434-.613.223-.307.459-.616c1.496-1.974 3.26-3.956 5.192-5.452C15.506 4.079 17.688 3 20 3M5 1c1.306 0 2.417.835 2.83 2H9a1 1 0 0 1 0 2H7.83A3.001 3.001 0 1 1 5 1m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2m8 0a1 1 0 0 1 .117 1.993L13 5h-1a1 1 0 0 1-.117-1.993L12 3z"></path></g></svg>
  );
};
