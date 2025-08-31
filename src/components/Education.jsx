import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award } from 'lucide-react';

const educationData = [
  {
    icon: Award,
    title: "Post-Graduation in Cloud Computing and DevOps",
    issuer: "IIT Roorkee",
    year: "2024",
    link: "https://tih.iitr.ac.in/certificate/intellipaat/IPTIH25050542.png",
    description: "Intensive program covering advanced cloud architectures, DevOps methodologies, and security best practices.",
  },
  {
    icon: BookOpen,
    title: "Bachelor of Arts in English Literature",
    issuer: "University of Delhi",
    year: "2019",
    description: "Developed strong analytical, communication, and critical thinking skills.",
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Education & Certificates</h2>
        </motion.div>
        
        <div className="space-y-12">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex items-start space-x-6"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-pink-400/10 rounded-full flex items-center justify-center border-2 border-pink-400/30">
                <item.icon className="w-8 h-8 text-pink-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                <p className="text-lg text-pink-400 font-semibold">{item.issuer} | {item.year}</p>
                <p className="text-gray-300 mt-2">{item.description}</p>
                {item.link && (
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block mt-3 text-pink-400 hover:text-pink-300 font-semibold"
                  >
                    View Certificate &rarr;
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;