import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/components/ui/use-toast';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProjectClick = () => {
    toast({
      title: "🚧 Project details coming soon!",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <>
      <Helmet>
        <title>Jannat - Cloud Security Engineer</title>
        <meta name="description" content="Portfolio of Jannat, a Cloud Security Engineer with 5+ years of experience in AWS, compliance, and DevSecOps." />
        <meta property="og:title" content="Jannat - Cloud Security Engineer" />
        <meta property="og:description" content="Portfolio of Jannat, a Cloud Security Engineer with 5+ years of experience in AWS, compliance, and DevSecOps." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-rose-900 text-white">
        <Navbar scrollToSection={scrollToSection} />
        <main>
          <Hero scrollToSection={scrollToSection} />
          <Experience />
          <Skills />
          <Projects handleProjectClick={handleProjectClick} />
          <Education />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;