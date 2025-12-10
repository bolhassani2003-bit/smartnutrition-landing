import React from 'react';
import { PROFILE_DATA } from '../constants';

const ProfileHeader: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-8 pb-4 px-4 text-white z-10 relative">
      <div className="w-24 h-24 rounded-full border-2 border-white overflow-hidden bg-gray-100 shadow-lg mb-3">
        <img 
          src={PROFILE_DATA.image} 
          alt={PROFILE_DATA.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="text-lg font-bold text-center mb-1 drop-shadow-md">{PROFILE_DATA.name}</h1>
      <p className="text-sm text-white/90 text-center font-medium drop-shadow-sm">{PROFILE_DATA.bio}</p>
    </div>
  );
};

export default ProfileHeader;