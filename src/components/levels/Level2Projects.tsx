import { PixelButton } from "@/components/ui/pixel-button";
import { GameLevel } from "../GameLayout";
import { ExternalLink, Github } from "lucide-react";
import dungeonBg from "@/assets/dungeon-bg.png";

interface Level2ProjectsProps {
  onNavigate: (level: GameLevel) => void;
}

export const Level2Projects = ({ onNavigate }: Level2ProjectsProps) => {
  const projects = [
    {
      id: "emotion-detection",
      title: "🧠 Real-Time Multilingual Emotion Detection",
      description: "Advanced NLP system that detects emotions in real-time across multiple languages using Flask, Deep Learning, and Deep Translator API.",
      tech: ["Flask", "NLP", "Deep Learning", "Python", "Deep Translator"],
      github: "https://github.com/gnyanasameera02-prog/Multilingual-Emotion-Detection-.git",
      demo: "#"
    },
    {
      id: "intruder-detector", 
      title: "🛡️ Smart Intruder Detector",
      description: "AI-powered security system using OpenCV and DeepFace for facial recognition with automated SMTP email alerts.",
      tech: ["OpenCV", "DeepFace", "Python", "SMTP", "Computer Vision"],
      github: "https://github.com/gnyanasameera02-prog/intruder-detection.git",
      demo: "#"
    },
    {
      id: "trip-trek",
      title: "📰 AI-News Summarizer", 
      description: "Built a multilingual AI web app to extract, summarize, and classify news, with sentiment analysis and a 7-day article tracking backend for trend insights.",
      tech: ["Python", "Flask", "NLTK", "TextBlob", "newspaper3k", "SQLAlchemy", "Google Translate API"],
      github: "https://github.com/gnyanasameera02-prog/AI-News-Summariser.git",
      demo: "#"
    },
    {
      id: "AI-News Summarizer",
      title: "🌍 Trip Trek - Travel Advisory Website", 
      description: "SEO-optimized travel advisory platform built with modern web technologies and responsive design.",
      tech: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "SEO"],
      github: "https://github.com/gnyanasameera02-prog/TripTrek-SEO.git",
      demo: "#"
    }
  ];

  // Static glow colors for project box borders
  const glowColors = [
    "glow-yellow",
    "glow-pink",
    "glow-blue"
  ];

  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: `url(${dungeonBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/85" />
      
      {/* Level Header */}
      <div className="relative z-20 pt-20 pb-10">
        <div className="text-center mb-8">
          <div className="dialog-pixel inline-block">
            <h1 className="font-pixel text-2xl text-primary glow-neon">
              LEVEL 2: PROJECT DUNGEON
            </h1>
            <p className="font-pixel text-xs text-foreground/80 mt-2">
              Discover legendary treasures (projects) hidden in the depths
            </p>
          </div>
        </div>

        {/* Projects as Treasure Chests */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className={`group relative transition-all duration-300 hover:scale-105 ${glowColors[index % glowColors.length]}`}
              >
                {/* Treasure Chest Container */}
                <div className={`dialog-pixel p-6 h-full`}>

                  {/* Project Content */}
                  <div className="space-y-4">
                    <h3 className="font-pixel text-sm leading-relaxed">
                      {project.title}
                    </h3>
                    
                    <p className="font-pixel text-xs text-foreground/80 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack as Power-ups */}
                    <div className="space-y-2">
                      <div className="font-pixel text-xs text-accent">POWER-UPS:</div>
                      <div className="flex flex-wrap gap-1">
                        {project.tech.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-2 py-1 bg-muted text-muted-foreground font-pixel text-xs border border-border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-2">
                      <PixelButton 
                        variant="level" 
                        size="sm"
                        className="flex-1 flex items-center justify-center gap-1"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <Github size={12} />
                        <span className="text-xs">CODE</span>
                      </PixelButton>
                      <PixelButton 
                        variant="portal" 
                        size="sm"
                        className="flex-1 flex items-center justify-center gap-1"
                      >
                        <ExternalLink size={12} />
                        <span className="text-xs">DEMO</span>
                      </PixelButton>
                    </div>
                  </div>

                  {/* Chest Animation Effect */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 border-2 border-current animate-pulse" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* GitHub Portal */}
          <div className="text-center mt-12">
            <div className="dialog-pixel inline-block p-6">
              <h3 className="font-pixel text-sm text-accent mb-4">MORE TREASURES AWAIT</h3>
              <p className="font-pixel text-xs text-foreground/80 mb-4 leading-relaxed">
                Explore the complete collection of projects and contributions
              </p>
              <PixelButton 
                variant="portal" 
                size="lg" 
                className="glow-neon"
                onClick={() => window.open("https://github.com/gnyanasameera02-prog", "_blank")}
              >
                <Github className="mr-2" size={16} />
                VIEW GITHUB PROFILE
              </PixelButton>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <PixelButton variant="level" onClick={() => onNavigate("level1")}>
              ← PREVIOUS LEVEL
            </PixelButton>
            <PixelButton variant="level" onClick={() => onNavigate("start")}>
              BACK TO START
            </PixelButton>
            <PixelButton variant="start" onClick={() => onNavigate("level3")}>
              NEXT LEVEL →
            </PixelButton>
          </div>
        </div>
      </div>
    </div>
  );
};