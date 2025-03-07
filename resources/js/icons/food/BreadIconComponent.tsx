
import React from 'react';

interface BreadIconComponentProps {
  className?: string;
}

export const BreadIconComponent: React.FC<BreadIconComponentProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z"></path><path fill="currentColor" d="M19.839 4.282c.79.791 1.18 1.711 1.16 2.72-.017.961-.405 1.894-.938 2.764-.71 1.162-1.795 2.388-3.008 3.645l-.672.689-.69.694-1.27 1.268-.74.73c-1.352 1.317-2.67 2.507-3.915 3.269-.87.533-1.803.92-2.764.939-1.009.02-1.929-.37-2.72-1.161-1.187-1.187-1.696-3.344-1.397-5.645.293-2.256 1.371-4.803 3.565-7.12l.323-.332c2.397-2.39 5.067-3.551 7.42-3.857 2.301-.299 4.459.21 5.646 1.397m-1.414 1.415c-.581-.581-2.008-1.084-3.974-.829-.43.056-.879.148-1.34.281.26.3.6.515 1.034.66a1 1 0 1 1-.633 1.897c-1.01-.336-1.788-.942-2.308-1.789A12.14 12.14 0 0 0 8.69 7.68c.159.237.372.5.63.758.424.423.858.726 1.176.863l.113.044a1 1 0 0 1-.632 1.898c-.738-.246-1.486-.807-2.07-1.391a7.46 7.46 0 0 1-.622-.704 11.711 11.711 0 0 0-1.594 2.517c.271.604.716.994 1.383 1.216a1 1 0 0 1-.633 1.897 4.41 4.41 0 0 1-1.492-.829c-.032.17-.06.338-.08.503-.256 1.967.247 3.393.828 3.974.446.446.856.583 1.267.575.458-.009 1.033-.201 1.758-.645.952-.582 1.988-1.485 3.133-2.58l.635-.617.995-.987 1.352-1.355.634-.646c1.233-1.27 2.249-2.41 2.884-3.448.444-.725.636-1.3.645-1.758.008-.41-.129-.82-.575-1.267Z"></path></g></svg>
  );
};
