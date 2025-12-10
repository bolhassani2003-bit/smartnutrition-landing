import React from 'react';
import { PRODUCT_DATA } from '../constants';

const ProductCard: React.FC = () => {
  return (
    <div className="w-full mb-6">
      <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
        <div className="aspect-square w-full bg-gray-50 relative p-4 flex items-center justify-center">
            <img 
              src={PRODUCT_DATA.image} 
              alt="Product" 
              className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
            />
        </div>
        <div className="p-4 text-center">
           <h3 className="mb-3" dangerouslySetInnerHTML={{ __html: PRODUCT_DATA.titleHtml }} />
           <p className="text-xs sm:text-sm text-gray-600 leading-relaxed text-justify" dir="rtl">
             {PRODUCT_DATA.description}
           </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;