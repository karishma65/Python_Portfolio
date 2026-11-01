import React from 'react';
import { Github, BookOpen, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background soft ambient blobs matching pastel aesthetic */}
      <div className="absolute top-12 left-1/4 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />
      <div className="absolute top-36 right-10 w-80 h-80 bg-sky-200/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Clean Elements */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* Student Developer Pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs sm:text-sm font-semibold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-purple-600 animate-ping"></span>
              <span>Student Developer</span>
            </div>

            {/* Main Greeting */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                Hi, I'm <span className="bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-800 bg-clip-text text-transparent">{personalInfo.name}!</span> <span className="inline-block hover:rotate-12 transition-transform cursor-pointer">👋</span>
              </h1>
              
              <h2 className="text-xl sm:text-2xl font-bold text-slate-700">
                {personalInfo.title}
              </h2>
            </div>

            {/* Bio Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              {personalInfo.shortBio}
            </p>

            {/* Rectangular information element: only registration number, no symbols */}
            <div className="inline-flex items-center px-4 py-2 rounded-xl bg-white border border-purple-100 shadow-soft text-sm font-semibold text-purple-700">
              <span>{personalInfo.registrationNo}</span>
            </div>

            {/* Action Button: Highlighted styling with distinct accent colour */}
            <div className="pt-2">
              <a
                href="#activities"
                className="inline-flex items-center px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-purple-300/50 hover:shadow-purple-400/60 hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <span>View My Work</span>
              </a>
            </div>

            {/* Social Icons: GitHub and Medium Profile (LinkedIn removed) */}
            <div className="flex items-center space-x-3 pt-3">
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-purple-600 hover:border-purple-300 hover:shadow-md transition-all duration-200 hover:-translate-y-1"
                aria-label="GitHub"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://medium.com/@karishmaarivazhagan15"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-purple-600 hover:border-purple-300 hover:shadow-md transition-all duration-200 hover:-translate-y-1"
                aria-label="Medium"
                title="Medium Profile"
              >
                <BookOpen className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Profile Picture with existing oval background shape */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            
            {/* Sparkle top accent */}
            <div className="absolute -top-4 right-12 z-20 text-purple-500 animate-bounce">
              <Sparkles className="w-8 h-8" />
            </div>

            {/* Existing oval background shape and surrounding design */}
            <div className="relative w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96">
              {/* Pastel lavender oval backdrop */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-200 via-purple-300 to-indigo-200 shadow-xl opacity-90 transition-all duration-500"></div>

              {/* Decorative orbit ring */}
              <div className="absolute -inset-3 rounded-full border-2 border-dashed border-purple-300/60 pointer-events-none animate-spin-slow"></div>

              {/* New profile image: profile.jpeg */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl flex items-center justify-center bg-purple-100">
                <img
                  src="/assets/profile.jpeg"
                  alt="Karishma"
                  className="w-full h-full object-cover object-center scale-100"
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
