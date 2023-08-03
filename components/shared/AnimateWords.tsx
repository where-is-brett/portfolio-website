'use client'
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  staggerChildren,
  wordAnimation,
} from '@/utils/animations'

interface AnimatedWordsProps {
  title: string
  titleClasses?: string
}

const AnimatedWords: React.FC<AnimatedWordsProps> = ({ title, titleClasses = "" }) => {
  const [inViewRef, inView] = useInView({
    triggerOnce: true, // Animation will only trigger once when the element comes into view
    threshold: 0.5, // Adjust the threshold as needed based on how much of the element needs to be in view before the animation triggers
  });

  return (
    <motion.div
      className="space-y-8 "
      initial={{ y: 100 }}
      animate={inView ? { y: 0 } : { y: 100 }} // Animate the div based on whether it's in view or not
      ref={inViewRef} // Attach the inViewRef to the motion.div
    >
      {title.split(" ").map((word, idx) => (
        <div key={idx} className="inline-block overflow-hidden">
          <motion.span
            className={`inline-block overflow-hidden font-raleway ${titleClasses}`}
            initial={{ y: 100 }} // Start each word outside the viewport
            animate={{ y: 0 }} // Animate the word based on whether it's in view or not
            transition={{
              ease: [0.6, 0.01, 0.05, 0.95],
              duration: 1,
            }}
          >
            {word + "\u00A0"}
          </motion.span>
        </div>
      ))}
    </motion.div>
  );
};

export default AnimatedWords
