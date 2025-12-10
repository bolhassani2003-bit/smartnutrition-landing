import React from 'react';
import { MapPin } from 'lucide-react';
import { MAP_DATA } from '../constants';

const MapBox: React.FC = () => {
  return (
    <a 
      href={MAP_DATA.link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full block mb-4 group"
    >
      <div className="bg-[#f2f2f2] rounded-lg p-4 flex items-start gap-3 transition-colors hover:bg-gray-200">
        <div className="bg-blue-100 p-2 rounded-lg text-blue-600 flex-shrink-0 group-hover:bg-blue-200 transition-colors">
          <MapPin size={24} />
        </div>
        <p className="text-sm text-gray-700 leading-relaxed font-medium pt-1">
          {MAP_DATA.address}
        </p>
      </div>
    </a>
  );
};

export default MapBox;