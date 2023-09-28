import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const BackToTopButton = () => {
   const [isVisible, setIsVisible] = useState(false);

   const scrollToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth',
      });
   };

   useEffect(() => {
      // Show the button when the user scrolls down a certain amount
      const handleScroll = () => {
         if (window.scrollY > 200) {
            setIsVisible(true);
         } else {
            setIsVisible(false);
         }
      };

      window.addEventListener('scroll', handleScroll);

      // Clean up the event listener on unmount
      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   return (
      <button
         onClick={scrollToTop}
         className={`${isVisible ? 'block' : 'hidden'
            } fixed bottom-4 right-4 p-2 bg-purple-800 text-white rounded-full cursor-pointer transition-opacity duration-300 `}
      >
         <FaArrowUp />
      </button>
   );
};

export default BackToTopButton;
