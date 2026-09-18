import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logoImage from '../../../src/assest/nexgencodelogo.png';

export default function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" aria-label="NextGenCode home" className={`group flex items-center ${className ?? ''}`}>
      <motion.img
        src={logoImage}
        alt="NextGenCode"
        initial={{ opacity: 0, scale: 0.9, y: -6 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 240, damping: 18 }}
        whileHover={{ scale: 1.04 }}
        className="h-28 w-96 object-contain transition-[filter] duration-300 group-hover:brightness-125 sm:h-32 sm:w-[32rem]"
      />
    </Link>
  );
}
