import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="w-full py-8 flex justify-center items-center text-black/70 text-xs font-medium">
      <a href="#" className="flex items-center gap-1 hover:text-black transition-colors">
        <span>ساخته شده توسط</span>
        <span className="font-bold text-lg">یک‌لینک</span>
      </a>
    </div>
  );
};

export default Footer;