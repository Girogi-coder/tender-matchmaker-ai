import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Bell, Users, Building, TrendingUp, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Search className="w-5 h-5 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-bold text-primary">TenderMatch</h1>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" onClick={() => navigate('/login')}>
              შესვლა
            </Button>
            <Button onClick={() => navigate('/register')}>
              რეგისტრაცია
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">
            AI-ით მართვადი ტენდერების პლატფორმა
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            გაუერთდით ჩვენს პლატფორმას და მიიღეთ ინტელექტუალური შეტყობინებები თქვენი გამოცდილების შესაბამისი ტენდერების შესახებ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => navigate('/register?type=user')}
              className="text-lg px-8 py-3"
            >
              <Users className="mr-2 h-5 w-5" />
              მომხმარებლის რეგისტრაცია
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => navigate('/register?type=company')}
              className="text-lg px-8 py-3 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Building className="mr-2 h-5 w-5" />
              კომპანიის რეგისტრაცია
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">როგორ მუშაობს პლატფორმა</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-card hover:shadow-card-hover transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bell className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-semibold mb-3">ავტომატური შეტყობინებები</h4>
                <p className="text-muted-foreground">
                  AI ანალიზირებს ყველა ახალ ტენდერს და გიგზავნით შეტყობინებას თქვენი გამოცდილების შესაბამისად
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-card-hover transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-success rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-success-foreground" />
                </div>
                <h4 className="text-xl font-semibold mb-3">ზუსტი შესაბამისობა</h4>
                <p className="text-muted-foreground">
                  დეტალური პროფილის ანალიზი უზრუნველყოფს მაქსიმალურად შესაბამის ტენდერებზე შეტყობინებას
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-card-hover transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-semibold mb-3">უსაფრთხო და საიმედო</h4>
                <p className="text-muted-foreground">
                  ყველა ტენდერი და მომხმარებელი გადის ვერიფიკაციას უსაფრთხოების მაქსიმალური დონისთვის
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">მზად ხართ დაიწყოთ?</h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            შემოუერთდით ათასობით წარმატებულ მომხმარებელს და კომპანიას ჩვენს პლატფორმაზე
          </p>
          <Button 
            size="lg" 
            onClick={() => navigate('/register')}
            className="text-lg px-8 py-3"
          >
            დაიწყეთ დღესვე
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-8 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 TenderMatch. ყველა უფლება დაცულია.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;