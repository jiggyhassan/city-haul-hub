import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navigation from '@/components/Navigation';
import MapPlaceholder from '@/components/MapPlaceholder';
import { 
  Package, 
  MapPin, 
  Clock, 
  DollarSign, 
  Star,
  Phone,
  MessageCircle,
  Navigation as NavigationIcon,
  CheckCircle
} from 'lucide-react';

const Orders = () => {
  const activeOrders = [
    {
      id: 'DEL-001',
      pickup: { address: '123 Main St, Downtown', time: '2:30 PM' },
      dropoff: { address: '456 Oak Ave, Uptown', time: '3:15 PM' },
      item: 'Sofa Set (3-piece)',
      customer: 'Sarah Johnson',
      fare: '$45.00',
      distance: '2.3 mi',
      status: 'pickup',
      vehicle: 'Van'
    },
    {
      id: 'DEL-002', 
      pickup: { address: '789 Pine Rd, Westside', time: '4:00 PM' },
      dropoff: { address: '321 Elm St, Eastside', time: '4:45 PM' },
      item: 'Appliances (Washer & Dryer)',
      customer: 'Mike Chen',
      fare: '$62.50',
      distance: '4.1 mi',
      status: 'delivering',
      vehicle: 'XL'
    }
  ];

  const completedOrders = [
    {
      id: 'DEL-100',
      pickup: { address: '555 Cedar Ave, Midtown', time: '11:30 AM' },
      dropoff: { address: '888 Birch Ln, Southside', time: '12:15 PM' },
      item: 'Dining Table & Chairs',
      customer: 'Emily Rodriguez',
      fare: '$38.00',
      distance: '1.8 mi',
      status: 'completed',
      rating: 5,
      tip: '$8.00'
    },
    {
      id: 'DEL-099',
      pickup: { address: '999 Maple Dr, Northside', time: '9:45 AM' },
      dropoff: { address: '111 Walnut St, Central', time: '10:30 AM' },
      item: 'Moving Boxes (8 boxes)',
      customer: 'David Park',
      fare: '$28.00',
      distance: '2.1 mi',
      status: 'completed',
      rating: 5,
      tip: '$5.00'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pickup': return 'bg-warning text-warning-foreground';
      case 'delivering': return 'bg-primary text-primary-foreground';
      case 'completed': return 'bg-success text-success-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pickup': return 'En Route to Pickup';
      case 'delivering': return 'Delivering';
      case 'completed': return 'Completed';
      default: return status;
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="bg-card border-b border-border px-4 py-4">
        <h1 className="text-xl font-bold text-foreground">My Orders</h1>
        <p className="text-muted-foreground">Track and manage your deliveries</p>
      </header>

      <div className="p-4">
        <Tabs defaultValue="active" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="active">Active ({activeOrders.length})</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="space-y-4">
            {activeOrders.map((order) => (
              <Card key={order.id} className="shadow-medium">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Badge className={getStatusColor(order.status)}>
                        {getStatusText(order.status)}
                      </Badge>
                      <span className="font-mono text-sm text-muted-foreground">{order.id}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-foreground">{order.fare}</div>
                      <div className="text-sm text-muted-foreground">{order.distance}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Item Details */}
                  <div className="bg-surface rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-foreground">{order.item}</p>
                        <p className="text-sm text-muted-foreground">Customer: {order.customer}</p>
                      </div>
                      <Badge variant="outline">{order.vehicle}</Badge>
                    </div>
                  </div>

                  {/* Route Details */}
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="bg-primary/20 p-1.5 rounded-full">
                        <MapPin className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">Pickup</p>
                        <p className="text-sm text-muted-foreground">{order.pickup.address}</p>
                        <p className="text-xs text-muted-foreground flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {order.pickup.time}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="bg-success/20 p-1.5 rounded-full">
                        <MapPin className="h-4 w-4 text-success" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">Drop-off</p>
                        <p className="text-sm text-muted-foreground">{order.dropoff.address}</p>
                        <p className="text-xs text-muted-foreground flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {order.dropoff.time}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Map */}
                  <MapPlaceholder title="Delivery Route" className="h-32" />

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Phone className="h-4 w-4 mr-1" />
                      Call
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      Chat
                    </Button>
                    <Button size="sm" variant="delivery" className="flex-1">
                      <NavigationIcon className="h-4 w-4 mr-1" />
                      Navigate
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="history" className="space-y-4">
            {completedOrders.map((order) => (
              <Card key={order.id} className="shadow-soft">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <Badge className={getStatusColor(order.status)}>
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Completed
                      </Badge>
                      <span className="font-mono text-sm text-muted-foreground">{order.id}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-foreground">
                        {order.fare}
                        {order.tip && <span className="text-success text-sm"> +{order.tip}</span>}
                      </div>
                      <div className="flex items-center text-sm">
                        <Star className="h-3 w-3 text-warning mr-1" />
                        <span>{order.rating}.0</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="font-medium text-foreground">{order.item}</p>
                    <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                      <div>
                        <p className="font-medium">From:</p>
                        <p>{order.pickup.address}</p>
                      </div>
                      <div>
                        <p className="font-medium">To:</p>
                        <p>{order.dropoff.address}</p>
                      </div>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground pt-2">
                      <span>{order.distance}</span>
                      <span>Customer: {order.customer}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>

      <Navigation />
    </div>
  );
};

export default Orders;