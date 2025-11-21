import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const PodcastGenerator = () => {
  const [topic, setTopic] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleGenerate = () => {
    if (!topic.trim()) return;
    
    setIsLoading(true);
    setShowMessage(false);
    
    // Simulate loading for 2-3 seconds
    setTimeout(() => {
      setIsLoading(false);
      setShowMessage(true);
    }, 2500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleGenerate();
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-2xl space-y-8 animate-fade-in">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Podcast Generator
          </h1>
          <p className="text-muted-foreground text-lg">
            Create your own podcast in seconds
          </p>
        </div>

        {/* Input Section */}
        <div className="bg-card rounded-3xl p-6 md:p-8 shadow-lg border border-border space-y-6">
          <div className="space-y-4">
            <label 
              htmlFor="topic-input" 
              className="text-sm font-medium text-foreground block"
            >
              Podcast Topic
            </label>
            <Input
              id="topic-input"
              type="text"
              placeholder="Type podcast topic here..."
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              onKeyPress={handleKeyPress}
              className="text-lg py-6 rounded-2xl border-2 focus:border-primary transition-colors"
              disabled={isLoading}
            />
          </div>

          <Button
            onClick={handleGenerate}
            disabled={!topic.trim() || isLoading}
            className="w-full py-6 text-lg rounded-2xl bg-primary hover:bg-primary-hover text-primary-foreground transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="mr-2">🔊</span>
            Generate Podcast
          </Button>
        </div>

        {/* Player Area */}
        <div className="bg-card rounded-3xl p-6 md:p-8 shadow-lg border border-border min-h-[200px] flex items-center justify-center">
          {isLoading ? (
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse-gentle" />
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse-gentle [animation-delay:0.2s]" />
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse-gentle [animation-delay:0.4s]" />
            </div>
          ) : showMessage ? (
            <div className="text-center space-y-2 animate-fade-in">
              <p className="text-2xl font-semibold text-primary">
                Feature coming soon! 🎉
              </p>
              <p className="text-muted-foreground">
                Stay tuned for podcast generation
              </p>
            </div>
          ) : (
            <p className="text-muted-foreground text-lg">
              Podcast will appear here.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PodcastGenerator;
