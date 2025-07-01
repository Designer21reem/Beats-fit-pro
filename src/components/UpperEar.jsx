import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const UpperEar = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className="overflow-hidden flex flex-col items-center justify-center mt-[300px] mx-15"
    >
      <img src="./src/assets/Rectangle.png" alt="" />

      <motion.img
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{
          duration: 1,
          delay: 0.6,
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        className="z-50 absolute w-[411.71px]"
        src="./src/assets/t1.png"
        alt=""
      />

      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 1,
          delay: 0.7,
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        className="absolute right-[10%] text-center font-[Bruno_Ace_SC] text-3xl text-black text-shadow-[0_4px_3px_rgba(0,0,0,0.3)]"
      >
        For a comfortable, <br />
        <span className="text-[#CB2621]">secure</span> fit, gently twist <br />
        earbud back and <br />
        tuck wing tip into <br />
        <span className="text-[#CB2621]">upper</span> ear.
      </motion.h2>

      <motion.img
        initial={{ scaleX: 0.3 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{
          duration: 1,
          delay: 0.6,
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        className="absolute left-[7%] w-[510px] mt-2"
        src="./src/assets/kagi Chart.png"
        alt=""
      />
    </div>
  );
};

export default UpperEar;
