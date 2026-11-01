import React from 'react';
import { BookOpen, ExternalLink, Clock, Sparkles } from 'lucide-react';
import { personalInfo, mediumArticle } from '../data/portfolioData';

export default function MediumBlog() {
  return (
    <section id="blog" className="py-24 bg-gradient-to-b from-transparent via-purple-50/20 to-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Articles & Insights</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Medium Blog
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Technical reflections and published articles exploring computing concepts and real-world data thinking.
          </p>
        </div>

        {/* Published Medium Article Card */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-purple-100/90 shadow-pastel hover:shadow-pastel-hover transition-all duration-300 relative overflow-hidden group">
            
            {/* Top decorative gradient bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-500 via-indigo-500 to-sky-400"></div>

            <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mb-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-50 text-purple-700 text-xs font-bold border border-purple-200">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Published on Medium</span>
              </div>

              <div className="flex items-center space-x-2 text-xs text-slate-500">
                <Clock className="w-3.5 h-3.5 text-purple-600" />
                <span>{mediumArticle.readTime}</span>
              </div>
            </div>

            {/* Article Title */}
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 group-hover:text-purple-600 transition-colors leading-snug">
              {mediumArticle.title}
            </h3>

            {/* Subtitle / Short Description */}
            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              {mediumArticle.subtitle}
            </p>

            {/* Author info and Highlighted Read Article Action Button */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 font-bold flex items-center justify-center text-sm shadow-xs">
                  AK
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{personalInfo.name}</h4>
                  <a 
                    href={mediumArticle.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-purple-600 hover:underline"
                  >
                    @karishmaarivazhagan15
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                {/* Highlighted Read Article Button */}
                <a
                  href={mediumArticle.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-sm shadow-md shadow-purple-300/50 hover:shadow-purple-400/60 transition-all hover:scale-105 active:scale-95 group/btn"
                >
                  <span>Read Article</span>
                  <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
