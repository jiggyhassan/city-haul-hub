import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Truck, 
  DollarSign, 
  MapPin, 
  Clock, 
  Shield, 
  Smartphone,
  CheckCircle
} from 'lucide-react';
import heroDriver from '@/assets/hero-driver.jpg';

const Landing = () => {
  const features = [
    {
      icon: DollarSign,
      title: "Earn More",
      description: "Competitive rates for large item deliveries with tips and bonuses"
    },
    {
      icon: MapPin,
      title: "Smart Routing",
      description: "Optimized delivery routes to maximize your earnings per hour"
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Work when you want, set your own availability"
    },
    {
      icon: Shield,
      title: "Insured Deliveries",
      description: "Full coverage protection for you and your cargo"
    }
  ];

  const vehicleTypes = [
    { type: "Pickup", description: "Small furniture, appliances", rate: "$15-25/hr" },
    { type: "Van", description: "Medium furniture, multiple items", rate: "$20-30/hr" },
    { type: "XL", description: "Large furniture, mattresses", rate: "$25-35/hr" },
    { type: "Box Truck", description: "Moving, bulk deliveries", rate: "$30-45/hr" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-surface to-background">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="bg-gradient-primary p-2 rounded-lg">
            <Truck className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold text-foreground">DeliveryPro</span>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/login" className="text-muted-foreground hover:text-foreground">
            Sign In
          </Link>
          <Button asChild variant="outline">
            <Link to="/register">Get Started</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Drive. Deliver. 
              <span className="text-primary"> Earn More.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl animate-slide-up">
              Join thousands of drivers delivering large items across the city. 
              Use your pickup, van, or truck to earn competitive rates with flexible scheduling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up">
              <Button asChild size="lg" className="text-lg px-8 py-3">
                <Link to="/register">Start Driving Today</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3">
                <Link to="/login">Sign In</Link>
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-in">
            <img 
              src={heroDriver} 
              alt="Professional delivery driver with van in urban setting" 
              className="rounded-2xl shadow-strong w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-2xl" />
          </div>
        </div>
      </section>

      {/* Vehicle Types */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Choose Your Vehicle</h2>
          <p className="text-muted-foreground text-lg">Different vehicles, different opportunities</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vehicleTypes.map((vehicle, index) => (
            <Card key={vehicle.type} className="p-6 hover:shadow-medium transition-shadow">
              <div className="text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{vehicle.type}</h3>
                <p className="text-muted-foreground text-sm mb-3">{vehicle.description}</p>
                <div className="text-primary font-bold">{vehicle.rate}</div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Why Drive With Us?</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* How it Works */}
      <section className="bg-surface py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">How It Works</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { 
                step: "1", 
                title: "Get Notified", 
                description: "Receive delivery requests matching your vehicle and location" 
              },
              { 
                step: "2", 
                title: "Accept & Navigate", 
                description: "Accept jobs you want and follow GPS navigation to pickup" 
              },
              { 
                step: "3", 
                title: "Deliver & Earn", 
                description: "Complete delivery, get paid instantly with tips included" 
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Start Earning?</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Join our growing community of professional drivers and start making money today.
          </p>
          <Button asChild size="lg" className="text-lg px-8 py-3">
            <Link to="/register">Sign Up Now</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-primary p-2 rounded-lg">
                <Truck className="h-5 w-5 text-white" />
              </div>
              <span className="font-semibold text-foreground">DeliveryPro</span>
            </div>
            <p className="text-muted-foreground text-sm">© 2024 DeliveryPro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;