
import React from 'react';

interface TimeDurationIconComponentProps {
  className?: string;
}

export const TimeDurationIconComponent: React.FC<TimeDurationIconComponentProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z"></path><path fill="currentColor" d="M10.975 3.002a1 1 0 0 1-.754 1.196 7.93 7.93 0 0 0-.583.156 1 1 0 0 1-.59-1.911c.24-.074.484-.14.73-.195a1 1 0 0 1 1.197.754m2.05 0a1 1 0 0 1 1.196-.754c4.454 1.01 7.78 4.992 7.78 9.752 0 5.523-4.478 10-10 10-4.761 0-8.743-3.325-9.753-7.779a1 1 0 0 1 1.95-.442 8 8 0 1 0 9.58-9.58 1 1 0 0 1-.753-1.197M6.614 4.72a1 1 0 0 1-.053 1.414c-.148.136-.29.279-.427.426A1 1 0 0 1 4.668 5.2c.17-.184.348-.362.532-.533a1 1 0 0 1 1.414.053M12 6a1 1 0 0 1 1 1v4.586l2.707 2.707a1 1 0 0 1-1.414 1.414l-3-3A1 1 0 0 1 11 12V7a1 1 0 0 1 1-1M3.693 8.388a1 1 0 0 1 .661 1.25 7.943 7.943 0 0 0-.156.583 1 1 0 0 1-1.95-.442c.056-.247.121-.49.195-.73a1 1 0 0 1 1.25-.661"></path></g></svg>
  );
};
