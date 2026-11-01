import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ClassActivities from './components/ClassActivities';
import JobMatchHireSection from './components/JobMatchHireSection';
import ProjectWriteup from './components/ProjectWriteup';
import MediumBlog from './components/MediumBlog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ImageModal from './components/ImageModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('Home');
  const [modalState, setModalState] = useState({
    isOpen: false,
    images: [],
    currentIndex: 0,
    title: ''
  });

  const handleOpenModal = (images, index = 0, title = '') => {
    setModalState({
      isOpen: true,
      images: Array.isArray(images) ? images : [images],
      currentIndex: index,
      title
    });
  };

  const handleCloseModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
  };

  const setCurrentModalIndex = (updater) => {
    setModalState(prev => ({
      ...prev,
      currentIndex: typeof updater === 'function' ? updater(prev.currentIndex) : updater
    }));
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1E1B4B] pastel-bg-glow">
      {/* Top Fixed Navigation */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <ClassActivities onOpenModal={handleOpenModal} />
        <JobMatchHireSection onOpenModal={handleOpenModal} />
        <ProjectWriteup />
        <MediumBlog />
        <Contact />
      </main>

      {/* Clean Footer */}
      <Footer />

      {/* Global Image Lightbox Modal */}
      <ImageModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        images={modalState.images}
        currentIndex={modalState.currentIndex}
        setCurrentIndex={setCurrentModalIndex}
        title={modalState.title}
      />
    </div>
  );
}
