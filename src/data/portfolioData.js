export const personalInfo = {
  name: "Karishma",
  registrationNo: "23MIC0057",
  title: "Computer Science Student | Aspiring Software Developer",
  email: "karishma.a2023@vitstudent.ac.in",
  shortBio: "I'm passionate about programming, software development, and exploring new technologies. I enjoy building projects, solving problems, and continuously learning new skills.",
  aboutParagraphs: [
    "I'm pursuing an Integrated M.Tech in Computer Science at VIT. I have experience working with programming languages such as Python, Java, C, and C++, along with web development and database technologies.",
    "I'm interested in software development, Artificial Intelligence, and Machine Learning. I enjoy learning through hands-on projects, experimenting with new technologies, and turning ideas into practical solutions."
  ],
  socialLinks: {
    github: "https://github.com/karishma65",
    medium: "https://medium.com/@karishmaarivazhagan15"
  }
};

export const mediumArticle = {
  title: "The Trouble With Being Ready Too Early",
  subtitle: "How a crowded college canteen changes the way you process data.",
  url: "https://medium.com/@karishmaarivazhagan15/the-trouble-with-being-ready-too-early-54be6224c2b8?sharedUserId=karishmaarivazhagan15",
  profileUrl: "https://medium.com/@karishmaarivazhagan15",
  author: "Karishma",
  readTime: "4 min read"
};

export const externalLinks = {
  audioDrive: "https://drive.google.com/file/d/1HJA131VwSKksi6Fwe3MAvuS8jQVeNbCU/view?usp=drivesdk",
  audioEmbed: "https://drive.google.com/file/d/1HJA131VwSKksi6Fwe3MAvuS8jQVeNbCU/preview",
  videoDrive: "https://drive.google.com/file/d/1yxtzn43f-GsSYh751l3sqifVHgnldyup/view?usp=drive_link",
  videoEmbed: "https://drive.google.com/file/d/1yxtzn43f-GsSYh751l3sqifVHgnldyup/preview",
  visualCapitalist: "https://www.visualcapitalist.com/ranked-the-worlds-cities-with-the-most-tree-coverage/",
  visualCapitalPdf: "/assets/visualcapital.pdf",
  visualCapitalPreview: "/assets/visualcapital_preview.png",
  padlet: "https://padlet.com/sharmilabanuk/object-oriented-python-question-sets-created-by-students-dmwur6hlhsjj013w",
  pptFile: "/assets/MatchHire_Candidate_Evaluation_ECCE_Presentation.pptx",
  pptSlide1: "/assets/ppt_slide1.png",
  projectWriteupPdf: "/assets/JobMatchHire_Project_Writeup.pdf",
  projectWriteupPreview: "/assets/jobmatchhire_writeup_preview.png",
  mediumArticle: "https://medium.com/@karishmaarivazhagan15/the-trouble-with-being-ready-too-early-54be6224c2b8?sharedUserId=karishmaarivazhagan15",
  mediumProfile: "https://medium.com/@karishmaarivazhagan15"
};

export const classActivities = [
  {
    id: "stars-photo",
    title: "Stars Photo",
    description: "Stars encouraged active participation and continuous learning in the classroom. They motivated us to improve our knowledge, learn from our mistakes, and participate more actively in classroom activities.",
    images: ["/assets/stars-photo.jpeg"],
    primaryImage: "/assets/stars-photo.jpeg",
    icon: "Star"
  },
  {
    id: "storyboard-activity",
    title: "Storyboard Activity",
    description: "I created a storyboard based on a concept discussed in class. This activity helped me understand the topic visually and express my ideas in a more creative way.",
    images: ["/assets/storyboard-img.jpeg"],
    primaryImage: "/assets/storyboard-img.jpeg",
    icon: "LayoutTemplate"
  },
  {
    id: "impairment-assessment",
    title: "IoT-Based Application for Impairment Assessment",
    description: "Our faculty asked each of us to identify a different impairment and propose an IoT-based application to assess or address it. Her real-life experiences and guidance helped me understand practical challenges and think of meaningful technology-based solutions.",
    images: ["/assets/impair1.jpeg", "/assets/impair2.jpeg"],
    primaryImage: "/assets/impair1.jpeg",
    icon: "Cpu"
  },
  {
    id: "class-quiz",
    title: "Class Quiz",
    badge: "1st Position",
    description: "Our faculty organized a group quiz with around ten students in each team. My team collaborated to answer the questions and secured first position in the competition.",
    images: [
      "/assets/quiz-cls1.jpeg",
      "/assets/quiz-cls-2.jpeg",
      "/assets/quiz-leaderborad.jpeg"
    ],
    primaryImage: "/assets/quiz-leaderborad.jpeg",
    icon: "Trophy"
  },
  {
    id: "audio-recording",
    title: "Audio Recording Website: JobMatchHire",
    description: "I explained my JobMatchHire project from a business perspective, focusing on the Candidate Portal and ECCE Engine. This recording captures my explanation of the platform and its key features.",
    images: ["/assets/audio_preview.png"],
    primaryImage: "/assets/audio_preview.png",
    link: externalLinks.audioDrive,
    embedLink: externalLinks.audioEmbed,
    isAudio: true,
    icon: "Mic"
  },
  {
    id: "website-ppt",
    title: "Website PPT: JobMatchHire",
    description: "This presentation introduces my JobMatchHire project, highlighting the Candidate Portal, ECCE Engine, their features, and workflow.",
    images: ["/assets/ppt_slide1.png"],
    primaryImage: "/assets/ppt_slide1.png",
    fileDownload: externalLinks.pptFile,
    icon: "Presentation"
  },
  {
    id: "demo-video",
    title: "Demo Video of JobMatchHire Website",
    description: "This video demonstrates the working of my JobMatchHire project, showcasing the Candidate Portal, ECCE Engine, and their key functionalities.",
    images: ["/assets/video_preview.png"],
    primaryImage: "/assets/video_preview.png",
    link: externalLinks.videoDrive,
    embedLink: externalLinks.videoEmbed,
    isVideo: true,
    icon: "Video"
  },
  {
    id: "padlet-questions",
    title: "Padlet Screenshots with Questions",
    description: "I explored LeetCode and selected two questions each from Easy, Medium, and Hard difficulty levels. I organized the selected questions on Padlet.",
    images: ["/assets/padlit.jpeg"],
    primaryImage: "/assets/padlit.jpeg",
    link: externalLinks.padlet,
    icon: "HelpCircle"
  },
  {
    id: "visual-capitalist",
    title: "Visual Capitalist Activity",
    description: "Using a website featuring world cities with the highest tree coverage, I collected data and created a DataFrame for analysis. I practised data manipulation and analysis using aggregation functions, GroupBy operations, and Pivot Tables to extract meaningful insights from the data.",
    images: ["/assets/visualcapital_preview.png"],
    primaryImage: "/assets/visualcapital_preview.png",
    link: externalLinks.visualCapitalist,
    pdfDownload: externalLinks.visualCapitalPdf,
    isPdfActivity: true,
    icon: "BarChart3"
  }
];
