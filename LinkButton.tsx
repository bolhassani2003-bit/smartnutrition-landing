import React from 'react';
import { LucideIcon } from 'lucide-react';

interface LinkButtonProps {
  title: string;
  url: string;
  icon?: LucideIcon;
  className?: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ title, url, icon: Icon, className = "" }) => {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`flex items-center justify-between w-full bg-[#f2f2f2] hover:bg-gray-200 text-black p-3 rounded-lg transition-all duration-200 shadow-sm mb-4 min-h-[56px] ${className}`}
    >
      <div className="flex items-center justify-center w-8 h-8 text-black/80">
        {Icon && <Icon size={22} strokeWidth={1.5} />}
      </div>
      <span className="flex-grow text-center font-bold text-sm sm:text-base">{title}</span>
      <div className="w-8"></div> {/* Spacer for centering text */}
    </a>
  );
};

export default LinkButton;