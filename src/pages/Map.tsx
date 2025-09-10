import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import MapPlaceholder from '@/components/MapPlaceholder';
import { 
  Navigation as NavigationIcon, 
  MapPin, 
  Clock, 
  Phone,
  MessageCircle,
  Truck,
  Target
} from 'lucide-react';

const Map = () => {
  const currentDelivery = {
    id: 'DEL-001',
    pickup: { 
      address: '123 Main St, Downtown',
      lat: 40.7128,
      lng: -74.0060,
      time: '2:30 PM'
    },
    dropoff: { 
      address: '456 Oak Ave, Uptown',
      lat: 40.7589,
      lng: -73.9851,
      time: '3:15 PM'
    },
    item: 'Sofa Set (3-piece)',
    customer: 'Sarah Johnson',
    fare: '$45.00',
    distance: '2.3 mi',
    estimatedTime: '12 min',
    status: 'pickup'
  };

  const nearbyDeliveries = [
    {
      id: 'DEL-003',
      pickup: '555 Cedar Ave, Midtown',
      distance: '0.8 mi away',
      fare: '$38.00',
      item: 'Dining Table'
    },
    {
      id: 'DEL-004',
      pickup: '999 Maple Dr, Northside', 
      distance: '1.2 mi away',
      fare: '$52.00',
      item: 'Moving Boxes (8)'
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Map View */}
      <div className="relative h-96">
        <MapPlaceholder 
          title="Live Navigation" 
          className="h-full rounded-none border-0"
          showControls={true}
        />
        
        {/* Current Status Overlay */}
        <div className="absolute top-4 left-4 right-4">
          <Card className="shadow-strong bg-white/95 backdrop-blur">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <Badge className="bg-warning text-warning-foreground">
                  En Route to Pickup
                </Badge>
                <div className="text-right">
                  <div className="font-bold text-foreground">{currentDelivery.fare}</div>
                  <div className="text-sm text-muted-foreground">{currentDelivery.estimatedTime}</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="bg-primary p-1 rounded">
                    <MapPin className="h-3 w-3 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">Pickup Location</p>
                    <p className="text-sm text-muted-foreground">{currentDelivery.pickup.address}</p>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {currentDelivery.pickup.time}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-4 right-4 space-y-2">
          <Button size="icon" variant="outline" className="bg-white/90 backdrop-blur">
            <Target className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="outline" className="bg-white/90 backdrop-blur">
            <NavigationIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Current Delivery Details */}
        <Card className="shadow-medium">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center">
              <Truck className="mr-2 h-5 w-5 text-primary" />
              Current Delivery
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-surface rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium text-foreground">{currentDelivery.item}</h3>
                <span className="text-sm text-muted-foreground">{currentDelivery.id}</span>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="bg-primary/20 p-1.5 rounded-full">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">Pickup</p>
                    <p className="text-sm text-muted-foreground">{currentDelivery.pickup.address}</p>
                    <p className="text-xs text-muted-foreground flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {currentDelivery.pickup.time}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-success/20 p-1.5 rounded-full">
                    <MapPin className="h-4 w-4 text-success" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">Drop-off</p>
                    <p className="text-sm text-muted-foreground">{currentDelivery.dropoff.address}</p>
                    <p className="text-xs text-muted-foreground flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {currentDelivery.dropoff.time}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2 mt-4 pt-3 border-t border-border">
                <Button size="sm" variant="outline" className="flex-1">
                  <Phone className="h-4 w-4 mr-1" />
                  Call {currentDelivery.customer}
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  <MessageCircle className="h-4 w-4 mr-1" />
                  Chat
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Button variant="delivery" size="lg" className="h-16">
            <NavigationIcon className="h-6 w-6 mr-2" />
            <div className="text-left">
              <div className="font-medium">Start Navigation</div>
              <div className="text-sm opacity-90">{currentDelivery.distance} • {currentDelivery.estimatedTime}</div>
            </div>
          </Button>
          
          <Button variant="success" size="lg" className="h-16">
            <Target className="h-6 w-6 mr-2" />
            <div className="text-left">
              <div className="font-medium">I've Arrived</div>
              <div className="text-sm opacity-90">Update status</div>
            </div>
          </Button>
        </div>

        {/* Nearby Deliveries */}
        <Card className="shadow-medium">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center">
              <MapPin className="mr-2 h-5 w-5 text-primary" />
              Nearby Available Deliveries
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {nearbyDeliveries.map((delivery) => (
              <div key={delivery.id} className="bg-surface rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-medium text-foreground">{delivery.item}</h3>
                    <p className="text-sm text-muted-foreground">{delivery.pickup}</p>
                    <p className="text-xs text-muted-foreground">{delivery.distance}</p>
                  </div>
                  <div className="text-right space-y-2">
                    <div className="font-bold text-foreground">{delivery.fare}</div>
                    <Button size="sm" variant="outline">
                      View
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" className="h-12">
            <Clock className="h-4 w-4 mr-2" />
            Report Issue
          </Button>
          <Button variant="outline" className="h-12">
            <Phone className="h-4 w-4 mr-2" />
            Emergency Support
          </Button>
        </div>
      </div>

      <Navigation />
    </div>
  );
};

export default Map;