import { motion } from "framer-motion";
import { ReactNode } from "react";

const variants = {
  hidden: { opacity: 0, x: -50, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div>
    <motion.main initial="hidden" animate="enter" exit="exit" variants={variants} transition={{ type: "linear", default: { duration: 0.8 } }}>
      {children}
    </motion.main>
  </div>
);

export default Layout;
