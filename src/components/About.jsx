import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-transparent via-purple-50/30 to-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image with organic pastel card background (no VIT Fall 2026 text) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Organic lavender background shape */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-purple-200 via-indigo-100 to-sky-100 rounded-[2.5rem] -rotate-2 transform"></div>
              
              {/* Image Container */}
              <div className="relative rounded-[2rem] overflow-hidden bg-white p-3 shadow-xl border border-purple-100">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100">
                  <img
                    src="/assets/about-laptop.png"
                    alt="Development Setup"
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      e.currentTarget.src = "/assets/Pastel Portfolio Website Showcase.png";
                    }}
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold uppercase tracking-wider mb-3">
                <span>About</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                About Me
              </h2>
            </div>

            {/* Exact Paragraphs requested by user */}
            <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              {personalInfo.aboutParagraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
