import { PixelButton } from "@/components/ui/pixel-button";
import { GameLevel } from "../GameLayout";
import { useState, useEffect, useRef } from "react";

interface BossWorkProps {
  onNavigate: (level: GameLevel) => void;
}

export const BossWork = ({ onNavigate }: BossWorkProps) => {
  const [battlePhase, setBattlePhase] = useState<"intro" | "fighting" | "victory">("intro");
  const [bossHealth, setBossHealth] = useState(100);

  const workExperience = {
    title: "AI/ML Intern",
    company: "Zemblance Hydrocarbons, IITM",
    period: "May 2025 – Present",
    challenges: [
      "Offshore structural health monitoring",
      "Machine Learning on sensor data",
      "Web application for data visualization", 
      "Critical alert system implementation",
      "Real-time data processing pipeline"
    ],
    skills: ["Machine Learning", "Data Analysis", "Web Development", "Alert Systems", "Sensor Data Processing"]
  };

  const sciFiAudioRef = useRef<HTMLAudioElement | null>(null);

  const startBattle = () => {
    setBattlePhase("fighting");
    // Play sci-fi-tech sound
    if (!sciFiAudioRef.current) {
      sciFiAudioRef.current = new Audio("/sci-fi-technology-scanner-194042.mp3");
      sciFiAudioRef.current.loop = true;
      sciFiAudioRef.current.volume = 0.6;
    }
    sciFiAudioRef.current.currentTime = 0;
    sciFiAudioRef.current.play().catch(() => {});

    // Simulate boss battle
    const interval = setInterval(() => {
      setBossHealth(prev => {
        const newHealth = prev - Math.random() * 15;
        if (newHealth <= 0) {
          clearInterval(interval);
          setBattlePhase("victory");
          return 0;
        }
        return newHealth;
      });
    }, 800);
  };

  useEffect(() => {
    if (battlePhase === "fighting") {
      startBattle();
    }
    if (battlePhase === "victory" && sciFiAudioRef.current) {
      sciFiAudioRef.current.pause();
      sciFiAudioRef.current.currentTime = 0;
    }
  }, [battlePhase]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-destructive/20 to-background relative overflow-hidden">
      {/* Battle Arena */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 pixel-grid opacity-30" />
        {/* Lightning effects */}
        {battlePhase === "fighting" && (
          <div className="absolute inset-0">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-full bg-destructive animate-pulse opacity-70"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 1000}ms`,
                  animationDuration: "200ms"
                }}
              />
            ))}
          </div>
        )}
      </div>

      <div className="relative z-10 pt-20 pb-10">
        {/* Boss Health Bar */}
        {battlePhase !== "intro" && (
          <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
            <div className="dialog-pixel p-2">
              <div className="font-pixel text-xs text-destructive mb-1">REAL-WORLD CHALLENGES</div>
              <div className="w-64 bg-muted h-4 border-2 border-destructive">
                <div 
                  className="h-full bg-gradient-to-r from-destructive to-destructive/60 transition-all duration-300"
                  style={{ width: `${bossHealth}%` }}
                />
              </div>
              <div className="font-pixel text-xs text-foreground/80 mt-1">{Math.round(bossHealth)}/100 HP</div>
            </div>
          </div>
        )}

        <div className="max-w-4xl mx-auto px-4 text-center">
          {/* Battle Phases */}
          {battlePhase === "intro" && (
            <div className="space-y-8">
              <div className="dialog-pixel p-8">
                <h1 className="font-pixel text-3xl text-destructive glow-neon animate-pulse mb-4">
                  BOSS BATTLE: REAL WORLD CHALLENGES
                </h1>
                <p className="font-pixel text-sm text-foreground/90 leading-relaxed">
                  The ultimate test awaits! Face the challenges of professional work experience.
                </p>
              </div>

              {/* Boss (Work Experience) Stats */}
              <div className="dialog-pixel p-6 max-w-2xl mx-auto">
                <h2 className="font-pixel text-lg text-accent mb-4">{workExperience.title}</h2>
                <div className="space-y-3">
                  <div className="font-pixel text-sm text-secondary">{workExperience.company}</div>
                  <div className="font-pixel text-xs text-primary">{workExperience.period}</div>
                  
                  <div className="space-y-2 mt-4">
                    <div className="font-pixel text-xs text-accent">BOSS ABILITIES:</div>
                    {workExperience.challenges.map((challenge, index) => (
                      <div key={index} className="flex items-center gap-2 text-left">
                        <div className="w-3 h-3 bg-destructive animate-pulse" />
                        <span className="font-pixel text-xs text-foreground/80">{challenge}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <PixelButton variant="boss" size="xl" onClick={() => setBattlePhase("fighting")}>
                ENGAGE IN BATTLE!
              </PixelButton>
            </div>
          )}

          {battlePhase === "fighting" && (
            <div className="space-y-8 animate-pulse">
              <div className="dialog-pixel p-6">
                <h2 className="font-pixel text-xl text-destructive animate-pulse">
                  BATTLE IN PROGRESS...
                </h2>
                <p className="font-pixel text-sm text-foreground/80 mt-4">
                  Applying machine learning algorithms to solve complex problems!
                </p>
              </div>

              {/* Battle Actions */}
              <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                {workExperience.skills.map((skill, index) => (
                  <div 
                    key={skill}
                    className="dialog-pixel p-3 animate-pixel-bounce"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="font-pixel text-xs text-accent">Using {skill}!</div>
                    <div className="w-full bg-muted h-2 mt-2">
                      <div 
                        className="h-2 bg-gradient-power transition-all duration-1000"
                        style={{ width: `${100 - bossHealth}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {battlePhase === "victory" && (
            <div className="space-y-8">
              <div className="dialog-pixel p-8 glow-power">
                <h1 className="font-pixel text-3xl text-power-up animate-pixel-bounce mb-4">
                  VICTORY!
                </h1>
                <p className="font-pixel text-sm text-foreground/90 leading-relaxed mb-6">
                  Successfully conquered real-world challenges through innovative AI/ML solutions!
                </p>
                
                {/* Victory Stats */}
                <div className="space-y-3">
                  <div className="font-pixel text-xs text-accent">EXPERIENCE GAINED:</div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-left">
                      <div className="font-pixel text-xs text-power-up">Technical Skills +50</div>
                      <div className="font-pixel text-xs text-primary">Problem Solving +40</div>
                      <div className="font-pixel text-xs text-accent">Industry Knowledge +60</div>
                    </div>
                    <div className="text-left">
                      <div className="font-pixel text-xs text-secondary">Team Collaboration +35</div>
                      <div className="font-pixel text-xs text-destructive">Real-world Impact +80</div>
                      <div className="font-pixel text-xs text-power-up">Professional Growth +70</div>
                    </div>
                  </div>
                </div>
              </div>

              <PixelButton variant="portal" size="xl" onClick={() => onNavigate("final")}>
                PROCEED TO FINAL LEVEL →
              </PixelButton>
            </div>
          )}

          {/* Navigation (always available) */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <PixelButton variant="level" onClick={() => onNavigate("level3")}>
              ← PREVIOUS LEVEL  
            </PixelButton>
            <PixelButton variant="level" onClick={() => onNavigate("start")}>
              BACK TO START
            </PixelButton>
            {battlePhase === "victory" && (
              <PixelButton variant="start" onClick={() => onNavigate("final")}>
                FINAL LEVEL →
              </PixelButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};