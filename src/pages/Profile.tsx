import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import Navigation from '@/components/Navigation';
import { 
  User, 
  Star, 
  Truck, 
  Phone, 
  Mail, 
  MapPin,
  Settings,
  CreditCard,
  Shield,
  HelpCircle,
  LogOut,
  Camera,
  Edit3,
  CheckCircle,
  Clock
} from 'lucide-react';

const Profile = () => {
  const driverStats = [
    { label: 'Total Deliveries', value: '1,247', icon: Truck },
    { label: 'Rating', value: '4.9', icon: Star },
    { label: 'Years Active', value: '2.5', icon: CheckCircle },
    { label: 'On-Time %', value: '98.5%', icon: Clock }
  ];

  const menuItems = [
    {
      section: 'Account',
      items: [
        { icon: User, label: 'Personal Information', description: 'Name, phone, email', action: 'edit' },
        { icon: Truck, label: 'Vehicle Information', description: 'Pickup Truck • License verified', action: 'edit' },
        { icon: CreditCard, label: 'Payment Method', description: 'Bank account for payouts', action: 'edit' },
        { icon: Shield, label: 'Insurance & Documents', description: 'License, insurance status', action: 'view' }
      ]
    },
    {
      section: 'Preferences',
      items: [
        { icon: Settings, label: 'App Settings', description: 'Notifications, language, theme', action: 'configure' },
        { icon: MapPin, label: 'Delivery Zones', description: 'Set your preferred areas', action: 'configure' },
        { icon: Clock, label: 'Availability', description: 'Working hours and schedule', action: 'configure' }
      ]
    },
    {
      section: 'Support',
      items: [
        { icon: HelpCircle, label: 'Help & FAQ', description: 'Common questions and support', action: 'view' },
        { icon: Phone, label: 'Contact Support', description: '24/7 driver support line', action: 'contact' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="bg-card border-b border-border px-4 py-6">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
              <User className="h-8 w-8 text-white" />
            </div>
            <Button size="icon" variant="outline" className="absolute -bottom-1 -right-1 h-8 w-8 rounded-full bg-background">
              <Camera className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex-1">
            <h1 className="text-xl font-bold text-foreground">Alex Rodriguez</h1>
            <p className="text-muted-foreground">Driver since March 2022</p>
            <div className="flex items-center space-x-2 mt-1">
              <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                <CheckCircle className="h-3 w-3 mr-1" />
                Verified
              </Badge>
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                Pro Driver
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="p-4 space-y-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {driverStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="shadow-soft">
                <CardContent className="p-4 text-center">
                  <div className="bg-primary/10 p-2 rounded-lg w-fit mx-auto mb-2">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-lg font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Current Vehicle */}
        <Card className="shadow-medium">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center">
              <Truck className="mr-2 h-5 w-5 text-primary" />
              Current Vehicle
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-surface rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-foreground">2019 Ford F-150</h3>
                  <p className="text-sm text-muted-foreground">Pickup Truck • License Plate: ABC-123</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Insurance Valid
                    </Badge>
                    <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      License Valid
                    </Badge>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <Edit3 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Menu Sections */}
        {menuItems.map((section, sectionIndex) => (
          <Card key={sectionIndex} className="shadow-soft">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">{section.section}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-1">
              {section.items.map((item, itemIndex) => {
                const Icon = item.icon;
                return (
                  <div key={itemIndex}>
                    <div className="flex items-center justify-between p-3 hover:bg-surface rounded-lg transition-colors cursor-pointer">
                      <div className="flex items-center space-x-3">
                        <div className="bg-muted p-2 rounded-lg">
                          <Icon className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{item.label}</p>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Edit3 className="h-4 w-4" />
                      </Button>
                    </div>
                    {itemIndex < section.items.length - 1 && (
                      <Separator className="mx-3" />
                    )}
                  </div>
                );
              })}
            </CardContent>
          </Card>
        ))}

        {/* Logout */}
        <Card className="shadow-soft border-destructive/20">
          <CardContent className="p-4">
            <Button variant="destructive" className="w-full" size="lg">
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </CardContent>
        </Card>

        {/* App Info */}
        <div className="text-center text-sm text-muted-foreground space-y-1">
          <p>DeliveryPro Driver App v2.1.0</p>
          <div className="flex justify-center space-x-4">
            <button className="hover:text-foreground">Terms of Service</button>
            <button className="hover:text-foreground">Privacy Policy</button>
          </div>
        </div>
      </div>

      <Navigation />
    </div>
  );
};

export default Profile;