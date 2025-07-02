import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Sizes = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const images = [
    { src: "assets/bb1.png", left: "15%",top: "-50px", width: "300px", delay: 1.5 },
    { src: "assets/bb2.png", left: "40%",top: "-75px", width: "120px", delay: 1.3 },
    { src: "assets/bb3.png", left: "50%",top: "-90px", width: "140px", delay: 1.1 },
    { src: "assets/bb4.png", left: "60%",top: "-130px", width: "160px", delay: 0.9 },
    { src: "assets/bb5.png", left: "75%",top: "100px", width: "100px", delay: 0.7 },
  ];

  return (
    <div
      ref={ref}
      className="relative overflow-hidden flex flex-col items-center justify-center mt-[400px]"
    >
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 1,
          delay: 0.7,
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        className="font-[Bruno_Ace_SC] text-3xl text-black text-shadow-[0_4px_3px_rgba(0,0,0,0.3)] text-center w-[800px] mb-10"
      >
        <span className="text-[#CB2621]">Three</span> soft, silicone ear tip
        sizes give you a customised fit and create an acoustic seal
      </motion.h1>

      {/* صور موزعة في صف */}
      <div className="relative w-full h-[750px] mt-6">
        {images.map((img, index) => (
          <motion.img
            key={index}
            src={img.src}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 1,
              delay: img.delay,
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
            style={{
              position: "absolute",
              top: img.top,
              left: img.left,
              width: img.width,
            }}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default Sizes;
