import React from 'react';
import { Star, LayoutTemplate, Trophy, HelpCircle, ExternalLink, Play, ArrowRight, Sparkles } from 'lucide-react';
import { externalLinks } from '../data/portfolioData';

export default function Events({ onOpenModal }) {
  const eventHighlights = [
    {
      id: 'stars',
      title: 'Stars Photo',
      subtitle: 'Activity capture from the STARS event',
      image: '/assets/stars-photo.jpeg',
      allImages: ['/assets/stars-photo.jpeg'],
      icon: <Star className="w-4 h-4 text-purple-600" />,
      description: 'Stars encouraged active participation and continuous learning in the classroom. They motivated us to improve our knowledge, learn from our mistakes, and participate more actively in classroom activities.'
    },
    {
      id: 'storyboard',
      title: 'Storyboard Activity',
      subtitle: 'Visual concept expression & planning',
      image: '/assets/storyboard-img.jpeg',
      allImages: ['/assets/storyboard-img.jpeg'],
      icon: <LayoutTemplate className="w-4 h-4 text-purple-600" />,
      description: 'I created a storyboard based on a concept discussed in class. This activity helped me understand the topic visually and express my ideas in a more creative way.'
    },
    {
      id: 'quiz',
      title: 'Class Quiz & Leaderboard',
      subtitle: 'First position group collaboration',
      image: '/assets/quiz-leaderborad.jpeg',
      allImages: ['/assets/quiz-cls1.jpeg', '/assets/quiz-cls-2.jpeg', '/assets/quiz-leaderborad.jpeg'],
      icon: <Trophy className="w-4 h-4 text-amber-500" />,
      badge: '1st Place Winner',
      description: 'Our faculty organized a group quiz with around ten students in each team. My team collaborated to answer the questions and secured first position in the competition.'
    },
    {
      id: 'padlet',
      title: 'Padlet - Questions',
      subtitle: 'LeetCode questions & discussions',
      image: '/assets/padlit.jpeg',
      allImages: ['/assets/padlit.jpeg'],
      icon: <HelpCircle className="w-4 h-4 text-purple-600" />,
      link: externalLinks.padlet,
      description: 'I explored LeetCode and selected two questions each from Easy, Medium, and Hard difficulty levels. I organized the selected questions on Padlet.'
    }
  ];

  return (
    <section id="events" className="py-24 bg-gradient-to-b from-purple-50/40 via-sky-50/20 to-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading matching Panel 4 */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Highlights</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Event Highlights
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Activities and learning experiences from the Advanced Python Programming course.
          </p>
        </div>

        {/* 4 Cards Grid matching Panel 4 top half */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {eventHighlights.map((event) => (
            <div
              key={event.id}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-soft hover:shadow-pastel hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Header */}
                <div
                  className="relative aspect-[4/3] overflow-hidden bg-slate-100 cursor-pointer"
                  onClick={() => onOpenModal(event.allImages, 0, event.title)}
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {event.badge && (
                    <div className="absolute top-2.5 left-2.5 bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                      {event.badge}
                    </div>
                  )}
                  {event.allImages.length > 1 && (
                    <div className="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded-md font-medium">
                      {event.allImages.length} images
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center space-x-1.5 text-xs text-purple-600 font-semibold mb-1">
                    {event.icon}
                    <span>{event.subtitle}</span>
                  </div>
                  <h3 className="font-bold text-base text-slate-900 group-hover:text-purple-600 transition-colors">
                    {event.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>

              {/* Action Link Footer */}
              <div className="px-5 pb-5 pt-0">
                {event.link ? (
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-1 text-xs font-semibold text-purple-600 hover:text-purple-700 group/link"
                  >
                    <span>Open Padlet</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                ) : (
                  <button
                    onClick={() => onOpenModal(event.allImages, 0, event.title)}
                    className="inline-flex items-center space-x-1 text-xs font-semibold text-purple-600 hover:text-purple-700 group/link"
                  >
                    <span>View Photos</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Project Demo Video Banner matching bottom half of Panel 4 */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-purple-100 shadow-pastel flex flex-col md:flex-row items-center gap-8">

          {/* Video Thumbnail mockup */}
          <div className="relative w-full md:w-5/12 aspect-video rounded-2xl overflow-hidden bg-slate-900 group shadow-md shrink-0">
            <img
              src="/assets/ppt_architecture.png"
              alt="Project Demo Video Preview"
              className="w-full h-full object-cover opacity-80 group-hover:opacity-90 group-hover:scale-105 transition-all duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <a
                href={externalLinks.videoDrive}
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full bg-purple-600/90 hover:bg-purple-600 text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all"
              >
                <Play className="w-6 h-6 ml-1 fill-white" />
              </a>
            </div>
            <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white text-xs font-mono px-2 py-0.5 rounded">
              04:28
            </div>
          </div>

          {/* Video Description & CTA */}
          <div className="w-full md:w-7/12 space-y-4 text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-bold uppercase tracking-wider">
              <span>Demonstration</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Project Demo Video
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              This video demonstrates the working of my JobMatchHire project, showcasing the Candidate Portal, ECCE Engine, and their key functionalities.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="#jobmatchhire"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm shadow-md hover:shadow-purple-300 transition-all"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Play Video in Showcase</span>
              </a>
              <a
                href={externalLinks.videoDrive}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-full bg-slate-100 hover:bg-purple-50 text-slate-700 hover:text-purple-700 font-semibold text-sm transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open Google Drive</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
