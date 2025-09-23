import { PixelButton } from "@/components/ui/pixel-button";
import { GameLevel } from "../GameLayout";
import { Trophy, Award, Star, Medal } from "lucide-react";

interface FinalAchievementsProps {
  onNavigate: (level: GameLevel) => void;
}

export const FinalAchievements = ({ onNavigate }: FinalAchievementsProps) => {
  const achievements = [
    {
      id: "gate",
      title: "🎯 GATE 2025 Qualified",
      description: "Successfully qualified for Graduate Aptitude Test in Engineering",
      rarity: "legendary",
      icon: <Trophy className="w-6 h-6" />,
      year: "2025"
    },
    {
      id: "seo-hackathon",
      title: "🥉 3rd Place in SEO Hackathon", 
      description: "Achieved bronze medal in competitive SEO optimization challenge",
      rarity: "epic",
      icon: <Medal className="w-6 h-6" />,
      year: "2024"
    },
    {
      id: "google-ai",
      title: "🤖 Google AI-ML Virtual Internship",
      description: "Completed comprehensive AI/ML training program by Google",
      rarity: "epic", 
      icon: <Award className="w-6 h-6" />,
      year: "2024"
    },
    {
      id: "zero-trust",
      title: "🔐 Zero Trust Cloud Security Specialist",
      description: "Multiple certifications: ZTCA, EDU-102, NPTEL IoT, Cybersecurity",
      rarity: "rare",
      icon: <Star className="w-6 h-6" />,
      year: "2024"
    },
    {
      id: "design-lead",
      title: "🎨 Design Lead - YES CLUB",
      description: "Leading design initiatives and creative projects",
      rarity: "rare",
      icon: <Award className="w-6 h-6" />,
      year: "2024-2025"
    }
  ];

  const getRarityStyles = (rarity: string) => {
    switch(rarity) {
      case "legendary":
        return {
          container: "text-power-up border-power-up bg-power-up/20 glow-power",
          badge: "bg-power-up text-power-up-foreground"
        };
      case "epic":
        return {
          container: "text-secondary border-secondary bg-secondary/20 glow-neon", 
          badge: "bg-secondary text-secondary-foreground"
        };
      case "rare":
        return {
          container: "text-primary border-primary bg-primary/20",
          badge: "bg-primary text-primary-foreground"
        };
      default:
        return {
          container: "text-accent border-accent bg-accent/20",
          badge: "bg-accent text-accent-foreground"
        };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-screen pixel-grid relative overflow-hidden">
      {/* Trophy Room Ambiance */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-power-up animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 pt-20 pb-10">
        {/* Level Header */}
        <div className="text-center mb-12">
          <div className="dialog-pixel inline-block p-6">
            <h1 className="font-pixel text-3xl text-power-up glow-power animate-pulse-neon mb-4">
              FINAL LEVEL: TROPHY ROOM
            </h1>
            <p className="font-pixel text-sm text-foreground/90 leading-relaxed">
              Behold the collection of legendary achievements and certifications!
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4">
          {/* Achievement Gallery */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.id}
                className={`dialog-pixel p-6 relative group hover:scale-105 transition-all duration-300 ${getRarityStyles(achievement.rarity).container}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Rarity Badge */}
                <div className="absolute -top-2 -right-2">
                  <div className={`dialog-pixel px-2 py-1 ${getRarityStyles(achievement.rarity).badge}`}>
                    <span className="font-pixel text-xs uppercase">{achievement.rarity}</span>
                  </div>
                </div>

                {/* Year Badge */}
                <div className="absolute -top-2 -left-2">
                  <div className="dialog-pixel px-2 py-1 bg-muted text-muted-foreground">
                    <span className="font-pixel text-xs">{achievement.year}</span>
                  </div>
                </div>

                {/* Achievement Content */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="animate-pixel-bounce">
                      {achievement.icon}
                    </div>
                    <h3 className="font-pixel text-sm leading-relaxed flex-1">
                      {achievement.title}
                    </h3>
                  </div>
                  
                  <p className="font-pixel text-xs text-foreground/80 leading-relaxed">
                    {achievement.description}
                  </p>

                  {/* Achievement Progress */}
                  <div className="w-full bg-muted h-2">
                    <div 
                      className="h-2 bg-current transition-all duration-2000 delay-300"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 border-2 border-current animate-pulse" />
                </div>
              </div>
            ))}
          </div>

          {/* Achievement Stats Summary */}
          <div className="text-center mb-12">
            <div className="dialog-pixel inline-block p-8 glow-power">
              <h3 className="font-pixel text-lg text-power-up mb-6">FINAL STATS</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="space-y-2">
                  <div className="font-pixel text-2xl text-power-up animate-pulse">5</div>
                  <div className="font-pixel text-xs text-foreground/80">MAJOR ACHIEVEMENTS</div>
                </div>
                <div className="space-y-2">
                  <div className="font-pixel text-2xl text-secondary animate-pulse">3+</div>
                  <div className="font-pixel text-xs text-foreground/80">CERTIFICATIONS</div>
                </div>
                <div className="space-y-2">
                  <div className="font-pixel text-2xl text-primary animate-pulse">1</div>
                  <div className="font-pixel text-xs text-foreground/80">LEADERSHIP ROLE</div>
                </div>
                <div className="space-y-2">
                  <div className="font-pixel text-2xl text-accent animate-pulse">100%</div>
                  <div className="font-pixel text-xs text-foreground/80">COMPLETION RATE</div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-current/20">
                <p className="font-pixel text-xs text-foreground/80 leading-relaxed">
                  "Every achievement represents a step forward in the journey of 
                  continuous learning and professional growth."
                </p>
              </div>
            </div>
          </div>

          {/* Victory Message */}
          <div className="text-center mb-8">
            <div className="dialog-pixel p-6 bg-gradient-power/20 border-2 border-power-up glow-power">
              <h2 className="font-pixel text-xl text-power-up mb-4">🎉 CONGRATULATIONS! 🎉</h2>
              <p className="font-pixel text-sm text-foreground/90 leading-relaxed">
                You have successfully completed Gnyana's portfolio journey! 
                Ready to connect and start the next adventure?
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-4">
            <PixelButton variant="level" onClick={() => onNavigate("boss")}>
              ← BOSS BATTLE
            </PixelButton>
            <PixelButton variant="level" onClick={() => onNavigate("start")}>
              BACK TO START
            </PixelButton>
            <PixelButton variant="portal" onClick={() => onNavigate("contact")} className="glow-neon">
              ENTER CONTACT PORTAL →
            </PixelButton>
          </div>
        </div>
      </div>
    </div>
  );
};