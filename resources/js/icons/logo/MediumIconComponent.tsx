
import React from 'react';

interface MediumIconComponentProps {
  className?: string;
}

export const MediumIconComponent: React.FC<MediumIconComponentProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path fill="currentColor" d="M8 6a6 6 0 1 1 0 12A6 6 0 0 1 8 6m9 1c1.5 0 2.5 2.239 2.5 5s-1 5-2.5 5-2.5-2.239-2.5-5 1-5 2.5-5m4 .5c.38 0 .712.827.88 2.246l.047.443.019.235.03.494.01.259.012.541L22 12l-.002.282-.012.541-.01.26-.03.493-.02.235-.045.443c-.169 1.42-.5 2.246-.881 2.246-.38 0-.712-.827-.88-2.246l-.047-.443a16.683 16.683 0 0 1-.019-.235l-.03-.494a20.863 20.863 0 0 1-.01-.259l-.012-.541v-.564l.012-.541.01-.26.03-.493.02-.235.045-.443c.169-1.42.5-2.246.881-2.246M8 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8m8.956 1.403c-.363.8-.456 1.731-.456 2.597 0 .866.092 1.798.456 2.597.018.038.07.038.088 0 .363-.8.456-1.731.456-2.597 0-.866-.092-1.798-.456-2.597a.048.048 0 0 0-.088 0"></path></g></svg>
  );
};
