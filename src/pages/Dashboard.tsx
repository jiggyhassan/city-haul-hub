import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import { 
  DollarSign, 
  MapPin, 
  Clock, 
  Truck, 
  Package, 
  TrendingUp,
  Star,
  Navigation as NavigationIcon,
  Phone,
  MessageCircle
} from 'lucide-react';

const Dashboard = () => {
  const activeDeliveries = [
    {
      id: '1',
      pickup: '123 Main St, Downtown',
      dropoff: '456 Oak Ave, Uptown', 
      itemType: 'Sofa Set',
      vehicleType: 'Van',
      fare: '$45.00',
      distance: '2.3 mi',
      status: 'pickup'
    },
    {
      id: '2',
      pickup: '789 Pine Rd, Westside',
      dropoff: '321 Elm St, Eastside',
      itemType: 'Appliances (2 items)',
      vehicleType: 'Pickup',
      fare: '$32.50',
      distance: '4.1 mi', 
      status: 'delivering'
    }
  ];

  const availableJobs = [
    {
      id: '3',
      pickup: '555 Cedar Ave, Midtown',
      dropoff: '888 Birch Ln, Southside',
      itemType: 'Dining Table',
      vehicleType: 'Van',
      fare: '$38.00',
      distance: '1.8 mi',
      timeEstimate: '5 min away'
    },
    {
      id: '4', 
      pickup: '999 Maple Dr, Northside',
      dropoff: '111 Walnut St, Central',
      itemType: 'Moving Boxes (8)',
      vehicleType: 'XL',
      fare: '$52.00',
      distance: '3.2 mi',
      timeEstimate: '12 min away'
    }
  ];

  const stats = [
    { label: 'Today\'s Earnings', value: '$127.50', icon: DollarSign, change: '+12%' },
    { label: 'Deliveries', value: '8', icon: Package, change: '+3' },
    { label: 'Hours Online', value: '6.5h', icon: Clock, change: 'Active' },
    { label: 'Rating', value: '4.9', icon: Star, change: '★★★★★' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pickup': return 'bg-warning text-warning-foreground';
      case 'delivering': return 'bg-primary text-primary-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pickup': return 'En Route to Pickup';
      case 'delivering': return 'Delivering';
      default: return status;
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="bg-card border-b border-border px-4 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-foreground">Good morning, Alex!</h1>
            <p className="text-muted-foreground">Ready for another productive day?</p>
          </div>
          <div className="flex items-center space-x-3">
            <Badge variant="outline" className="bg-success/10 text-success border-success/20">
              <div className="w-2 h-2 bg-success rounded-full mr-1 animate-pulse" />
              Online
            </Badge>
          </div>
        </div>
      </header>

      <div className="p-4 space-y-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="shadow-soft">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className="text-xl font-bold text-foreground">{stat.value}</p>
                      <p className="text-xs text-success">{stat.change}</p>
                    </div>
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Active Deliveries */}
        <Card className="shadow-medium">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center">
              <Truck className="mr-2 h-5 w-5 text-primary" />
              Active Deliveries ({activeDeliveries.length})
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {activeDeliveries.map((delivery) => (
              <div key={delivery.id} className="bg-surface rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <Badge className={getStatusColor(delivery.status)}>
                    {getStatusText(delivery.status)}
                  </Badge>
                  <div className="text-right">
                    <div className="font-bold text-foreground">{delivery.fare}</div>
                    <div className="text-sm text-muted-foreground">{delivery.distance}</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <div className="bg-primary/20 p-1 rounded">
                      <MapPin className="h-3 w-3 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">Pickup</p>
                      <p className="text-sm text-muted-foreground">{delivery.pickup}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <div className="bg-success/20 p-1 rounded">
                      <MapPin className="h-3 w-3 text-success" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">Drop-off</p>
                      <p className="text-sm text-muted-foreground">{delivery.dropoff}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div>
                    <p className="text-sm font-medium text-foreground">{delivery.itemType}</p>
                    <p className="text-xs text-muted-foreground">{delivery.vehicleType} Required</p>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <MessageCircle className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="delivery">
                      <NavigationIcon className="h-4 w-4 mr-1" />
                      Navigate
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Available Jobs */}
        <Card className="shadow-medium">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center">
              <Package className="mr-2 h-5 w-5 text-primary" />
              Available Jobs ({availableJobs.length})
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {availableJobs.map((job) => (
              <div key={job.id} className="bg-surface rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="bg-muted/50">
                    {job.timeEstimate}
                  </Badge>
                  <div className="text-right">
                    <div className="font-bold text-foreground">{job.fare}</div>
                    <div className="text-sm text-muted-foreground">{job.distance}</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <div className="bg-primary/20 p-1 rounded">
                      <MapPin className="h-3 w-3 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">Pickup</p>
                      <p className="text-sm text-muted-foreground">{job.pickup}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <div className="bg-success/20 p-1 rounded">
                      <MapPin className="h-3 w-3 text-success" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">Drop-off</p>
                      <p className="text-sm text-muted-foreground">{job.dropoff}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div>
                    <p className="text-sm font-medium text-foreground">{job.itemType}</p>
                    <p className="text-xs text-muted-foreground">{job.vehicleType} Required</p>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="reject">
                      Decline
                    </Button>
                    <Button size="sm" variant="accept">
                      Accept
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="shadow-soft">
            <CardContent className="p-4 text-center">
              <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-medium text-foreground">Weekly Earnings</h3>
              <p className="text-2xl font-bold text-primary">$847.30</p>
              <p className="text-sm text-muted-foreground">+18% vs last week</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-soft">
            <CardContent className="p-4 text-center">
              <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-medium text-foreground">This Week</h3>
              <p className="text-2xl font-bold text-primary">32.5h</p>
              <p className="text-sm text-muted-foreground">47 deliveries</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Navigation />
    </div>
  );
};

export default Dashboard;