import React from 'react';
import { motion } from 'framer-motion';
import { Server, Settings, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projectsData = [
  {
    icon: Server,
    title: "Secured Multi-Account AWS Environment",
    description: "Designed and implemented a secure multi-account AWS setup for a financial client using Security Hub, AWS Config, and automated Lambda remediation to prevent public S3 access and open security groups.",
    tags: ["Security Hub", "AWS Config", "Lambda", "S3 Security"],
    image: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe",
    alt: "Code on a screen representing security automation"
  },
  {
    icon: Settings,
    title: "Legacy Application Migration to AWS",
    description: "Migrated a legacy on-premise application to AWS using CloudFormation templates. Built a secure landing zone with private subnets, KMS encryption, and automated compliance checks for a robust cloud foundation.",
    tags: ["CloudFormation", "Landing Zone", "KMS", "VPC"],
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159",
    alt: "Diagram of cloud infrastructure"
  },
];

const ProjectCard = ({ project, handleProjectClick, delay }) => {
  const Icon = project.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="group"
    >
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-pink-500/50 transition-all duration-300 hover:transform hover:scale-105 h-full flex flex-col">
        <div className="flex items-center space-x-3 mb-4">
          <Icon className="h-8 w-8 text-pink-500" />
          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
        </div>
        
        <p className="text-gray-300 mb-6 leading-relaxed flex-grow">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-pink-400/20 text-pink-300 rounded-full text-sm">{tag}</span>
          ))}
        </div>
        
        <Button 
          onClick={handleProjectClick}
          className="w-full bg-gradient-to-r from-pink-500 to-fuchsia-600 hover:from-pink-600 hover:to-fuchsia-700 text-white mt-auto"
        >
          View Details <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  );
};

const Projects = ({ handleProjectClick }) => {
  return (
    <section id="projects" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Key Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hands-on experience in architecting and implementing secure, scalable, and compliant cloud solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.title} project={project} handleProjectClick={handleProjectClick} delay={0.1 * (index + 1)} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;