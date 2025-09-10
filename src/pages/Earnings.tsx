import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navigation from '@/components/Navigation';
import { 
  DollarSign, 
  TrendingUp, 
  Calendar, 
  Clock,
  Wallet,
  ArrowUpRight,
  Download
} from 'lucide-react';

const Earnings = () => {
  const todayStats = [
    { label: 'Total Earned', value: '$127.50', icon: DollarSign },
    { label: 'Deliveries', value: '8', icon: TrendingUp },
    { label: 'Hours Online', value: '6.5h', icon: Clock },
    { label: 'Average/Hour', value: '$19.62', icon: ArrowUpRight }
  ];

  const weeklyData = [
    { day: 'Mon', earnings: 85.50, deliveries: 5 },
    { day: 'Tue', earnings: 127.50, deliveries: 8 },
    { day: 'Wed', earnings: 95.25, deliveries: 6 },
    { day: 'Thu', earnings: 142.75, deliveries: 9 },
    { day: 'Fri', earnings: 168.50, deliveries: 11 },
    { day: 'Sat', earnings: 89.25, deliveries: 6 },
    { day: 'Sun', earnings: 73.25, deliveries: 4 }
  ];

  const recentTransactions = [
    { 
      id: 'DEL-100',
      customer: 'Sarah Johnson',
      item: 'Sofa Set',
      base: '$38.00',
      tip: '$7.00',
      total: '$45.00',
      time: '2:30 PM'
    },
    {
      id: 'DEL-099',
      customer: 'Mike Chen', 
      item: 'Appliances',
      base: '$55.00',
      tip: '$7.50',
      total: '$62.50',
      time: '1:15 PM'
    },
    {
      id: 'DEL-098',
      customer: 'Emily Rodriguez',
      item: 'Dining Set',
      base: '$32.00',
      tip: '$6.00', 
      total: '$38.00',
      time: '11:45 AM'
    }
  ];

  const maxEarnings = Math.max(...weeklyData.map(d => d.earnings));

  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="bg-card border-b border-border px-4 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-foreground">Earnings</h1>
            <p className="text-muted-foreground">Track your income and payouts</p>
          </div>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </header>

      <div className="p-4 space-y-6">
        {/* Today's Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {todayStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="shadow-soft">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                      <p className="text-lg font-bold text-foreground">{stat.value}</p>
                    </div>
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Balance & Payout */}
        <Card className="shadow-medium bg-gradient-primary text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/80 text-sm mb-1">Available Balance</p>
                <p className="text-3xl font-bold">$847.30</p>
                <p className="text-white/80 text-sm">+$127.50 today</p>
              </div>
              <div className="bg-white/20 p-3 rounded-lg">
                <Wallet className="h-8 w-8 text-white" />
              </div>
            </div>
            <div className="mt-6 flex space-x-3">
              <Button variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                Instant Payout
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Bank Transfer
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Weekly Overview */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="mr-2 h-5 w-5 text-primary" />
              This Week's Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {weeklyData.map((day) => (
                <div key={day.day} className="flex items-center space-x-4">
                  <div className="w-12 text-sm font-medium text-foreground">{day.day}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-muted-foreground">{day.deliveries} deliveries</span>
                      <span className="font-medium text-foreground">${day.earnings}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary rounded-full h-2 transition-all duration-300"
                        style={{ width: `${(day.earnings / maxEarnings) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 pt-4 border-t border-border">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-foreground">
                    ${weeklyData.reduce((acc, day) => acc + day.earnings, 0).toFixed(2)}
                  </p>
                  <p className="text-sm text-muted-foreground">Total Earned</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">
                    {weeklyData.reduce((acc, day) => acc + day.deliveries, 0)}
                  </p>
                  <p className="text-sm text-muted-foreground">Deliveries</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">$18.64</p>
                  <p className="text-sm text-muted-foreground">Avg/Delivery</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Transactions */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentTransactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-3 bg-surface rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-medium text-foreground">{transaction.customer}</span>
                    <Badge variant="outline" className="text-xs">
                      {transaction.id}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{transaction.item}</p>
                  <p className="text-xs text-muted-foreground">{transaction.time}</p>
                </div>
                <div className="text-right">
                  <div className="font-bold text-foreground">{transaction.total}</div>
                  <div className="text-xs text-muted-foreground">
                    Base: {transaction.base} + Tip: {transaction.tip}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Tabs defaultValue="week" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="week">This Week</TabsTrigger>
            <TabsTrigger value="month">This Month</TabsTrigger>
            <TabsTrigger value="year">This Year</TabsTrigger>
          </TabsList>

          <TabsContent value="week">
            <Card className="shadow-soft">
              <CardContent className="p-4 text-center">
                <h3 className="font-semibold text-foreground mb-2">Weekly Summary</h3>
                <p className="text-3xl font-bold text-primary mb-1">$782.00</p>
                <p className="text-sm text-muted-foreground">49 deliveries • 32.5 hours</p>
                <div className="mt-4 flex justify-center space-x-4 text-sm">
                  <div>
                    <span className="text-success">↑ 18%</span>
                    <span className="text-muted-foreground ml-1">vs last week</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="month">
            <Card className="shadow-soft">
              <CardContent className="p-4 text-center">
                <h3 className="font-semibold text-foreground mb-2">Monthly Summary</h3>
                <p className="text-3xl font-bold text-primary mb-1">$2,847.50</p>
                <p className="text-sm text-muted-foreground">186 deliveries • 142 hours</p>
                <div className="mt-4 flex justify-center space-x-4 text-sm">
                  <div>
                    <span className="text-success">↑ 12%</span>
                    <span className="text-muted-foreground ml-1">vs last month</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="year">
            <Card className="shadow-soft">
              <CardContent className="p-4 text-center">
                <h3 className="font-semibold text-foreground mb-2">Yearly Summary</h3>
                <p className="text-3xl font-bold text-primary mb-1">$24,891.25</p>
                <p className="text-sm text-muted-foreground">1,542 deliveries • 1,247 hours</p>
                <div className="mt-4 flex justify-center space-x-4 text-sm">
                  <div>
                    <span className="text-success">↑ 24%</span>
                    <span className="text-muted-foreground ml-1">vs last year</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Navigation />
    </div>
  );
};

export default Earnings;