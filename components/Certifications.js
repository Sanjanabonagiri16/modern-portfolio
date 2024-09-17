import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCertificate, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Certifications() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [progress, setProgress] = useState(0);

  const certifications = [
    {
      title: 'Certificate of Participation in Level 1: E-Commerce',
      issuer: 'Unstop',
      date: 'March 2024',
      link: 'https://unstop.com/certificate-preview/2086aee1-9e06-40cd-9aea-d8f391d423cb?utm_campaign'
    },
    {
      title: 'EF SET English Certificate 66/100 (C1 Advanced)',
      issuer: 'EF SET',
      date: 'August 2024',
      link: 'https://cert.efset.org/fTNdGD'
    },
    {
      title: 'Deloitte Australia - Technology Job Simulation',
      issuer: 'Forage',
      date: 'March 2024',
      link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Deloitte%20Australia/YPWCiGNTkr6QxcpEu_Deloitte%20Australia_dP7ZYCW8Z76DWQFQ2_1710256690929_completion_certificate.pdf'
    },
    {
      title: 'Microsoft Certified: Azure Fundamentals',
      issuer: 'Microsoft',
      date: 'March 2024',
      link: 'https://www.credly.com/badges/19ff498a-c5eb-4bb9-8e49-424e22a0350f/linked_in_profile'
    },
    {
      title: 'AWS APAC - Solutions Architecture Job Simulation',
      issuer: 'Forage',
      date: 'February 2024',
      link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/AWS/kkE9HyeNcw6rwCRGw_AWS%20APAC_dP7ZYCW8Z76DWQFQ2_1707742964613_completion_certificate.pdf'
    },
    {
      title: 'Accenture UK - Developer And Technology Job Simulation',
      issuer: 'Forage',
      date: 'February 2024',
      link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20UK/3xnZEj9kfpoQKW885_Accenture%20UK_dP7ZYCW8Z76DWQFQ2_1707744348647_completion_certificate.pdf'
    },
    {
      title: 'Introduction to Generative AI',
      issuer: 'Google Cloud Skills Boost',
      date: 'March 2024',
      link: 'https://www.cloudskillsboost.google/public_profiles/082b1e93-30d5-4c43-91fc-dd6d12dd350a/badges/7977201?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share'
    },
    {
      title: 'Introduction to Large Language Models',
      issuer: 'Google Cloud Skills Boost',
      date: 'March 2024',
      link: 'https://www.cloudskillsboost.google/public_profiles/082b1e93-30d5-4c43-91fc-dd6d12dd350a/badges/7981922?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share'
    },
    {
      title: 'Machine Learning with Python',
      issuer: 'freeCodeCamp',
      date: 'March 2024',
      link: 'https://freecodecamp.org/certification/sanjana_2024/machine-learning-with-python-v7'
    },
    {
      title: 'Walmart USA - Advanced Software Engineering Job Simulation',
      issuer: 'Forage',
      date: 'December 2023',
      link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Walmart%20USA/oX6f9BbCL9kJDJzfg_Walmart%20USA_dP7ZYCW8Z76DWQFQ2_1703234854244_completion_certificate.pdf'
    },
    {
      title: 'PwC Switzerland - Power BI Job Simulation',
      issuer: 'Forage',
      date: 'December 2023',
      link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/PwC%20Switzerland/a87GpgE6tiku7q3gu_PwC%20Switzerland_dP7ZYCW8Z76DWQFQ2_1703222383092_completion_certificate.pdf'
    },
    {
      title: 'J.P. Morgan - Software Engineering Job Simulation',
      issuer: 'Forage',
      date: 'December 2023',
      link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_dP7ZYCW8Z76DWQFQ2_1703221544122_completion_certificate.pdf'
    },
    {
      title: 'Introduction to Data Science',
      issuer: 'Credly',
      date: 'December 2023',
      link: 'https://www.credly.com/badges/d536a0af-5689-4485-835e-9618d8a44d58/linked_in_profile'
    },
    {
      title: 'Cognizant - Artificial Intelligence Job Simulation',
      issuer: 'Forage',
      date: 'December 2023',
      link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Cognizant/5N2ygyhzMWjKQmgCK_Cognizant_dP7ZYCW8Z76DWQFQ2_1703220618101_completion_certificate.pdf'
    },
    {
      title: 'Accenture North America - Data Analytics and Visualization Job Simulation',
      issuer: 'Forage',
      date: 'December 2023',
      link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20North%20America/hzmoNKtzvAzXsEqx8_Accenture%20North%20America_dP7ZYCW8Z76DWQFQ2_1703093042521_completion_certificate.pdf'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          nextCertificate();
          return 0;
        }
        return Math.min(oldProgress + 1, 100);
      });
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, [currentIndex]);

  const nextCertificate = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certifications.length);
    setProgress(0);
  };

  const prevCertificate = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + certifications.length) % certifications.length);
    setProgress(0);
  };

  const variants = {
    enter: (direction) => ({
      rotateY: direction > 0 ? 90 : -90,
      opacity: 0,
      z: -300,
    }),
    center: {
      rotateY: 0,
      opacity: 1,
      z: 0,
    },
    exit: (direction) => ({
      rotateY: direction < 0 ? 90 : -90,
      opacity: 0,
      z: -300,
    }),
  };

  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-pastelPink via-purple to-black">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-white mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Certifications
        </motion.h2>
        <div className="relative max-w-2xl mx-auto" style={{ perspective: 1000 }}>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                rotateY: { type: "spring", stiffness: 100, damping: 20 },
                opacity: { duration: 0.2 },
              }}
              className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="flex items-center mb-4">
                <FaCertificate className="text-2xl text-pastelPink mr-2" />
                <h3 className="text-lg font-bold text-pastelPink">{certifications[currentIndex].title}</h3>
              </div>
              <p className="text-grey mb-2">Issuer: {certifications[currentIndex].issuer}</p>
              <p className="text-grey mb-4">Date: {certifications[currentIndex].date}</p>
              <motion.a 
                href={certifications[currentIndex].link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block bg-pastelPink text-black font-semibold py-2 px-4 rounded hover:bg-opacity-80 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Certificate
              </motion.a>
            </motion.div>
          </AnimatePresence>
          <motion.button 
            onClick={prevCertificate} 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaChevronLeft className="text-xl" />
          </motion.button>
          <motion.button 
            onClick={nextCertificate} 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-24 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaChevronRight className="text-xl" />
          </motion.button>
        </div>
        <div className="mt-8 flex justify-center items-center">
          {certifications.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
                setProgress(0);
              }}
              className={`mx-1 w-3 h-3 rounded-full ${
                index === currentIndex ? 'bg-pastelPink' : 'bg-gray-400'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            />
          ))}
        </div>
        <motion.div 
          className="w-full bg-gray-200 rounded-full h-2.5 mt-4 max-w-2xl mx-auto"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="bg-pastelPink h-2.5 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </motion.div>
      </div>
    </section>
  );
}