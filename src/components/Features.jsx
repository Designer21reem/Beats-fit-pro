import { BsLightningCharge } from "react-icons/bs";
import { PiBatteryVerticalFullLight } from "react-icons/pi";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const colors = ["#666666", "#FADED2", "#F2D7FA", "#EFF595"];
  const images = ["assets/f1.png", "assets/f2.png", "assets/f3.png", "assets/f4.png"];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section ref={ref} className="overflow-hidden flex items-center justify-center mt-[600px]">
      {/* left side */}
      <img className="absolute left-0 w-[635px] h-[508px]" src="assets/s1.png" alt="" />

      {images.map((src, index) => (
        activeIndex === index && (
          <motion.img
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, type: "spring", stiffness: 100, damping: 10 }}
            key={index}
            className="absolute left-20 mt-[310px] w-[490px] h-[551.34px]"
            src={src}
            alt=""
          />
        )
      ))}

      {/* right side */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, type: "spring", stiffness: 100, damping: 10 }}
        className="flex flex-col items-center justify-center space-y-10 absolute right-30"
      >
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100, damping: 10 }}
          className="font-[Bruno_Ace_SC] text-3xl text-[#9A51B0] text-shadow-[0_4px_3px_rgba(0,0,0,0.3)]"
        >
          UP TO
        </motion.h2>

        <div className="flex flex-row items-center justify-between gap-7">
          <motion.div
            initial={{ opacity: 0, y: -80 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3, type: "spring", stiffness: 100, damping: 10 }}
            className="flex flex-col items-center relative"
          >
            <h1 className="font-[Bruno_Ace_SC] text-[162px]">6</h1>
            <PiBatteryVerticalFullLight className="text-[65px]  absolute top-[50%] left-[67%]" />
            <p className="font-[Bruno_Ace_SC] font-bold mt-10 text-center">
              HOURS WITH ACTIVE <br />
              NOISE CANCELLING ON
            </p>
          </motion.div>

          {/* vertical line */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 100, damping: 10 }}
            className="w-[2px] h-[150px] bg-black/50"
          ></motion.div>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.5, type: "spring", stiffness: 100, damping: 10 }}
            className="flex flex-col items-center relative"
          >
            <h1 className="font-[Bruno_Ace_SC] text-[162px]">24</h1>
            <BsLightningCharge className="text-[65px] absolute top-[50%] left-[90%]" />
            <p className="font-bold mt-10 font-[Bruno_Ace_SC] text-center">
              HOURS WITH <br />
              CHARGING CASE
            </p>
          </motion.div>
        </div>

        {/* select color */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6, type: "spring", stiffness: 100, damping: 10 }}
          className="flex flex-col items-start justify-center space-y-2"
        >
          <p>Select your color:</p>
          <div className="flex flex-row items-center justify-between gap-5">
            {colors.map((color, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className={`w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 ${
                  activeIndex === index ? `border-2` : "border-0"
                }`}
                style={{ borderColor: color }}
              >
                <div
                  className="w-8 h-8 rounded-full"
                  style={{ backgroundColor: color }}
                ></div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Features;
