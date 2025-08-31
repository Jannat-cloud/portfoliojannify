import React from 'react';
import { motion } from 'framer-motion';

const skills = {
    "Cloud Security": ["AWS IAM", "VPC Security", "KMS", "GuardDuty", "Security Hub", "Inspector", "AWS Config", "CloudTrail"],
    "Container Security": ["ECS", "EKS", "Fargate", "Docker", "Aqua Security", "Prisma Cloud"],
    "Infrastructure as Code": ["Terraform", "AWS CloudFormation"],
    "CI/CD Security": ["SAST", "DAST", "Image Scanning", "Secrets Detection"],
    "Networking & Encryption": ["VPC Architecture", "Subnetting", "Private Link", "TLS Encryption"],
    "Incident Response": ["Threat Modelling", "Log Analysis", "Bash", "PowerShell"]
};

const Skills = () => {
    return (
        <section id="skills" className="py-20 px-4 bg-slate-900/50">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Core Skills</h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Adept at working with a wide range of cloud-native security tools and technologies.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.entries(skills).map(([category, skillList], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * (index + 1) }}
                            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-pink-500/50 transition-all duration-300 transform hover:scale-[1.02]"
                        >
                            <h3 className="text-xl font-bold text-pink-400 mb-4">{category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {skillList.map(skill => (
                                    <span key={skill} className="px-3 py-1 bg-pink-400/20 text-pink-300 rounded-full text-sm font-medium">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;