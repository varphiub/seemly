import { Play, Volume2 } from "lucide-react";
import { useState, useRef } from "react";

const DemoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section id="demo" className="relative">
      <div className="container-tight section-padding">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            See It In Action
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Watch Our AI
            <span className="gradient-text"> Make Calls</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Experience how our AI agent handles real conversations with prospects.
          </p>
        </div>

        {/* Video Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden glass border-2 border-primary/30 glow-primary">
            <video
              ref={videoRef}
              className="w-full aspect-video object-cover"
              src="/demo-video.mp4"
              poster=""
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
              controls
            />
            
            {/* Overlay Play Button */}
            {!isPlaying && (
              <button
                onClick={handlePlayPause}
                className="absolute inset-0 flex items-center justify-center bg-background/40 backdrop-blur-sm transition-all hover:bg-background/30"
              >
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center electric-glow hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                </div>
              </button>
            )}
          </div>
          
          {/* Caption */}
          <div className="flex items-center justify-center gap-2 mt-6 text-muted-foreground">
            <Volume2 className="w-4 h-4" />
            <span className="text-sm">Turn on audio for the full experience</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
