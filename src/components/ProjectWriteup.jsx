import React from 'react';
import { FileText, Download, Sparkles, ExternalLink } from 'lucide-react';
import { externalLinks } from '../data/portfolioData';

export default function ProjectWriteup() {
  const pdfUrl = externalLinks.projectWriteupPdf;

  return (
    <section id="writeup" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Documentation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Project Write-up
          </h2>
          {/* User's Exact Description */}
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            This section contains my project documentation, available for both online PDF preview and download.
          </p>
        </div>

        {/* Clean PDF Viewer Container with Highlighted Download Button */}
        <div className="bg-white rounded-3xl border border-purple-100 shadow-pastel overflow-hidden">
          
          {/* Top Bar with Title and Highlighted Download Button */}
          <div className="bg-slate-50/90 px-6 py-4 border-b border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                  JobMatchHire Project Write-up
                </h3>
              </div>
            </div>

            {/* Highlighted larger Download PDF Action Button */}
            <div className="flex items-center gap-3">
              <a
                href={pdfUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold text-purple-700 hover:text-purple-800 bg-purple-100/70 hover:bg-purple-200 px-4 py-2.5 rounded-xl transition-all"
              >
                <span>Open in New Tab</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={pdfUrl}
                download="JobMatchHire_Project_Writeup.pdf"
                className="inline-flex items-center space-x-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white text-sm sm:text-base font-bold shadow-lg shadow-purple-300/50 hover:shadow-purple-400/60 transition-all hover:scale-105 active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>

          {/* Embedded PDF Viewer */}
          <div className="p-4 sm:p-6 bg-slate-100/70">
            <div className="w-full h-[650px] md:h-[750px] bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-inner">
              <iframe
                src={`${pdfUrl}#toolbar=1&navpanes=0`}
                title="JobMatchHire Project Write-up PDF Preview"
                className="w-full h-full border-0"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
