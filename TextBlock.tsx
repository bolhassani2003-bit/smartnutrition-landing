import React from 'react';

interface TextBlockProps {
  content: string;
  className?: string;
  isHtml?: boolean;
}

const TextBlock: React.FC<TextBlockProps> = ({ content, className = "", isHtml = false }) => {
  if (isHtml) {
    return (
      <div 
        className={`w-full text-right leading-relaxed text-sm sm:text-base text-gray-800 ${className}`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }

  return (
    <div className={`w-full text-justify leading-7 text-sm sm:text-base text-gray-800 bg-white/50 p-4 rounded-lg backdrop-blur-sm shadow-sm ${className}`}>
      <p>{content}</p>
    </div>
  );
};

export default TextBlock;