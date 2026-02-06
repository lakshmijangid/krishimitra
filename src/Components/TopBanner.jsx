import {useState,useEffect} from 'react'
import { motion } from 'framer-motion';

const logo = [
    { id: 0, src: '/Images/agri.png', label: "Agriculture" },
  { id: 1, src: '/Images/livestock2.png', label: "Livestock" },
  { id: 2, src: '/Images/innovation.png', label: "Knowledge & Tech" },
]

const TopBanner = () => {
   

    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovered, setHovered] = useState(false);

    useEffect(() => {
         if (isHovered) return;
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % logo.length);
        }, 2000); 

        return () => clearInterval(interval);
    }, [isHovered]);

   return (
   
      <div className="flex w-full max-w-5xl justify-around sm:justify-between items-center m-auto  py-10">

        {logo.map((logo, index) => {
          const isActive = index === activeIndex;

          return (
            <motion.div
              key={logo.id}
              animate={{
                scale: isActive ? 1.3 : 1,
                opacity: isActive ? 1 : 0.8,
              }}
             onHoverStart={() => {setActiveIndex(logo.id); setHovered(true);}}
             onHoverEnd={() => { setHovered(false)}}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
              }}
              className="w-[20%] mx-3 sm:w-[15%] flex flex-col items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.label}
                className="w-full rounded-full h-full object-contain"
              />
              <h1 className="text-xs md:text-md text-zinc-700">{logo.label}</h1>
            </motion.div>
          );
        })}

      </div>
    
  );

}

export default TopBanner;
