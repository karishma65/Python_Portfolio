import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-purple-100 py-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center space-x-3 text-sm text-slate-700">
          <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm">
            <span>&lt;/&gt;</span>
          </div>
          <span className="font-bold text-slate-800 text-base">{personalInfo.name}</span>
        </div>

        {/* Useful Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-slate-600">
          <a href="#home" className="hover:text-purple-600 transition-colors">Home</a>
          <a href="#about" className="hover:text-purple-600 transition-colors">About</a>
          <a href="#activities" className="hover:text-purple-600 transition-colors">Class Activities</a>
          <a href="#jobmatchhire" className="hover:text-purple-600 transition-colors">JobMatchHire</a>
          <a href="#writeup" className="hover:text-purple-600 transition-colors">Documentation</a>
          <a href="#blog" className="hover:text-purple-600 transition-colors">Blog</a>
          <a href="#contact" className="hover:text-purple-600 transition-colors">Contact</a>
        </div>

        {/* Scroll to Top */}
        <button
          onClick={scrollToTop}
          className="w-9 h-9 rounded-full bg-purple-50 hover:bg-purple-600 text-purple-600 hover:text-white flex items-center justify-center transition-all shadow-xs"
          title="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>

      </div>
    </footer>
  );
}
