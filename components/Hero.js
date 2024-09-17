import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="min-h-screen pt-16 flex items-center justify-center bg-gradient-to-br from-pastelPink via-purple to-black relative overflow-hidden">
      <div className="text-center z-10 mr-80">
        <motion.h1 
          className="text-6xl font-bold mb-4 relative inline-block"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="text-white">Sanjana</span>
          <span className="text-pastelPink"> Bonagiri</span>
          <motion.span 
            className="absolute bottom-0 left-0 w-full h-1 bg-pastelPink"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.5, delay: 0.7 }}
          />
        </motion.h1>
        <motion.p 
          className="text-3xl text-grey mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Full Stack Developer
        </motion.p>
      </div>
      <motion.div 
        className="absolute top-1/3 right-20 transform -translate-y-1/2"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="relative w-80 h-80 md:w-96 md:h-96">
          <Image
            src="/profile-pic1.jpg"
            alt="Profile Picture"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
          <motion.div
            className="absolute inset-0 border-4 border-pastelPink rounded-full"
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          />
          <motion.div
            className="absolute inset-0 border-4 border-purple rounded-full"
            initial={{ scale: 1.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.5 }}
            transition={{ duration: 0.5, delay: 1 }}
          />
          <motion.div
            className="absolute -inset-4 border-2 border-pastelPink rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute -inset-8 border-2 border-purple rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  )
}