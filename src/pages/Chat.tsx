import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import { 
  MessageCircle, 
  Phone, 
  User, 
  Send,
  Clock,
  CheckCircle2,
  MapPin
} from 'lucide-react';

const Chat = () => {
  const conversations = [
    {
      id: '1',
      name: 'Sarah Johnson',
      lastMessage: 'Thanks for the quick delivery! Everything looks great.',
      time: '2:45 PM',
      unread: 0,
      orderStatus: 'completed',
      orderId: 'DEL-100'
    },
    {
      id: '2', 
      name: 'Mike Chen',
      lastMessage: 'I\'m here at the pickup location',
      time: '2:30 PM',
      unread: 2,
      orderStatus: 'active',
      orderId: 'DEL-101'
    },
    {
      id: 'support',
      name: 'Driver Support',
      lastMessage: 'Your vehicle inspection has been approved!',
      time: '11:15 AM',
      unread: 1,
      orderStatus: 'support',
      orderId: null
    }
  ];

  const activeChat = conversations.find(c => c.id === '2');

  const chatMessages = [
    {
      id: 1,
      sender: 'customer',
      message: 'Hi! I\'m ready for pickup at 789 Pine Rd',
      time: '2:25 PM',
      status: 'read'
    },
    {
      id: 2,
      sender: 'driver',
      message: 'Great! I\'m about 5 minutes away. The van is blue.',
      time: '2:26 PM',
      status: 'delivered'
    },
    {
      id: 3,
      sender: 'customer', 
      message: 'Perfect, I\'ll be outside with the washer and dryer',
      time: '2:28 PM',
      status: 'read'
    },
    {
      id: 4,
      sender: 'driver',
      message: 'I\'m here at the pickup location',
      time: '2:30 PM',
      status: 'delivered'
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="bg-card border-b border-border px-4 py-4">
        <h1 className="text-xl font-bold text-foreground">Messages</h1>
        <p className="text-muted-foreground">Chat with customers and support</p>
      </header>

      <div className="flex flex-col h-[calc(100vh-8rem)]">
        {/* Conversation List */}
        <div className="p-4 space-y-3 flex-1 overflow-y-auto">
          {conversations.map((conversation) => (
            <Card key={conversation.id} className="shadow-soft hover:shadow-medium transition-shadow cursor-pointer">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      {conversation.id === 'support' ? (
                        <MessageCircle className="h-5 w-5 text-primary" />
                      ) : (
                        <User className="h-5 w-5 text-primary" />
                      )}
                    </div>
                    {conversation.unread > 0 && (
                      <div className="absolute -top-1 -right-1 bg-destructive text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {conversation.unread}
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-foreground truncate">{conversation.name}</h3>
                      <span className="text-xs text-muted-foreground">{conversation.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">{conversation.lastMessage}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      {conversation.orderId && (
                        <Badge variant="outline" className="text-xs">
                          {conversation.orderId}
                        </Badge>
                      )}
                      {conversation.orderStatus === 'active' && (
                        <Badge className="bg-primary text-primary-foreground text-xs">
                          Active Order
                        </Badge>
                      )}
                      {conversation.orderStatus === 'completed' && (
                        <Badge className="bg-success text-success-foreground text-xs">
                          Completed
                        </Badge>
                      )}
                      {conversation.orderStatus === 'support' && (
                        <Badge variant="outline" className="bg-muted text-xs">
                          Support
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Active Chat (if any) */}
        {activeChat && (
          <Card className="mx-4 mb-4 shadow-medium">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-base">{activeChat.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{activeChat.orderId}</p>
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  <Phone className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Order Context */}
              <div className="bg-surface rounded-lg p-3 space-y-2">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">Pickup: 789 Pine Rd, Westside</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-success" />
                  <span className="text-sm font-medium text-foreground">Drop-off: 321 Elm St, Eastside</span>
                </div>
                <p className="text-sm text-muted-foreground">Appliances (Washer & Dryer) • $62.50</p>
              </div>

              {/* Chat Messages */}
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {chatMessages.map((message) => (
                  <div key={message.id} className={`flex ${message.sender === 'driver' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-xs p-3 rounded-lg ${
                      message.sender === 'driver' 
                        ? 'bg-primary text-white' 
                        : 'bg-surface text-foreground'
                    }`}>
                      <p className="text-sm">{message.message}</p>
                      <div className="flex items-center justify-end space-x-1 mt-1">
                        <span className={`text-xs ${
                          message.sender === 'driver' ? 'text-white/70' : 'text-muted-foreground'
                        }`}>
                          {message.time}
                        </span>
                        {message.sender === 'driver' && (
                          <CheckCircle2 className={`h-3 w-3 ${
                            message.status === 'delivered' ? 'text-white' : 'text-white/50'
                          }`} />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="flex space-x-2">
                <Input 
                  placeholder="Type your message..." 
                  className="flex-1"
                />
                <Button size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" size="sm">
                  I'm on my way
                </Button>
                <Button variant="outline" size="sm">
                  I've arrived
                </Button>
                <Button variant="outline" size="sm">
                  Items picked up
                </Button>
                <Button variant="outline" size="sm">
                  Delivery complete
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      <Navigation />
    </div>
  );
};

export default Chat;