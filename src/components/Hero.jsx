import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cloud, Shield, Settings, ChevronDown, Eye } from 'lucide-react';
import { supabase } from '@/lib/customSupabaseClient';

const Hero = ({ scrollToSection }) => {
  const [viewCount, setViewCount] = useState(0);

  useEffect(() => {
    const incrementView = async () => {
      const { data, error } = await supabase.rpc('increment_views', { page_slug: 'portfolio' });
      if (!error && data) {
        setViewCount(data);
      } else {
        const { data: currentData, error: currentError } = await supabase
          .from('page_views')
          .select('views')
          .eq('page', 'portfolio')
          .single();
        if (!currentError && currentData) {
          setViewCount(currentData.views);
        }
      }
    };

    incrementView();
  }, []);

  return (
    <section id="intro" className="min-h-screen flex items-center justify-center px-4 pt-24 md:pt-16">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="relative">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-r from-pink-400 to-fuchsia-500 p-1.5"
            >
              <img  
                className="w-full h-full rounded-full object-cover bg-slate-800"
                alt="Jannat, Cloud Security Engineer"
                src="https://horizons-cdn.hostinger.com/0f5965b0-7486-491c-a33a-64f4dac29101/a76414e5c1dcaa8d0dd39a095f5b0fbc.jpg" />
            </motion.div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold text-white mb-4"
          >
            Jannat
            <span className="block text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-fuchsia-500 mt-2">
              Cloud Security Engineer
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Cloud Security Engineer with 5+ years of experience specializing in AWS cloud security, networking, and compliance automation. Skilled in designing secure AWS architectures, implementing IAM governance, container security, and embedding security into IaC and CI/CD pipelines.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center items-center gap-4 mt-8"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20"
            >
              <Cloud className="h-5 w-5 text-pink-400" />
              <span className="text-white">AWS Security</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20"
            >
              <Shield className="h-5 w-5 text-pink-400" />
              <span className="text-white">Container Security</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20"
            >
              <Settings className="h-5 w-5 text-pink-400" />
              <span className="text-white">DevSecOps</span>
            </motion.div>
             <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20"
            >
              <Eye className="h-5 w-5 text-pink-400" />
              <span className="text-white font-bold">{viewCount.toLocaleString()}</span>
              <span className="text-gray-300">views</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-12"
          >
            <button
              onClick={() => scrollToSection('experience')}
              className="animate-bounce"
            >
              <ChevronDown className="h-8 w-8 text-pink-400" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;