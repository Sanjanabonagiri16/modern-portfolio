import { motion } from 'framer-motion'

export default function NameBanner({ title }) {
  return (
    <motion.div 
      className="bg-gradient-to-r from-black via-purple to-pastelPink py-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-white mb-4 text-center relative inline-block"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-white">{title.split(' ')[0]}</span>
          <span className="text-pastelPink"> {title.split(' ').slice(1).join(' ')}</span>
          <motion.span 
            className="absolute bottom-0 left-0 w-full h-1 bg-pastelPink"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.5, delay: 0.5 }}
          />
        </motion.h2>
      </div>
    </motion.div>
  )
}