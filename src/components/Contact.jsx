import React from 'react';
import { Mail, Github, BookOpen, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simple, Elegant Contact Section with Working Links */}
        <div className="bg-gradient-to-br from-purple-50 via-white to-sky-50 rounded-3xl p-8 sm:p-12 border border-purple-100 shadow-pastel text-center space-y-6">
          
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold uppercase tracking-wider">
            <span>Contact</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Connect with Karishma
          </h2>

          <p className="max-w-xl mx-auto text-base text-slate-600 leading-relaxed">
            Interested in discussing software development, Python projects, or potential collaborations? Feel free to reach out directly through any of the channels below.
          </p>

          {/* Contact Links Grid (Email, GitHub, Medium) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 max-w-3xl mx-auto">
            
            {/* Direct Clickable Email */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="group p-6 rounded-2xl bg-white border border-purple-100 hover:border-purple-300 shadow-xs hover:shadow-soft transition-all duration-200 flex flex-col items-center justify-between space-y-3 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-purple-100 group-hover:bg-purple-600 text-purple-700 group-hover:text-white flex items-center justify-center transition-colors shadow-sm">
                <Mail className="w-6 h-6" />
              </div>
              <div className="text-center">
                <span className="font-bold text-base text-slate-900 block">Email Me</span>
                <span className="text-xs text-slate-500 break-all">{personalInfo.email}</span>
              </div>
              <span className="mt-2 inline-flex items-center space-x-1.5 text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 px-4 py-2 rounded-xl shadow-md transition-all">
                <span>Send Email</span>
                <Mail className="w-3.5 h-3.5" />
              </span>
            </a>

            {/* GitHub Profile */}
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-white border border-purple-100 hover:border-purple-300 shadow-xs hover:shadow-soft transition-all duration-200 flex flex-col items-center justify-between space-y-3 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-purple-100 group-hover:bg-purple-600 text-purple-700 group-hover:text-white flex items-center justify-center transition-colors shadow-sm">
                <Github className="w-6 h-6" />
              </div>
              <div className="text-center">
                <span className="font-bold text-base text-slate-900 block">GitHub</span>
                <span className="text-xs text-slate-500">Repositories & Code</span>
              </div>
              <span className="mt-2 inline-flex items-center space-x-1.5 text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 px-4 py-2 rounded-xl shadow-md transition-all">
                <span>View Repositories</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </span>
            </a>

            {/* Medium Profile */}
            <a
              href={personalInfo.socialLinks.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-white border border-purple-100 hover:border-purple-300 shadow-xs hover:shadow-soft transition-all duration-200 flex flex-col items-center justify-between space-y-3 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-purple-100 group-hover:bg-purple-600 text-purple-700 group-hover:text-white flex items-center justify-center transition-colors shadow-sm">
                <BookOpen className="w-6 h-6" />
              </div>
              <div className="text-center">
                <span className="font-bold text-base text-slate-900 block">Medium</span>
                <span className="text-xs text-slate-500">Articles & Writing</span>
              </div>
              <span className="mt-2 inline-flex items-center space-x-1.5 text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 px-4 py-2 rounded-xl shadow-md transition-all">
                <span>Read Articles</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
