import React from 'react';
import { 
  Globe, 
  User, 
  FileText, 
  Linkedin, 
  ShoppingCart, 
  Phone, 
  Mail 
} from 'lucide-react';

import ProfileHeader from './components/ProfileHeader';
import LinkButton from './components/LinkButton';
import TextBlock from './components/TextBlock';
import ProductCard from './components/ProductCard';
import MapBox from './components/MapBox';
import Accordion from './components/Accordion';
import Footer from './components/Footer';
import { PROFILE_DATA, INTRO_TEXT, FAQ_DATA } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full relative overflow-hidden flex justify-center bg-gray-900">
      {/* Background Image with Blur */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center pointer-events-none"
        style={{ 
          backgroundImage: `url(${PROFILE_DATA.backgroundImage})`,
          filter: 'blur(60px)',
          transform: 'scale(1.1)'
        }}
      />
      
      {/* Overlay to darken background slightly */}
      <div className="fixed inset-0 z-0 bg-black/10 pointer-events-none" />

      {/* Main Content Container */}
      <main className="w-full max-w-[420px] min-h-screen relative z-10 flex flex-col p-4 sm:p-6 overflow-y-auto no-scrollbar">
        
        <ProfileHeader />

        {/* Introduction Text */}
        <div className="mb-6">
          <TextBlock content={INTRO_TEXT} />
        </div>

        {/* Primary Links */}
        <div className="w-full flex flex-col gap-1">
          <LinkButton 
            title="وبسایت شرکت" 
            url="https://fitnutrilife.com/" 
            icon={Globe} 
          />
          <LinkButton 
            title="دریافت مشاوره رایگان" 
            url="https://fitnutrilife.com/دریافت-مشاوره/" 
            icon={User} 
          />
          <LinkButton 
            title="مقالات و مجلات" 
            url="https://fitnutrilife.com/blog/" 
            icon={FileText} 
          />
        </div>

        {/* Social Button (LinkedIn) */}
        <div className="w-full flex justify-center mb-6">
           <LinkButton 
            title="لینکداین" 
            url="#" 
            icon={Linkedin}
            className="!w-full"
          />
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/20 mb-6"></div>

        {/* Product Section Title */}
        <div className="mb-4 text-center">
          <h2 className="text-2xl font-bold text-blue-900 bg-white/80 inline-block px-4 py-2 rounded-full shadow-sm backdrop-blur-md">
            <span className="text-black">محصولات</span> <span className="text-red-600">خانواده فست‌میل</span>
          </h2>
        </div>

        {/* Product Card (Image Slider Placeholder) */}
        <ProductCard />

        {/* Shopping Link */}
        <div className="w-full mb-6">
          <LinkButton 
            title="خرید اینترنتی و حضوری" 
            url="https://fitnutrilife.com/داروخانه-ها/" 
            icon={ShoppingCart} 
          />
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/20 mb-6"></div>

        {/* Contact Links */}
        <div className="w-full flex flex-col gap-1 mb-4">
          <LinkButton 
            title="تلفن" 
            url="tel:02188031215" 
            icon={Phone} 
          />
          <LinkButton 
            title="ایمیل" 
            url="mailto:Info@fitnutrilife.com" 
            icon={Mail} 
          />
        </div>

        {/* Map */}
        <MapBox />

        {/* FAQ */}
        <Accordion 
          question={FAQ_DATA.question}
          answer={FAQ_DATA.answer}
        />

        <Footer />
        
        {/* Bottom padding for safe area */}
        <div className="h-4"></div>
      </main>
    </div>
  );
};

export default App;