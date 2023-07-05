import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto` /*Fits the background*/}>
       <div className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`} /*Space where the her text is placed*/>
        <div className='flex flex-col justify-center items-center mt-5' /*Space for the circle with a line next to the text*/>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' /*The circle*/ />
          <div className='w-1 sm:h-80 h-40 violet-gradient' /*The line*/ />
        </div>
       </div>
    </section>
  )
}

export default Hero