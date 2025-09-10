import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';

interface MapPlaceholderProps {
  className?: string;
  showControls?: boolean;
  title?: string;
}

const MapPlaceholder = ({ className = "", showControls = true, title = "Interactive Map" }: MapPlaceholderProps) => {
  return (
    <Card className={`relative overflow-hidden ${className}`}>
      <div className="aspect-video bg-gradient-to-br from-primary/10 via-surface to-primary/5 flex items-center justify-center relative">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }} />
        </div>

        {/* Map content */}
        <div className="text-center z-10 space-y-4">
          <div className="bg-primary/20 p-4 rounded-full w-fit mx-auto">
            <MapPin className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Map integration requires Mapbox setup
            </p>
            <Button size="sm" variant="outline" className="text-xs">
              <ExternalLink className="h-3 w-3 mr-1" />
              Setup Mapbox
            </Button>
          </div>
        </div>

        {/* Mock location markers */}
        <div className="absolute top-6 left-8 bg-primary text-white p-1 rounded-full">
          <MapPin className="h-3 w-3" />
        </div>
        <div className="absolute bottom-8 right-12 bg-success text-white p-1 rounded-full">
          <MapPin className="h-3 w-3" />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-warning text-white p-1 rounded-full">
          <Navigation className="h-3 w-3" />
        </div>

        {/* Mock route line */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            d="M 10,15 Q 30,40 50,50 Q 70,60 85,85"
            stroke="hsl(var(--primary))"
            strokeWidth="0.5"
            strokeDasharray="2,1"
            fill="none"
            opacity="0.6"
          />
        </svg>

        {showControls && (
          <div className="absolute top-4 right-4 space-y-2">
            <Button size="sm" variant="outline" className="bg-white/90 backdrop-blur">
              <Navigation className="h-4 w-4" />
            </Button>
            <div className="bg-white/90 backdrop-blur rounded-md p-2 text-xs font-mono text-muted-foreground">
              2.3 mi
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default MapPlaceholder;