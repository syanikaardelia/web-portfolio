import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { FeaturedCaseStudy } from './components/FeaturedCaseStudy';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { LeadershipSection } from './components/LeadershipSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#fcfdfd] text-navy-800 selection:bg-brand-100 selection:text-brand-900">
      {/* 1. Sticky Minimalist Navbar */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. About Section */}
        <About />

        {/* 4. Professional Experience Timeline */}
        <ExperienceTimeline />

        {/* 5. Featured Experience / Case Study */}
        <FeaturedCaseStudy />

        {/* 6. Selected Projects Grid with Modal Interactivity */}
        <ProjectsSection />

        {/* 7. Skills & Expertise by Categories */}
        <SkillsSection />

        {/* 8. Leadership & Organizational Experience */}
        <LeadershipSection />

        {/* 9. Certifications & Continuous Learning */}
        <CertificationsSection />

        {/* 10. Contact Section */}
        <ContactSection />
      </main>

      {/* 11. Minimal Footer */}
      <Footer />
    </div>
  );
};

export default App;
