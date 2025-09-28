import { PixelButton } from "@/components/ui/pixel-button";
import { GameLevel } from "../GameLayout";
import cityscapeBg from "@/assets/cityscape-bg.png";

interface StartScreenProps {
  onNavigate: (level: GameLevel) => void;
}

export const StartScreen = ({ onNavigate }: StartScreenProps) => {
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center relative pixel-grid"
      style={{
  backgroundImage: `url(/cityscape-bg.png)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat'
}}

    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-background/80" />
      
      <div className="relative z-10 text-center space-y-8 max-w-2xl mx-auto px-4">
        {/* Main Title */}
        <div className="space-y-4">
          <h1 className="font-pixel text-4xl md:text-6xl text-primary glow-neon animate-pulse-neon">
            PLAYER 1
          </h1>
          <h2 className="font-pixel text-2xl md:text-4xl text-accent animate-pixel-bounce">
            GNYANA SAMEERA
          </h2>
          <div className="font-pixel text-sm md:text-base text-secondary animate-pulse">
            AI/ML Enthusiast • Computer Science Student • Web Innovator 
          </div>
          
         <div className="font-pixel text-sm md:text-base text-accent animate-pulse">
          "Passionate about creating – whether it’s code,websites,or designs."
          </div>

        </div>

        {/* Retro Game Menu */}
        <div className="space-y-4 mt-12">
          <PixelButton 
            variant="start" 
            size="xl"
            onClick={() => onNavigate("level1")}
            className="w-full max-w-sm"
          >
            START GAME
          </PixelButton>
          
          <PixelButton 
            variant="continue" 
            size="lg"
            onClick={() => onNavigate("level2")}
            className="w-full max-w-sm"
          >
            CONTINUE
          </PixelButton>
          
          <PixelButton 
            variant="level" 
            size="lg"
            onClick={() => onNavigate("contact")}
            className="w-full max-w-sm"
          >
            CONTACT
          </PixelButton>
        </div>

        {/* Level Select Menu */}
        <div className="mt-12 space-y-2">
          <div className="font-pixel text-xs text-muted-foreground mb-4">LEVEL SELECT</div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-w-lg mx-auto">
            <PixelButton variant="level" size="sm" onClick={() => onNavigate("level1")}>
              ABOUT
            </PixelButton>
            <PixelButton variant="level" size="sm" onClick={() => onNavigate("level2")}>
              PROJECTS
            </PixelButton>
            <PixelButton variant="level" size="sm" onClick={() => onNavigate("level3")}>
              SKILLS
            </PixelButton>
            <PixelButton variant="level" size="sm" onClick={() => onNavigate("boss")}>
              WORK
            </PixelButton>
            <PixelButton variant="level" size="sm" onClick={() => onNavigate("final")}>
              ACHIEVEMENTS
            </PixelButton>
            <PixelButton variant="portal" size="sm" onClick={() => onNavigate("contact")}>
              PORTAL
            </PixelButton>
          </div>
        </div>

        {/* Game Info */}
        <div className="mt-16 dialog-pixel max-w-md mx-auto">
          <div className="font-pixel text-xs text-foreground/80 leading-relaxed">
            Navigate through levels to discover Gnyana's journey in tech. 
            Use buttons or keyboard controls to explore each section.
          </div>
        </div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};