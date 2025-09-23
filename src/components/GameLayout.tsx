import { useState, useEffect } from "react";
import { StartScreen } from "./levels/StartScreen";
import { Level1About } from "./levels/Level1About";
import { Level2Projects } from "./levels/Level2Projects";
import { Level3Skills } from "./levels/Level3Skills";
import { BossWork } from "./levels/BossWork";
import { FinalAchievements } from "./levels/FinalAchievements";
import { ContactPortal } from "./levels/ContactPortal";

export type GameLevel = 
  | "start"
  | "level1" 
  | "level2"
  | "level3" 
  | "boss"
  | "final"
  | "contact";

export const GameLayout = () => {
  const [currentLevel, setCurrentLevel] = useState<GameLevel>("start");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigateToLevel = (level: GameLevel) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentLevel(level);
      setIsTransitioning(false);
    }, 300);
  };

  useEffect(() => {
    // Add keyboard navigation
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape" && currentLevel !== "start") {
        navigateToLevel("start");
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [currentLevel]);

  const renderLevel = () => {
    switch (currentLevel) {
      case "start":
        return <StartScreen onNavigate={navigateToLevel} />;
      case "level1":
        return <Level1About onNavigate={navigateToLevel} />;
      case "level2":
        return <Level2Projects onNavigate={navigateToLevel} />;
      case "level3":
        return <Level3Skills onNavigate={navigateToLevel} />;
      case "boss":
        return <BossWork onNavigate={navigateToLevel} />;
      case "final":
        return <FinalAchievements onNavigate={navigateToLevel} />;
      case "contact":
        return <ContactPortal onNavigate={navigateToLevel} />;
      default:
        return <StartScreen onNavigate={navigateToLevel} />;
    }
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* CRT Screen Effect */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent animate-screen-scan" />
      </div>
      
      {/* Game Level Content */}
      <div 
        className={`transition-all duration-300 ${
          isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
      >
        {renderLevel()}
      </div>

      {/* HUD - Current Level Indicator */}
      <div className="fixed top-4 left-4 z-50">
        <div className="dialog-pixel">
          <div className="font-pixel text-xs text-primary">
            {currentLevel === "start" && "TITLE SCREEN"}
            {currentLevel === "level1" && "LEVEL 1: ABOUT"}
            {currentLevel === "level2" && "LEVEL 2: PROJECTS"}
            {currentLevel === "level3" && "LEVEL 3: SKILLS"}
            {currentLevel === "boss" && "BOSS BATTLE: WORK"}
            {currentLevel === "final" && "FINAL LEVEL: ACHIEVEMENTS"}
            {currentLevel === "contact" && "CONTACT PORTAL"}
          </div>
        </div>
      </div>

      {/* ESC hint */}
      {currentLevel !== "start" && (
        <div className="fixed bottom-4 right-4 z-50">
          <div className="dialog-pixel opacity-75">
            <div className="font-pixel text-xs text-muted-foreground">
              Press ESC to return to start
            </div>
          </div>
        </div>
      )}
    </div>
  );
};