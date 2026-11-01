import React from 'react';
import { ZoomIn, ExternalLink, Download, Sparkles, FileText, ArrowUpRight } from 'lucide-react';
import { classActivities } from '../data/portfolioData';

export default function ClassActivities({ onOpenModal }) {
  return (
    <section id="activities" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Unified Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic Work & Practical Activities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Class Activities
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            A comprehensive collection of coursework, activities, hands-on projects, and competitive milestones.
          </p>
        </div>

        {/* All Activities in One Unified Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classActivities.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-pastel hover:shadow-pastel-hover transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* Image Header with Zoom / Preview trigger */}
                <div 
                  className="relative aspect-[16/10] overflow-hidden bg-slate-100 cursor-pointer"
                  onClick={() => onOpenModal(item.images, 0, item.title)}
                >
                  <img
                    src={item.primaryImage}
                    alt={item.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-slate-900/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-slate-800 text-xs font-semibold flex items-center gap-1.5 shadow-md">
                      <ZoomIn className="w-3.5 h-3.5 text-purple-600" />
                      <span>Click to preview</span>
                    </div>
                  </div>

                  {/* Badge if 1st place */}
                  {item.badge && (
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      🏆 {item.badge}
                    </div>
                  )}

                  {/* Multi-image count indicator */}
                  {item.images.length > 1 && (
                    <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md text-white text-[11px] font-medium px-2 py-0.5 rounded-lg">
                      {item.images.length} photos
                    </div>
                  )}

                  {/* Visual Capitalist PDF preview tag */}
                  {item.isPdfActivity && (
                    <div className="absolute top-3 left-3 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                      <FileText className="w-3.5 h-3.5" /> PDF Page 1 Preview
                    </div>
                  )}
                </div>

                {/* Card Text Content */}
                <div className="p-6">
                  <h3 className="font-bold text-lg text-slate-900 group-hover:text-purple-600 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  
                  {/* Exact description from user specifications */}
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Card Action Footer: Highlighted Action Buttons */}
              <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                
                {/* Specific actions based on activity type */}
                {item.isPdfActivity ? (
                  <div className="flex flex-wrap items-center gap-2.5 w-full justify-between">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center space-x-2 text-xs sm:text-sm font-bold text-purple-700 bg-purple-100/80 hover:bg-purple-200 border border-purple-200 px-4 py-2 rounded-xl transition-all hover:scale-105 active:scale-95"
                    >
                      <span>Website Link</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>

                    {/* Highlighted larger Download PDF button */}
                    <a
                      href={item.pdfDownload}
                      download="visualcapital.pdf"
                      className="inline-flex items-center space-x-2 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-md shadow-purple-300/50 hover:shadow-purple-400/60 px-4 py-2.5 rounded-xl transition-all hover:scale-105 active:scale-95"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download PDF</span>
                    </a>
                  </div>
                ) : item.fileDownload ? (
                  <div className="flex items-center gap-2 w-full justify-between">
                    <button
                      onClick={() => onOpenModal(item.images, 0, item.title)}
                      className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-600 hover:text-purple-600 transition-colors"
                    >
                      <ZoomIn className="w-4 h-4" />
                      <span>Preview Slide 1</span>
                    </button>

                    {/* Highlighted larger Download PPT button */}
                    <a
                      href={item.fileDownload}
                      download="MatchHire_Candidate_Evaluation_ECCE_Presentation.pptx"
                      className="inline-flex items-center space-x-2 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-md shadow-purple-300/50 hover:shadow-purple-400/60 px-4 py-2.5 rounded-xl transition-all hover:scale-105 active:scale-95"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download PPT</span>
                    </a>
                  </div>
                ) : item.link ? (
                  <div className="flex items-center gap-2 w-full justify-between">
                    <button
                      onClick={() => onOpenModal(item.images, 0, item.title)}
                      className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-600 hover:text-purple-600 transition-colors"
                    >
                      <ZoomIn className="w-4 h-4" />
                      <span>View Image</span>
                    </button>

                    {/* Highlighted larger Open Link button */}
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center space-x-2 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-md shadow-purple-300/50 hover:shadow-purple-400/60 px-4 py-2.5 rounded-xl transition-all hover:scale-105 active:scale-95"
                    >
                      <span>Open Link</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                ) : (
                  <div className="flex items-center justify-end w-full">
                    <button
                      onClick={() => onOpenModal(item.images, 0, item.title)}
                      className="inline-flex items-center space-x-1.5 text-xs font-bold text-purple-600 hover:text-purple-700 group/btn bg-purple-50 hover:bg-purple-100 px-3.5 py-2 rounded-xl transition-all"
                    >
                      <span>View Gallery ({item.images.length})</span>
                      <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
