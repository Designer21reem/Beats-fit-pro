import { BiSolidCart } from "react-icons/bi";
import { motion } from "framer-motion";
const Navbar = () => {

    const NavItem=["Home","Shop","Products","Contact"];
       return (
           <nav className="overflow-hidden flex flex-row items-center justify-between
            px-8 py-4">
             <motion.img
              initial={{opacity:0,x:-100}}
              animate={{opacity:1,x:0}}
              transition={{duration:0.5,delay:0.2,type:"spring",stiffness:100,damping:10}}
             className="w-8" src="/assets/logo.png" alt="logo" />

             <div
              
             className="flex flex-row items-center justify-between 
             gap-18 font-bold">
                {
                    NavItem.map((item,index) => (
                        <motion.a
                         initial={{opacity:0,y:-100}}
                         animate={{opacity:1,y:0}}
                         transition={{duration:0.5,delay:0.2*(index*2),type:"spring",stiffness:100,damping:10}}
                        key={index} href="#">{item}</motion.a>
                    ))
                }
             </div>
            
           <motion.div
            initial={{opacity:0,x:100}}
            animate={{opacity:1,x:0}}
            transition={{duration:0.5,delay:0.2,type:"spring",stiffness:100,damping:10}}
           >
             <BiSolidCart  className="text-4xl" />
           </motion.div>

           </nav>
       )
}

export default Navbar