import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionProps {
  question: string;
  answer: string;
}

const Accordion: React.FC<AccordionProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-[#f2f2f2] rounded-lg overflow-hidden shadow-sm transition-all duration-300 mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-right focus:outline-none"
      >
        <span className="font-bold text-sm text-gray-700 leading-normal flex-1 ml-2">{question}</span>
        <ChevronDown 
          size={20} 
          className={`text-gray-500 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-4 pt-0 text-sm text-gray-600 text-justify leading-relaxed border-t border-gray-200/50 mt-2">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default Accordion;