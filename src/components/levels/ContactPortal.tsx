import { PixelButton } from "@/components/ui/pixel-button";
import { GameLevel } from "../GameLayout";
import { useState } from "react";
import { Mail, Github, Linkedin, Send, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";

interface ContactPortalProps {
  onNavigate: (level: GameLevel) => void;
}

export const ContactPortal = ({ onNavigate }: ContactPortalProps) => {
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    "> CONTACT_PORTAL initialized...",
    "> Ready to establish connection with Gnyana Sameera",
    "> Type 'help' for available commands"
  ]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleTerminalCommand = (command: string) => {
    const cmd = command.toLowerCase().trim();
    let response = "";

    switch(cmd) {
      case "help":
        response = "Available commands: email, linkedin, github, location, skills, projects, clear";
        break;
      case "email":
        response = "Email: gnyana.sameera@example.com";
        break;
      case "linkedin":
        response = "LinkedIn: Connect with Gnyana Sameera";
        break;
      case "github":
        response = "GitHub: Explore repositories and projects";
        break;
      case "location":
        response = "Location: Visakhapatnam, India";
        break;
      case "skills":
        response = "Primary skills: AI/ML, Python, Deep Learning, Web Development";
        break;
      case "projects":
        response = "Notable: Emotion Detection, Smart Intruder Detector, Trip Trek";
        break;
      case "clear":
        setTerminalHistory([
          "> Terminal cleared",
          "> Ready for new commands"
        ]);
        return;
      default:
        response = `Unknown command: ${command}. Type 'help' for available commands.`;
    }

    setTerminalHistory(prev => [...prev, `> ${command}`, response]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! Gnyana will get back to you soon.", {
      description: "Your message has been transmitted through the portal.",
    });
    setFormData({ name: "", email: "", message: "" });
    setTerminalHistory(prev => [...prev, 
      "> Message transmission successful",
      "> Portal connection established"
    ]);
  };

  const contactLinks = [
    {
      platform: "Email",
      icon: <Mail className="w-5 h-5" />,
      value: "gnyana.sameera@example.com",
      href: "mailto:gnyana.sameera@example.com",
      color: "text-primary border-primary"
    },
    {
      platform: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      value: "Connect on LinkedIn",
      href: "#",
      color: "text-accent border-accent"
    },
    {
      platform: "GitHub",
      icon: <Github className="w-5 h-5" />,
      value: "View GitHub Profile",
      href: "#",
      color: "text-secondary border-secondary"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background pixel-grid relative overflow-hidden">
      {/* Portal Effects */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary animate-pulse opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1 + Math.random()}s`,
            }}
          />
        ))}
      </div>

      {/* Scanning line effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-full h-1 bg-primary/50 animate-screen-scan" />
      </div>

      <div className="relative z-10 pt-20 pb-10">
        {/* Portal Header */}
        <div className="text-center mb-8">
          <div className="dialog-pixel inline-block p-6 glow-neon">
            <h1 className="font-pixel text-3xl text-primary animate-pulse-neon mb-2">
              CONTACT PORTAL
            </h1>
            <p className="font-pixel text-sm text-foreground/80">
              Establish communication link with Gnyana Sameera
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Terminal Interface */}
            <div className="space-y-6">
              <div className="dialog-pixel p-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-destructive rounded-full animate-pulse" />
                  <div className="w-3 h-3 bg-power-up rounded-full animate-pulse" />
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                  <span className="font-pixel text-xs text-foreground/60 ml-2">terminal.exe</span>
                </div>
                
                {/* Terminal Output */}
                <div className="bg-background/50 p-4 h-64 overflow-y-auto border border-primary/30">
                  {terminalHistory.map((line, index) => (
                    <div key={index} className="font-pixel text-xs text-primary/90 leading-relaxed">
                      {line}
                    </div>
                  ))}
                </div>
                
                {/* Terminal Input */}
                <div className="flex items-center gap-2 mt-2">
                  <span className="font-pixel text-xs text-accent">{">"}</span>
                  <input
                    type="text"
                    value={terminalInput}
                    onChange={(e) => setTerminalInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && terminalInput.trim()) {
                        handleTerminalCommand(terminalInput);
                        setTerminalInput("");
                      }
                    }}
                    className="flex-1 bg-transparent border-none outline-none font-pixel text-xs text-foreground"
                    placeholder="Type command..."
                  />
                </div>
              </div>

              {/* Quick Contact Links */}
              <div className="space-y-3">
                <div className="font-pixel text-sm text-accent">QUICK CONNECT:</div>
                {contactLinks.map((contact) => (
                  <div key={contact.platform} className={`dialog-pixel p-3 hover:glow-power transition-all duration-300 cursor-pointer ${contact.color} bg-current/5`}>
                    <div className="flex items-center gap-3">
                      {contact.icon}
                      <div>
                        <div className="font-pixel text-xs">{contact.platform}</div>
                        <div className="font-pixel text-xs opacity-80">{contact.value}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="space-y-6">
              <div className="dialog-pixel p-6">
                <h3 className="font-pixel text-sm text-accent mb-4">SEND MESSAGE</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="font-pixel text-xs text-foreground/80 block mb-2">Name:</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full bg-input border-2 border-border p-3 font-pixel text-xs text-foreground"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="font-pixel text-xs text-foreground/80 block mb-2">Email:</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full bg-input border-2 border-border p-3 font-pixel text-xs text-foreground"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="font-pixel text-xs text-foreground/80 block mb-2">Message:</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      rows={4}
                      className="w-full bg-input border-2 border-border p-3 font-pixel text-xs text-foreground resize-none"
                      required
                    />
                  </div>
                  
                  <PixelButton type="submit" variant="portal" className="w-full glow-neon">
                    <Send className="mr-2 w-4 h-4" />
                    TRANSMIT MESSAGE
                  </PixelButton>
                </form>
              </div>

              {/* Contact Info */}
              <div className="dialog-pixel p-4">
                <h4 className="font-pixel text-xs text-accent mb-3">CONTACT DETAILS:</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="font-pixel text-xs text-foreground/80">Visakhapatnam, India</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-accent" />
                    <span className="font-pixel text-xs text-foreground/80">gnyana.sameera@example.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-secondary" />
                    <span className="font-pixel text-xs text-foreground/80">Available on request</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Final Message */}
          <div className="text-center mt-12">
            <div className="dialog-pixel p-6 max-w-2xl mx-auto glow-power">
              <h3 className="font-pixel text-lg text-power-up mb-4">🚀 MISSION COMPLETE!</h3>
              <p className="font-pixel text-sm text-foreground/90 leading-relaxed mb-4">
                You've successfully navigated through Gnyana's pixel portfolio adventure! 
                Ready to collaborate on the next exciting project?
              </p>
              <div className="font-pixel text-xs text-accent">
                "Let's build something amazing together!"
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <PixelButton variant="level" onClick={() => onNavigate("final")}>
              ← ACHIEVEMENTS
            </PixelButton>
            <PixelButton variant="level" onClick={() => onNavigate("start")}>
              RESTART GAME
            </PixelButton>
          </div>
        </div>
      </div>
    </div>
  );
};