import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const AboutUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className="max-w-screen-lg mx-auto py-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">What will you learn?</h1>
          <div className="border-t-2 border-red-500 w-16 mx-auto my-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10" data-aos="zoom-in">
  <div className="w-full md:w-80 h-auto rounded-lg shadow-md p-4 text-center bg-slate-50 mx-auto mb-4 md:mb-0">
    <img src="https://i.ibb.co/RHLpJxm/megaphone-icon-0-removebg-preview.png" alt="Logo" className="w-20 h-20 mx-auto" />
    <h2 className="text-lg text-blue-700 font-bold mb-2">Speak</h2>
    <p className="text-gray-500">Speak with native speakers on any topic you want (not just about the weather). Make friends in different parts of the Earth!</p>
  </div>
  <div className="w-full md:w-80 h-auto rounded-lg shadow-md p-4 text-center bg-slate-50 mx-auto mb-4 md:mb-0">
    <img src="https://i.ibb.co/xS8JFVg/images-removebg-preview.png" alt="Logo" className="w-20 h-20 mx-auto" />
    <h2 className="text-lg text-blue-700 font-bold mb-2">Read</h2>
    <p className="text-gray-500">Read literature in the original language. Grow your vocabulary, master the language’s grammar, and broaden your horizons!</p>
  </div>
  <div className="w-full md:w-80 h-auto rounded-lg shadow-md p-4 text-center bg-slate-50 mx-auto">
    <img src="https://i.ibb.co/j43FxyZ/images-removebg-preview-1.png" alt="Logo" className="w-20 h-20 mx-auto" />
    <h2 className="text-lg text-blue-700 font-bold mb-2">Understand</h2>
    <p className="text-gray-500">Understand new things about the foreign country, its culture and traditions. Feel yourself like a piece of something global!</p>
  </div>
</div>

      </div>
    </div>

  );
};

export default AboutUs;