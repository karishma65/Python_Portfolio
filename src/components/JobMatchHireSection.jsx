import React, { useState } from 'react';
import { 
  Play, 
  Mic, 
  Presentation, 
  Download, 
  ExternalLink, 
  ZoomIn,
  Volume2
} from 'lucide-react';
import { externalLinks } from '../data/portfolioData';

export default function JobMatchHireSection({ onOpenModal }) {
  const [activeMediaTab, setActiveMediaTab] = useState('video'); // 'video' | 'audio' | 'ppt'

  return (
    <section id="jobmatchhire" className="py-24 relative bg-slate-900 text-white overflow-hidden rounded-3xl mx-2 sm:mx-6 lg:mx-8 my-12 shadow-2xl">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            JobMatchHire: Candidate Portal and ECCE Engine
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Explainable Contextual Competency Engine (ECCE) with contextual evidence scoring and private candidate guidance reports.
          </p>
        </div>

        {/* Media Selector Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-800/90 border border-slate-700/80 backdrop-blur-md">
            <button
              onClick={() => setActiveMediaTab('video')}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeMediaTab === 'video'
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-600/30'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Demo Video</span>
            </button>

            <button
              onClick={() => setActiveMediaTab('audio')}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeMediaTab === 'audio'
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-600/30'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Mic className="w-4 h-4" />
              <span>Audio Recording</span>
            </button>

            <button
              onClick={() => setActiveMediaTab('ppt')}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeMediaTab === 'ppt'
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-600/30'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Presentation className="w-4 h-4" />
              <span>Website PPT</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Demo Video */}
        {activeMediaTab === 'video' && (
          <div className="bg-slate-800/80 rounded-3xl border border-slate-700 p-6 sm:p-8 backdrop-blur-md animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Embedded Video Iframe with existing video preview */}
              <div className="lg:col-span-8">
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl border border-slate-700">
                  <iframe
                    src={externalLinks.videoEmbed}
                    title="Demo Video of JobMatchHire Website"
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Video Details */}
              <div className="lg:col-span-4 space-y-4 text-left">
                <div className="inline-flex items-center space-x-2 text-xs font-bold text-rose-400 bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/20">
                  <Play className="w-3.5 h-3.5 fill-rose-400" />
                  <span>Interactive Walkthrough</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white">
                  Demo Video of JobMatchHire Website
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">
                  This video demonstrates the working of my JobMatchHire project, showcasing the Candidate Portal, ECCE Engine, and their key functionalities.
                </p>

                {/* Highlighted Action Button (Removed separate View Thumbnail button) */}
                <div className="pt-3">
                  <a
                    href={externalLinks.videoDrive}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-sm transition-all shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 active:scale-95"
                  >
                    <span>Open in Google Drive</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Tab 2: Audio Recording */}
        {activeMediaTab === 'audio' && (
          <div className="bg-slate-800/80 rounded-3xl border border-slate-700 p-6 sm:p-10 backdrop-blur-md animate-fadeIn">
            <div className="max-w-4xl mx-auto space-y-6">
              
              <div className="text-center space-y-3">
                <div className="inline-flex items-center space-x-2 text-xs font-bold text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                  <Mic className="w-3.5 h-3.5" />
                  <span>Audio Walkthrough</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Audio Recording Website: JobMatchHire
                </h3>
                <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                  I explained my JobMatchHire project from a business perspective, focusing on the Candidate Portal and ECCE Engine. This recording captures my explanation of the platform and its key features.
                </p>
              </div>

              {/* Audio Player Card (No separate thumbnail, no PPT slides) */}
              <div className="bg-gradient-to-r from-purple-950/70 to-slate-900/90 rounded-2xl p-6 sm:p-8 border border-purple-500/30 shadow-xl space-y-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 rounded-2xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300 shadow-inner">
                      <Volume2 className="w-7 h-7 animate-pulse" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-white">Candidate Portal & ECCE Explanation</h4>
                      <p className="text-xs text-purple-300">JobMatchHire Business Thesis Audio Recording</p>
                    </div>
                  </div>

                  {/* Highlighted Action Button (Removed separate Thumbnail button) */}
                  <a
                    href={externalLinks.audioDrive}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white text-sm font-bold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all hover:scale-105 active:scale-95 shrink-0"
                  >
                    <span>Open in Drive</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Google Drive Audio Player Stream */}
                <div className="w-full bg-slate-950 rounded-xl overflow-hidden border border-slate-700 shadow-inner h-24">
                  <iframe
                    src={externalLinks.audioEmbed}
                    title="JobMatchHire Audio Recording"
                    className="w-full h-full border-0"
                    allow="autoplay"
                  />
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Tab 3: Website PPT (Showing ONLY Slide 1 preview, with highlighted Download PPT button) */}
        {activeMediaTab === 'ppt' && (
          <div className="bg-slate-800/80 rounded-3xl border border-slate-700 p-6 sm:p-8 backdrop-blur-md animate-fadeIn space-y-6">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700 pb-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Website PPT: JobMatchHire
                </h3>
                <p className="mt-2 text-slate-300 text-sm max-w-2xl leading-relaxed">
                  This presentation introduces my JobMatchHire project, highlighting the Candidate Portal, ECCE Engine, their features, and workflow.
                </p>
              </div>

              {/* Action Buttons: Highlighted Download PPT and Slide 1 View */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenModal(['/assets/ppt_slide1.png'], 0, 'JobMatchHire PPT - Slide 1 Preview')}
                  className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-semibold text-sm transition-all"
                >
                  <ZoomIn className="w-4 h-4" />
                  <span>View Slide 1</span>
                </button>

                {/* Highlighted larger Download PPT button */}
                <a
                  href={externalLinks.pptFile}
                  download="MatchHire_Candidate_Evaluation_ECCE_Presentation.pptx"
                  className="inline-flex items-center space-x-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-sm transition-all shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 active:scale-95"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PPT</span>
                </a>
              </div>
            </div>

            {/* ONLY First Slide Preview displayed */}
            <div className="max-w-3xl mx-auto">
              <div 
                className="bg-slate-900 rounded-2xl p-3 border border-slate-700 hover:border-purple-500/50 transition-all cursor-pointer group shadow-xl"
                onClick={() => onOpenModal(['/assets/ppt_slide1.png'], 0, 'JobMatchHire PPT - Slide 1')}
              >
                <div className="flex items-center justify-between mb-2 px-2 text-xs text-slate-400">
                  <span className="font-semibold text-purple-300">Presentation Slide 1 Preview</span>
                  <span className="text-slate-400 group-hover:text-white flex items-center gap-1">
                    <ZoomIn className="w-3.5 h-3.5" /> Click to enlarge
                  </span>
                </div>
                <div className="aspect-[16/9] rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
                  <img
                    src="/assets/ppt_slide1.png"
                    alt="JobMatchHire PPT Slide 1"
                    className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
