import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Sizes = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div ref={ref} className="overflow-hidden flex items-center justify-center mt-[400px]">
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
        className="font-[Bruno_Ace_SC] text-3xl text-black text-shadow-[0_4px_3px_rgba(0,0,0,0.3)] text-center w-[800px]"
      >
        <span className="text-[#CB2621]">Three</span> soft, silicone ear tip
        sizes give you a customised fit and create an acoustic seal
      </motion.h1>

      <div className="flex flex-row items-center justify-between">
        {[
          { src: "./src/assets/bb1.png", left: "20%", width: "300px", delay: 1.5, top: "6200px" },
          { src: "./src/assets/bb2.png", left: "40%", width: "120px", delay: 1.3, top: "6180px" },
          { src: "./src/assets/bb3.png", left: "50%", width: "140px", delay: 1.1, top: "6170px" },
          { src: "./src/assets/bb4.png", left: "60%", width: "160px", delay: 0.9, top: "6140px" },
          { src: "./src/assets/bb5.png", left: "75%", width: "100px", delay: 0.7, top: "6360px" },
        ].map((img, index) => (
          <motion.img
            key={index}
            src={img.src}
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 1,
              delay: img.delay,
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
            className={`absolute top-[${img.top}] left-[${img.left}] w-[${img.width}] mt-7`}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default Sizes;
