
import React from 'react';

interface SkipForwardIconComponentProps {
  className?: string;
}

export const SkipForwardIconComponent: React.FC<SkipForwardIconComponentProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z"></path><path fill="currentColor" d="M4.569 5.865a1.332 1.332 0 0 1 1.846-1.064l.495.215.662.3.814.388.459.227.748.38.535.282.564.304.588.326.613.349.633.37.599.361.564.349.778.496.694.458.607.414.668.472.39.285.206.154c.71.535.71 1.595.001 2.13l-.562.415-.625.443-.369.254-.623.418-.704.457-.514.324-.547.338-.582.349-.615.36-.313.179-.9.503-.566.306-.538.282-.506.26-.475.237-.845.408-.537.248-.8.351a1.332 1.332 0 0 1-1.843-1.065l-.08-.698-.071-.767-.053-.689-.05-.78-.028-.569-.024-.606-.019-.64-.015-1.025v-.715l.015-1.025.03-.948.026-.587.03-.55.052-.75.054-.656.07-.723zM19 5a1 1 0 0 1 .993.883L20 6v12a1 1 0 0 1-1.993.117L18 18V6a1 1 0 0 1 1-1M6.456 7.004l-.06.681-.04.525-.037.579-.033.63-.027.679-.02.726-.01.77-.001.402.005.792.007.38.02.727.026.68.033.63.057.848.06.724a41 41 0 0 0 .02.212l.616-.287.472-.228.517-.257.562-.287.602-.317.64-.347.676-.379.7-.404.665-.396.621-.38.576-.363.529-.343.481-.32.631-.432.359-.252-.362-.255-.635-.435a50.139 50.139 0 0 0-.236-.158l-.507-.333-.845-.537c-.1-.062-.2-.125-.304-.188l-.64-.387-.681-.4-.687-.39a56.843 56.843 0 0 0-.332-.184l-.638-.346-.602-.317-.828-.42-.73-.353-.426-.2z"></path></g></svg>
  );
};
