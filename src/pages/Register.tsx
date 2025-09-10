import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Truck, User, Mail, Phone, Lock, Upload, CheckCircle } from 'lucide-react';

const Register = () => {
  const vehicleTypes = [
    { 
      id: 'pickup', 
      label: 'Pickup Truck', 
      description: 'Small furniture, appliances',
      rate: '$15-25/hr'
    },
    { 
      id: 'van', 
      label: 'Van', 
      description: 'Medium furniture, multiple items',
      rate: '$20-30/hr'
    },
    { 
      id: 'xl', 
      label: 'XL Truck', 
      description: 'Large furniture, mattresses',
      rate: '$25-35/hr'
    },
    { 
      id: 'box', 
      label: 'Box Truck', 
      description: 'Moving, bulk deliveries',
      rate: '$30-45/hr'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-surface to-background py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="bg-gradient-primary p-3 rounded-lg w-fit mx-auto mb-4">
            <Truck className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-foreground">Join Our Driver Network</h1>
          <p className="text-muted-foreground">Start earning with your vehicle today</p>
        </div>

        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Driver Registration</CardTitle>
            <CardDescription className="text-center">
              Complete your profile to start accepting deliveries
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground flex items-center">
                <User className="mr-2 h-5 w-5 text-primary" />
                Personal Information
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Enter first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Enter last name" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="pl-9"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="pl-9"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Create a strong password"
                    className="pl-9"
                  />
                </div>
              </div>
            </div>

            <Separator />

            {/* Vehicle Selection */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground flex items-center">
                <Truck className="mr-2 h-5 w-5 text-primary" />
                Vehicle Type
              </h3>
              
              <RadioGroup defaultValue="pickup" className="space-y-3">
                {vehicleTypes.map((vehicle) => (
                  <div key={vehicle.id} className="flex items-center space-x-3">
                    <RadioGroupItem value={vehicle.id} id={vehicle.id} />
                    <Label htmlFor={vehicle.id} className="flex-1 cursor-pointer">
                      <div className="bg-surface hover:bg-surface-hover p-4 rounded-lg border border-border transition-colors">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="font-medium text-foreground">{vehicle.label}</div>
                            <div className="text-sm text-muted-foreground">{vehicle.description}</div>
                          </div>
                          <div className="text-primary font-bold">{vehicle.rate}</div>
                        </div>
                      </div>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <Separator />

            {/* Documents */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground flex items-center">
                <Upload className="mr-2 h-5 w-5 text-primary" />
                Required Documents
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Driver's License</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
                    <Upload className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground">Upload license photo</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Vehicle Insurance</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
                    <Upload className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground">Upload insurance document</p>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Terms and Registration */}
            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <input type="checkbox" id="terms" className="rounded mt-0.5" />
                <Label htmlFor="terms" className="text-sm">
                  I agree to the <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link> and{' '}
                  <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                </Label>
              </div>

              <div className="flex items-start space-x-2">
                <input type="checkbox" id="background" className="rounded mt-0.5" />
                <Label htmlFor="background" className="text-sm">
                  I consent to background check and vehicle verification
                </Label>
              </div>

              <Button className="w-full" size="lg">
                Create Driver Account
              </Button>
            </div>

            <div className="text-center text-sm">
              <span className="text-muted-foreground">Already have an account? </span>
              <Link to="/login" className="text-primary font-medium hover:underline">
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <div className="mt-8 bg-primary/5 rounded-lg p-6 border border-primary/20">
          <h3 className="font-semibold text-foreground mb-4 flex items-center">
            <CheckCircle className="mr-2 h-5 w-5 text-primary" />
            What happens next?
          </h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>• We'll verify your documents (usually within 24 hours)</p>
            <p>• Complete vehicle inspection if required</p>
            <p>• Start receiving delivery requests immediately after approval</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;