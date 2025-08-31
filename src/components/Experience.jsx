import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experienceData = [
  {
    role: "Service Specialist – AWS Networking & Security",
    company: "QBSS",
    period: "Apr. 2024 – Present",
    points: [
      "Designed and implemented secure AWS VPC architectures with multi-tier segmentation.",
      "Integrated VPC Flow Logs with GuardDuty and Security Hub for real-time threat detection.",
      "Automated container image scanning and runtime policy enforcement for ECS Fargate.",
      "Led cloud security incident investigations, performing log correlation and root cause analysis."
    ]
  },
  {
    role: "Senior Associate – Cloud Security Engineer",
    company: "NTT DATA",
    period: "Dec. 2022 – Apr. 2024",
    points: [
      "Conducted cloud and application security architecture reviews for new AWS workloads.",
      "Designed automated guardrails using Terraform to enforce encryption and least privilege.",
      "Implemented multi-layered security on ECS/EKS clusters (RBAC, network policies).",
      "Integrated Aqua Security and Prisma Cloud to scan container images for vulnerabilities."
    ]
  },
  {
    role: "Technical Advisor– Cloud Engineer",
    company: "Concentrix",
    period: "Sept. 2021 – Dec. 2022",
    points: [
      "Designed secure AWS landing zones with centralized IAM, logging, and encryption.",
      "Managed IAM governance, implementing fine-grained policies and MFA enforcement.",
      "Set up centralized CloudTrail logging across all accounts for compliance and audit.",
      "Migrated on-premises applications to AWS with network isolation and encryption."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-300">
            A proven track record in securing multi-account AWS environments and enabling DevSecOps.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-pink-400/20 rounded-full"></div>
          {experienceData.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className={`mb-12 flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
            >
              <div className="relative w-full max-w-3xl">
                <div className={`absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-slate-800 border-4 border-pink-400 rounded-full flex items-center justify-center z-10 ${index % 2 === 0 ? '-right-4' : '-left-4'}`}>
                  <Briefcase className="w-4 h-4 text-pink-400" />
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-pink-500/50 transition-all duration-300 transform hover:scale-[1.02]">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white">{job.role}</h3>
                    <p className="text-lg text-pink-400 font-semibold my-1">{job.company}</p>
                    <p className="text-sm text-gray-400">{job.period}</p>
                  </div>
                  <ul className="mt-6 space-y-3 list-disc list-inside text-gray-300">
                    {job.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;