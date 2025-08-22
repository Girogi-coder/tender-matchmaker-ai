import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, Plus, Search, Filter, Calendar, MapPin, DollarSign, Clock, Building, User } from "lucide-react";
import { Input } from "@/components/ui/input";

const Dashboard = () => {
  const [userType] = useState<'user' | 'company'>('user'); // This would come from auth context

  // Mock data
  const tenders = [
    {
      id: 1,
      title: "IT ინფრასტრუქტურის განვითარება",
      company: "თბილისის მერია",
      budget: "50,000 ₾",
      deadline: "2024-09-15",
      location: "თბილისი",
      status: "active",
      description: "საჭიროა IT სისტემების მოდერნიზაცია და ახალი სერვერების დამონტაჟება...",
      matchPercentage: 95
    },
    {
      id: 2,
      title: "მშენებლობითი სამუშაოები",
      company: "სახელმწიფო პროკურატურა",
      budget: "120,000 ₾",
      deadline: "2024-09-20",
      location: "ბათუმი",
      status: "active",
      description: "ოფის რემონტი და განახლება...",
      matchPercentage: 78
    },
    {
      id: 3,
      title: "ვებ-საიტის შექმნა",
      company: "განათლების სამინისტრო",
      budget: "25,000 ₾",
      deadline: "2024-09-10",
      location: "თბილისი",
      status: "urgent",
      description: "ახალი ვებ-პლატფორმის შემუშავება სტუდენტებისთვის...",
      matchPercentage: 88
    }
  ];

  const notifications = [
    {
      id: 1,
      title: "ახალი ტენდერი: IT ინფრასტრუქტურა",
      message: "თქვენი გამოცდილების შესაბამისი ტენდერი გამოჩნდა",
      time: "5 წუთის წინ",
      type: "match"
    },
    {
      id: 2,
      title: "ვადის ამოწურვა",
      message: "ვებ-საიტის ტენდერი ამოიწურება 2 დღეში",
      time: "1 საათის წინ",
      type: "deadline"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Search className="w-5 h-5 text-primary-foreground" />
              </div>
              <h1 className="text-xl font-bold text-primary">TenderMatch</h1>
            </div>
            <Badge variant="secondary">
              {userType === 'company' ? <Building className="w-3 h-3 mr-1" /> : <User className="w-3 h-3 mr-1" />}
              {userType === 'company' ? 'კომპანია' : 'მომხმარებელი'}
            </Badge>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-destructive text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {notifications.length}
              </span>
            </Button>
            {userType === 'company' && (
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                ტენდერის დამატება
              </Button>
            )}
            <Button variant="outline">
              გასვლა
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Card */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">პროფილი</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-2 flex items-center justify-center">
                    {userType === 'company' ? (
                      <Building className="w-8 h-8 text-primary-foreground" />
                    ) : (
                      <User className="w-8 h-8 text-primary-foreground" />
                    )}
                  </div>
                  <h3 className="font-semibold">
                    {userType === 'company' ? 'ტექ კომპანია ჯორჯია' : 'გიორგი სვანიძე'}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {userType === 'company' ? 'IT კომპანია' : 'IT სპეციალისტი'}
                  </p>
                </div>
                <Button variant="outline" className="w-full">
                  პროფილის რედაქტირება
                </Button>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Bell className="mr-2 h-4 w-4" />
                  შეტყობინებები
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {notifications.map((notification) => (
                  <div key={notification.id} className="p-3 bg-muted/50 rounded-lg">
                    <h4 className="text-sm font-medium">{notification.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{notification.message}</p>
                    <p className="text-xs text-primary mt-1">{notification.time}</p>
                  </div>
                ))}
                <Button variant="ghost" size="sm" className="w-full">
                  ყველას ნახვა
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Search & Filters */}
            <Card className="shadow-card">
              <CardContent className="p-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1">
                    <Input
                      placeholder="ძებნა ტენდერებში..."
                      className="w-full"
                    />
                  </div>
                  <Button variant="outline">
                    <Filter className="mr-2 h-4 w-4" />
                    ფილტრები
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="shadow-card">
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Search className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-muted-foreground">ყველა ტენდერი</p>
                      <p className="text-2xl font-bold">127</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-success rounded-lg flex items-center justify-center">
                      <Bell className="w-5 h-5 text-success-foreground" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-muted-foreground">შესაბამისი ტენდერები</p>
                      <p className="text-2xl font-bold text-success">12</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-muted-foreground">აქტიური განცხადებები</p>
                      <p className="text-2xl font-bold">3</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Tenders List */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">
                  {userType === 'company' ? 'ყველა ტენდერი' : 'რეკომენდირებული ტენდერები'}
                </h2>
                <Button variant="outline" size="sm">
                  ყველას ნახვა
                </Button>
              </div>

              {tenders.map((tender) => (
                <Card key={tender.id} className="shadow-card hover:shadow-card-hover transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-semibold">{tender.title}</h3>
                          <Badge 
                            variant={tender.status === 'urgent' ? 'destructive' : 'secondary'}
                          >
                            {tender.status === 'urgent' ? 'გადაუდებელი' : 'აქტიური'}
                          </Badge>
                          {userType === 'user' && (
                            <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                              {tender.matchPercentage}% შესაბამისობა
                            </Badge>
                          )}
                        </div>
                        <p className="text-muted-foreground mb-3">{tender.description}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Building className="w-4 h-4 mr-1" />
                            {tender.company}
                          </div>
                          <div className="flex items-center">
                            <DollarSign className="w-4 h-4 mr-1" />
                            {tender.budget}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {tender.deadline}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {tender.location}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm">
                        დეტალურად
                      </Button>
                      {userType === 'user' && (
                        <Button size="sm" variant="success">
                          განცხადების გაგზავნა
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;