import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Header = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section ref={ref} className="
    overflow-hidden flex items-center justify-center">
      <img className="w-[1400px] mt-7" src="/assets/bg.png" alt="" />

      <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, delay: 0.7, type: "spring", stiffness: 100, damping: 10 }}
        className="font-['Bruno_Ace_SC'] absolute text-[150px] font-bold w-[1400px] text-black top-[80%] left-[53%] transform -translate-x-1/2 -translate-y-1/2 text-shadow-[0_8px_3px_rgba(0,0,0,0.3)]"
      >
        Beats Fit Pro
      </motion.h1>

      <motion.img
        initial={{ opacity: 0, x: -500, y: -200, rotate: -20 }}
        animate={inView ? { opacity: 1, x: 0, y: 0, rotate: 0 } : {}}
        transition={{ duration: 1.2, type: "spring", stiffness: 80, damping: 18, delay: 0.8 }}
        className="absolute top-[44%] left-[35%] w-[208px] h-[295px]"
        src="/assets/a1.png"
        alt=""
      />

      <motion.img
        initial={{ opacity: 0, x: 500, y: -200, rotate: 20 }}
        animate={inView ? { opacity: 1, x: 0, y: 0, rotate: 0 } : {}}
        transition={{ duration: 1.2, type: "spring", stiffness: 80, damping: 18, delay: 0.8 }}
        className="absolute top-[33%] left-[48%] w-[288px] h-[273px]"
        src="/assets/a2.png"
        alt=""
      />

      <motion.img
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
        className="absolute top-[85%] w-xl"
        src="/assets/a3.png"
        alt=""
      />
    </section>
  );
};

export default Header;
