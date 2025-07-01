import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Designed = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className="overflow-hidden flex flex-col items-center justify-center mt-[1300px] relative w-full"
    >
      <div className="flex flex-row items-center justify-center gap-3">
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
          className="font-[Bruno_Ace_SC] text-3xl font-bold text-shadow-[0_4px_3px_rgba(0,0,0,0.3)]"
        >
          Designed for
        </motion.h1>
        <motion.span
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 1,
            delay: 0.7,
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
          className="text-[#CB2621] font-[Bruno_Ace_SC] text-3xl font-bold text-shadow-[0_4px_3px_rgba(0,0,0,0.3)]"
        >
          comfort
        </motion.span>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 1,
          delay: 0.7,
          type: "spring",
          stiffness: 170,
          damping: 60,
        }}
        className="font-[Bruno_Ace_SC] text-xl text-center w-[800px] text-shadow-[0_4px_3px_rgba(0,0,0,0.3)] mt-7"
      >
        Beats Fit Pro are true wireless earbuds equipped with comfortable,
        secure-fit wing tips that flex to fit your ear. The universal wing tip
        design was put to the ultimate test by athletes of all kinds so you can
        trust that these earbuds will stay put through work days and workouts.
      </motion.p>

      {/* موجات ro1 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.4 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{
          duration: 1,
          delay: 0.7,
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        className="relative w-full h-[800px] mt-10 overflow-hidden -rotate-15"
      >
        {[0, 10, -10, 20, -20, 30, -30].map((angle, index) => (
          <img
            key={index}
            className={`absolute top-1/2 left-1/2 w-full transform -translate-x-1/2 -translate-y-1/2 rotate-[${angle}deg] opacity-${70 - index * 10}`}
            src="/assets/ro1.png"
            alt=""
          />
        ))}
      </motion.div>

      <motion.img
        initial={{ opacity: 0, x: -500, y: -200, rotate: -30 }}
        animate={inView ? { opacity: 1, x: 0, y: 0, rotate: 0 } : {}}
        transition={{
          duration: 1.2,
          type: "spring",
          stiffness: 80,
          damping: 18,
          delay: 0.8,
        }}
        className="w-[250px] absolute left-[510px] top-[500px]"
        src="/assets/rr.png"
        alt=""
      />

      <motion.img
        initial={{ opacity: 0, x: 500, y: -200, rotate: 30 }}
        animate={inView ? { opacity: 1, x: 0, y: 0, rotate: 0 } : {}}
        transition={{
          duration: 1.2,
          type: "spring",
          stiffness: 80,
          damping: 18,
          delay: 0.8,
        }}
        className="w-[250px] absolute right-[510px] top-[500px]"
        src="/assets/rl.png"
        alt=""
      />
    </div>
  );
};

export default Designed;
