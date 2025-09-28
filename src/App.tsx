import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { useEffect, useState } from "react";

const queryClient = new QueryClient();

const App = () => {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    // Preload multiple click sound instances for better performance
    const clickSounds = Array.from({ length: 3 }, () => {
      const audio = new Audio("/click.mp3");
      audio.volume = 0.5;
      audio.preload = "auto";
      return audio;
    });
    
    let currentIndex = 0;
    
    // Play click sound instantly on any click using sound pooling
    const handleClick = () => {
      // Use the next available audio instance
      const audio = clickSounds[currentIndex];
      audio.currentTime = 0;
      audio.play().catch(() => {});
      
      // Rotate to the next audio instance
      currentIndex = (currentIndex + 1) % clickSounds.length;
    };
    
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const handleStart = () => {
    const audio = new Audio("/game beginning.mp3");
    audio.volume = 0.7;
    audio.play().catch(() => {});
    setStarted(true);
  };

  if (!started) {
    return (
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
  background: `url('/src/assets/image.png') center/cover no-repeat`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999
      }}>
        <button
          style={{
            fontSize: "2rem",
            padding: "1rem 2rem",
            borderRadius: "12px",
            background: "#222",
            color: "#7fffd4",
            border: "2px solid #7fffd4",
            cursor: "pointer",
            fontFamily: "inherit"
          }}
          onClick={handleStart}
        >
          Start Game
        </button>
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
