import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Box = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const Contants = [
    "Beats fit pro earbuds",
    "Pocketable charging case",
    "Ear tips with three size options",
    "USB-C to USB-C charging cable",
    "Quick start guide",
    "Warranty card",
  ];

  return (
    <section
      ref={ref}
      className="overflow-hidden flex items-center justify-center mt-[700px]"
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
        className="font-[Bruno_Ace_SC] text-3xl text-black text-shadow-[0_4px_3px_rgba(0,0,0,0.3)]"
      >
        WHAT'S IN
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
        className="font-[Bruno_Ace_SC] text-3xl text-[#9A51B0] text-shadow-[0_4px_3px_rgba(0,0,0,0.3)]"
      >
        {" "}
        THE BOX
      </motion.span>

      <img
        className="w-[250px] mt-7 absolute left-0 top-[2500px]"
        src="./src/assets/Radial Bar Chart.png"
        alt=""
      />
      <img
        className="w-[250px] mt-7 absolute right-0 top-[2700px]"
        src="./src/assets/Radial Bar Chart2.png"
        alt=""
      />

      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-between">
          {[
            {
              src: "b1.png",
              className: "w-[500px] absolute left-30 top-[2500px]",
              delay: 0.6,
              initial: { opacity: 0 },
              animate: { opacity: 1 },
            },
            {
              src: "b2.png",
              className: "w-[50px] absolute left-[660px] top-[2500px]",
              delay: 0.6,
              initial: { opacity: 0, scale: 0.4 },
              animate: { opacity: 1, scale: 1 },
            },
            {
              src: "b3.png",
              className: "w-[80px] absolute left-[760px] top-[2700px]",
              delay: 0.6,
              initial: { opacity: 0, x: 100 },
              animate: { opacity: 1, x: 0 },
            },
            {
              src: "b3.png",
              className: "w-[80px] absolute left-[830px] top-[2700px]",
              delay: 0.7,
              initial: { opacity: 0, x: 100 },
              animate: { opacity: 1, x: 0 },
            },
            {
              src: "b4.png",
              className: "w-[80px] absolute left-[760px] top-[2800px]",
              delay: 0.8,
              initial: { opacity: 0, x: 100 },
              animate: { opacity: 1, x: 0 },
            },
            {
              src: "b5.png",
              className: "w-[80px] absolute left-[760px] top-[2880px]",
              delay: 0.9,
              initial: { opacity: 0, x: 100 },
              animate: { opacity: 1, x: 0 },
            },
          ].map((img, index) => (
            <motion.img
              key={index}
              src={`./src/assets/${img.src}`}
              alt=""
              className={img.className}
              initial={img.initial}
              animate={inView ? img.animate : {}}
              transition={{
                duration: 1,
                delay: img.delay,
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
            />
          ))}
        </div>

        <div
          className="flex flex-col items-center justify-center font-[Bruno_Ace_SC]
        absolute top-[2700px] space-y-8 font-bold text-2xl text-center"
        >
          {Contants.map((item, index) => (
            <motion.h2
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 1,
                delay: index * 0.7,
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
            >
              {item}
            </motion.h2>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Box;
