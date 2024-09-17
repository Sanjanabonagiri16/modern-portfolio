import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black bg-opacity-90 text-pastelPink py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-2">
          <div className="flex justify-between items-center w-full">
            <p className="text-sm">
              &copy; 2023 Sanjana Bonagiri. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/sanjana-bonagiri/" target="_blank" rel="noopener noreferrer" className="text-grey hover:text-pastelPink transition-colors">
                <FaLinkedin className="text-xl" />
              </a>
              <a href="https://github.com/Sanjanabonagiri16" target="_blank" rel="noopener noreferrer" className="text-grey hover:text-pastelPink transition-colors">
                <FaGithub className="text-xl" />
              </a>
              <a href="mailto:bonagirisanjana1116@gmail.com" className="text-grey hover:text-pastelPink transition-colors">
                <FaEnvelope className="text-xl" />
              </a>
            </div>
          </div>
          <p className="text-sm text-center">
            Designed and built by Sanjana Bonagiri
          </p>
        </div>
      </div>
    </footer>
  );
}