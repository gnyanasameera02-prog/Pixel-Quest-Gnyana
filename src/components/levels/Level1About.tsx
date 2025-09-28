import { PixelButton } from "@/components/ui/pixel-button";
import { GameLevel } from "../GameLayout";
import samImg from "@/assets/sam.png";

interface Level1AboutProps {
  onNavigate: (level: GameLevel) => void;
}

export const Level1About = ({ onNavigate }: Level1AboutProps) => {
  const educationData = [
    {
      id: "college",
      title: "🧠 Knowledge Power-Up",
      subtitle: "Gayatri Vidya Parishad College of Engineering",
      period: "2022–2026",
      gpa: "GPA: 8.95/10",
      description: "CS Undergrad | Aspiring Software Engineer"
    },
    {
      id: "junior",
      title: "� Skill Unlock: Science", 
      subtitle: "Narayana Junior College",
      period: "2020–2022",
      gpa: "GPA: 9.7/10",
      description: "Mathematics, Physics, Chemistry focus"
    },
    {
      id: "school",
      title: "� Achievement Unlocked: Excellence",
      subtitle: "Narayana School", 
      period: "2019–2020",
      gpa: "GPA: 10/10",
      description: "Perfect academic performance"
    }
  ];

  const funFacts = [
    "Loves solving complex algorithms",
    "Enjoys exploring AI/ML and building intelligent systems", 
    "Loves creating projects with real-world impact",
    "Blends creativity with technical skills — from web design to AI models",
    "Designs fun games and creative posters alongside coding",
    "Thrives in team leadership as Design Lead at YES Club"
  ];

  return (
    <div className="min-h-screen bg-gradient-screen pixel-grid relative overflow-hidden">
      {/* Level Header */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <div className="dialog-pixel m-4 text-center">
          <h1 className="font-pixel text-2xl text-primary glow-neon">
            LEVEL 1: KNOW ABOUT ME
          </h1>
        </div>
      </div>

      {/* Side-scrolling scene */}
      <div className="flex items-center min-h-screen pt-20 pb-10">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            
            {/* Character Section */}
            <div className="text-center lg:text-left space-y-6">
              <div className="relative inline-block">
                <img 
                  src={samImg} 
                  alt="Gnyana Hero Sprite"
                  className="w-48 h-48 mx-auto lg:mx-0 animate-pixel-bounce"
                />
                <div className="absolute -top-4 -right-4 dialog-pixel">
                  <div className="font-pixel text-xs text-accent">HERO</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h2 className="font-pixel text-xl text-foreground">
                  Hello, I'm Gnyana Sameera!
                </h2>
                <div className="dialog-pixel text-left">
                  <p className="font-pixel text-xs leading-relaxed text-foreground/90">
                  Passionate Computer Science student with a love for solving complex algorithms and building real-world projects. Interested in AI/ML, computer vision, and web solutions, I enjoy creating applications that blend innovation with creativity while constantly learning and growing.
                  </p>
                </div>
              </div>

              {/* Fun Facts Collectibles */}
              <div className="space-y-2">
                <div className="font-pixel text-sm text-accent">COLLECTED COINS:</div>
                <div className="grid grid-cols-1 gap-2">
                  {funFacts.map((fact, index) => (
                    <div key={index} className="dialog-pixel flex items-center gap-2">
                      <div className="w-4 h-4 bg-power-up rounded-full animate-pulse flex items-center justify-center">
                        <div className="w-2 h-2 bg-power-up-foreground rounded-full" />
                      </div>
                      <span className="font-pixel text-xs text-foreground/80">{fact}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Education Timeline */}
            <div className="space-y-6">
              <div className="font-pixel text-lg text-center text-primary">
                EDUCATION QUEST LOG
              </div>
              
              <div className="space-y-4">
                {educationData.map((edu, index) => (
                  <div key={edu.id} className="dialog-pixel hover:glow-power transition-all duration-300">
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <h3 className="font-pixel text-sm text-accent">{edu.title}</h3>
                        <div className="font-pixel text-xs text-primary">{edu.gpa}</div>
                      </div>
                      <div className="font-pixel text-xs text-foreground/80">{edu.subtitle}</div>
                      <div className="font-pixel text-xs text-muted-foreground">{edu.period}</div>
                      <div className="font-pixel text-xs text-foreground/70 mt-2">{edu.description}</div>
                      
                      {/* Progress bar */}
                        {/* Creative pixel line */}
                        <div className="w-full flex items-center justify-center my-2">
                          <div className="h-2 w-full bg-accent rounded animate-pulse" style={{ boxShadow: '0 0 8px #39ff14, 0 0 2px #39ff14' }} />
                        </div>
                      
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <PixelButton variant="level" onClick={() => onNavigate("start")}>
              ← BACK TO START
            </PixelButton>
            <PixelButton variant="start" onClick={() => onNavigate("level2")}>
              NEXT LEVEL →
            </PixelButton>
          </div>
        </div>
      </div>
    </div>
  );
};