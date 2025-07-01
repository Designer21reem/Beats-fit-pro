import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // حتى يتفعل فقط أول مرة
    threshold: 0.2,     // نسبة الظهور المطلوبة لتفعيل الأنميشن
  });

  return (
    <div
      ref={ref}
      className=" flex flex-col items-center justify-center bg-black px-20 py-10 text-white mt-[900px]"
    >
      <div className="flex flex-row items-center justify-between space-x-[600px]">
        {/* left */}
        <div className="mt-[-10%]">
          <motion.img
            initial={{ opacity: 0, x: -50, y: -20, rotate: -20 }}
            animate={inView ? { opacity: 1, x: 0, y: 0, rotate: 0 } : {}}
            transition={{
              duration: 1.2,
              type: "spring",
              stiffness: 80,
              damping: 18,
              delay: 0.8,
            }}
            className="w-[118px] h-[195px]"
            src="assets/a1.png"
            alt=""
          />

          <motion.img
            initial={{ opacity: 0, x: 50, y: -20, rotate: 20 }}
            animate={inView ? { opacity: 1, x: 0, y: 0, rotate: 0 } : {}}
            transition={{
              duration: 1.2,
              type: "spring",
              stiffness: 80,
              damping: 18,
              delay: 0.8,
            }}
            className="ml-[40%] mt-[-75%] w-[188px] h-[173px]"
            src="assets/a2.png"
            alt=""
          />

          <motion.img
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 1.2,
              ease: "easeOut",
              delay: 0.8,
            }}
            className="w-xs mt-[20%]"
            src="assets/a3.png"
            alt=""
          />
        </div>

        {/* right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{
            duration: 1,
            delay: 0.6,
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
          className="flex flex-col items-start justify-center space-y-5"
        >
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 1,
              delay: 0.7,
              type: "spring",
              stiffness: 100,
              damping: 50,
            }}
            className="text-start font-[Bruno_Ace_SC] text-3xl"
          >
            Being first has its <br /> perks
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 1,
              delay: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 50,
            }}
            className="text-start w-[400px]"
          >
            Sign up to get more information about Bose, exclusive first looks
            at promotions, new products and more.
          </motion.p>
          <div className="flex flex-row items-center justify-between gap-4">
            <input
              className="bg-[#D7D2D9] placeholder:text-black/40 rounded-4xl px-5 py-2"
              type="email"
              placeholder="Enter your email address"
            />
            <motion.button
              initial={{ opacity: 0, scale: 0.4 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 1,
                delay: 0.9,
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
              className="text-[#9A51B0] font-bold bg-white rounded-4xl px-5 py-2"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* copyright */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 1,
          delay: 0.6,
          type: "spring",
          stiffness: 100,
          damping: 60,
        }}
        className="flex flex-row items-center justify-center"
      >
        <p className="text-[#D7D2D9]">
          © 2025 <span className="text-[#bd2232] font-bold">REEM FAROUQ</span>.
          All rights reserved.
        </p>
      </motion.div>
    </div>
  );
};

export default Footer;
