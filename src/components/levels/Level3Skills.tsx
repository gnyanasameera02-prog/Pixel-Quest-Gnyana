import { PixelButton } from "@/components/ui/pixel-button";
import { GameLevel } from "../GameLayout";

interface Level3SkillsProps {
  onNavigate: (level: GameLevel) => void;
}

export const Level3Skills = ({ onNavigate }: Level3SkillsProps) => {
  const skillCategories = [
    {
      type: "Languages",
      icon: "⚔️",
      description: "Programming Weapons",
      skills: ["C++", "Python", "SQL", "MATLAB", "HTML", "CSS", "JavaScript"],
      color: "text-destructive border-destructive"
    },
    {
      type: "Frameworks & Libraries", 
      icon: "🧪",
      description: "Magic Potions",
      skills: ["Flask", "Bootstrap", "Pandas", "NumPy", "Scikit-learn", "Seaborn", "Matplotlib"],
      color: "text-accent border-accent"
    },
    {
      type: "Tools",
      icon: "🔧",
      description: "Utility Gear",
      skills: ["GitHub", "VS Code", "Git"],
      color: "text-primary border-primary"
    },
    {
      type: "Special Moves",
      icon: "✨",
      description: "Ultimate Abilities", 
      skills: ["Data Structures & Algorithms", "Object-Oriented Programming", "Database Management", "Exploratory Data Analysis", "Feature Engineering"],
      color: "text-power-up border-power-up"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-screen pixel-grid relative">
      {/* Level Header */}
      <div className="pt-20 pb-10">
        <div className="text-center mb-8">
          <div className="dialog-pixel inline-block">
            <h1 className="font-pixel text-2xl text-primary glow-neon">
              LEVEL 3: SKILLS POWER-UPS
            </h1>
            <p className="font-pixel text-xs text-foreground/80 mt-2">
              Collect all the power-ups to enhance your abilities
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4">
          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div key={category.type} className="space-y-4">
                {/* Category Header */}
                <div className={`dialog-pixel ${category.color} bg-current/10 p-4`}>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{category.icon}</span>
                    <div>
                      <h3 className="font-pixel text-sm">{category.type}</h3>
                      <p className="font-pixel text-xs opacity-80">{category.description}</p>
                    </div>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill}
                      className={`dialog-pixel p-3 hover:glow-power transition-all duration-300 cursor-pointer group ${category.color} bg-current/5`}
                      style={{
                        animationDelay: `${(index * 100) + (skillIndex * 50)}ms`
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 border-2 ${category.color} group-hover:animate-pulse`} />
                        <span className="font-pixel text-xs">{skill}</span>
                      </div>
                      
                      {/* Skill Level Bar */}
                      <div className="mt-2 w-full bg-muted h-1">
                        <div 
                          className={`h-1 bg-current transition-all duration-1000 delay-300`}
                          style={{ 
                            width: `${Math.max(70, Math.random() * 30 + 70)}%`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Stats Panel */}
          <div className="mt-12 text-center">
            <div className="dialog-pixel inline-block p-6 max-w-md">
              <h3 className="font-pixel text-sm text-accent mb-4">PLAYER STATS</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-pixel text-xs">Problem Solving</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-3 h-3 bg-power-up animate-pulse" style={{animationDelay: `${i * 100}ms`}} />
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-pixel text-xs">Code Quality</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-3 h-3 bg-primary animate-pulse" style={{animationDelay: `${i * 100}ms`}} />
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-pixel text-xs">Learning Speed</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-3 h-3 bg-accent animate-pulse" style={{animationDelay: `${i * 100}ms`}} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <PixelButton variant="level" onClick={() => onNavigate("level2")}>
              ← PREVIOUS LEVEL
            </PixelButton>
            <PixelButton variant="level" onClick={() => onNavigate("start")}>
              BACK TO START
            </PixelButton>
            <PixelButton variant="boss" onClick={() => onNavigate("boss")}>
              BOSS BATTLE →
            </PixelButton>
          </div>
        </div>
      </div>
    </div>
  );
};