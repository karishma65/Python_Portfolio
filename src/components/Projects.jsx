import React, { useState } from 'react';
import { ArrowUpRight, ZoomIn, ExternalLink, Play, Mic, FileText, Layers, Sparkles } from 'lucide-react';
import { portfolioItems } from '../data/portfolioData';

export default function Projects({ onOpenModal }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filterTabs = ['All', 'Python', 'IoT', 'Web', 'Academic', 'Events'];

  const filteredItems = portfolioItems.filter(item => {
    if (activeFilter === 'All') return true;
    return item.category.toLowerCase() === activeFilter.toLowerCase() || 
           item.tags.some(tag => tag.toLowerCase() === activeFilter.toLowerCase());
  });

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching Panel 3 */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            My Projects
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            A collection of academic and personal projects, including my Advanced Python Programming work.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-purple-600 text-white shadow-md shadow-purple-200 scale-105'
                      : 'bg-white text-slate-600 hover:text-purple-600 hover:bg-purple-50 border border-slate-200'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-pastel hover:shadow-pastel-hover transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
            >
              {/* Card Image Area with Click to Zoom */}
              <div 
                className="relative aspect-[16/10] overflow-hidden bg-slate-100 cursor-pointer"
                onClick={() => onOpenModal(item.images, 0, item.title)}
              >
                <img
                  src={item.primaryImage}
                  alt={item.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay hover badge */}
                <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-slate-800 text-xs font-semibold flex items-center gap-1.5 shadow-md">
                    <ZoomIn className="w-3.5 h-3.5 text-purple-600" />
                    <span>Click to view ({item.images.length})</span>
                  </div>
                </div>

                {/* Badge if 1st place or audio/video */}
                {item.badge && (
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    🏆 {item.badge}
                  </div>
                )}
                {item.isAudio && (
                  <div className="absolute top-3 left-3 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                    <Mic className="w-3 h-3" /> Audio Thesis
                  </div>
                )}
                {item.isVideo && (
                  <div className="absolute top-3 left-3 bg-rose-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                    <Play className="w-3 h-3" /> Demo Video
                  </div>
                )}

                {/* Multi-image indicator badge */}
                {item.images.length > 1 && (
                  <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md text-white text-[11px] font-medium px-2 py-0.5 rounded-lg">
                    {item.images.length} photos
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg text-slate-900 group-hover:text-purple-600 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  
                  {/* Exact description from user specifications */}
                  <p className="mt-2.5 text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                  {/* Tag pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.slice(0, 2).map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-semibold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions: Direct Link or Lightbox */}
                  <div className="flex items-center space-x-1">
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 rounded-full bg-purple-50 hover:bg-purple-600 text-purple-600 hover:text-white flex items-center justify-center transition-all duration-200"
                        title="Open external link"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : item.fileDownload ? (
                      <a
                        href={item.fileDownload}
                        download
                        className="w-8 h-8 rounded-full bg-purple-50 hover:bg-purple-600 text-purple-600 hover:text-white flex items-center justify-center transition-all duration-200"
                        title="Download presentation"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    ) : (
                      <button
                        onClick={() => onOpenModal(item.images, 0, item.title)}
                        className="w-8 h-8 rounded-full bg-slate-50 hover:bg-purple-600 text-slate-500 hover:text-white flex items-center justify-center transition-all duration-200"
                        title="View gallery"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
