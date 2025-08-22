import { useState } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Building, Users, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Register = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const userType = searchParams.get('type') || 'user';
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phone: '',
    // User specific
    profession: '',
    experience: '',
    specialization: '',
    previousTenders: '',
    skills: '',
    education: '',
    certifications: '',
    portfolio: '',
    // Company specific
    companyName: '',
    registrationNumber: '',
    taxNumber: '',
    companyType: '',
    employeeCount: '',
    foundedYear: '',
    website: '',
    description: '',
    address: '',
    legalRepresentative: '',
    agreedToTerms: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Validation
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "შეცდომა",
        description: "პაროლები არ ემთხვევა",
        variant: "destructive"
      });
      setIsLoading(false);
      return;
    }

    if (!formData.agreedToTerms) {
      toast({
        title: "შეცდომა",
        description: "გთხოვთ დაეთანხმოთ წესებს და პირობებს",
        variant: "destructive"
      });
      setIsLoading(false);
      return;
    }

    // Simulate registration
    setTimeout(() => {
      toast({
        title: "წარმატებით დარეგისტრირდით!",
        description: "ახლა შეგიძლიათ შეხვიდეთ სისტემაში",
      });
      navigate('/login');
      setIsLoading(false);
    }, 2000);
  };

  const updateFormData = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="mb-6">
          <Button variant="ghost" onClick={() => navigate('/')} className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            მთავარი გვერდი
          </Button>
        </div>

        <Card className="shadow-professional">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              {userType === 'company' ? (
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Building className="w-8 h-8 text-primary-foreground" />
                </div>
              ) : (
                <div className="w-16 h-16 bg-gradient-success rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-success-foreground" />
                </div>
              )}
            </div>
            <CardTitle className="text-2xl">
              {userType === 'company' ? 'კომპანიის რეგისტრაცია' : 'მომხმარებლის რეგისტრაცია'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Info */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">ძირითადი ინფორმაცია</h3>
                
                {userType === 'company' ? (
                  <>
                    <div>
                      <Label htmlFor="companyName">კომპანიის დასახელება *</Label>
                      <Input
                        id="companyName"
                        value={formData.companyName}
                        onChange={(e) => updateFormData('companyName', e.target.value)}
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="registrationNumber">სარეგისტრაციო ნომერი *</Label>
                        <Input
                          id="registrationNumber"
                          value={formData.registrationNumber}
                          onChange={(e) => updateFormData('registrationNumber', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="taxNumber">საგადასახადო ნომერი *</Label>
                        <Input
                          id="taxNumber"
                          value={formData.taxNumber}
                          onChange={(e) => updateFormData('taxNumber', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">სახელი *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => updateFormData('firstName', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">გვარი *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => updateFormData('lastName', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                )}

                <div>
                  <Label htmlFor="email">ელ. ფოსტა *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">ტელეფონის ნომერი *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => updateFormData('phone', e.target.value)}
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="password">პაროლი *</Label>
                    <Input
                      id="password"
                      type="password"
                      value={formData.password}
                      onChange={(e) => updateFormData('password', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="confirmPassword">პაროლის დადასტურება *</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={formData.confirmPassword}
                      onChange={(e) => updateFormData('confirmPassword', e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Detailed Info */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">დეტალური ინფორმაცია</h3>
                
                {userType === 'company' ? (
                  <>
                    <div>
                      <Label htmlFor="companyType">კომპანიის ტიპი *</Label>
                      <Select onValueChange={(value) => updateFormData('companyType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="აირჩიეთ კომპანიის ტიპი" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ltd">შპს</SelectItem>
                          <SelectItem value="jsc">აა</SelectItem>
                          <SelectItem value="llp">კოოპერატივი</SelectItem>
                          <SelectItem value="sole">ინდივიდუალური მეწარმე</SelectItem>
                          <SelectItem value="other">სხვა</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="employeeCount">თანამშრომელთა რაოდენობა *</Label>
                        <Select onValueChange={(value) => updateFormData('employeeCount', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="აირჩიეთ" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-10">1-10</SelectItem>
                            <SelectItem value="11-50">11-50</SelectItem>
                            <SelectItem value="51-100">51-100</SelectItem>
                            <SelectItem value="100+">100+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="foundedYear">დაფუძნების წელი *</Label>
                        <Input
                          id="foundedYear"
                          type="number"
                          min="1900"
                          max="2024"
                          value={formData.foundedYear}
                          onChange={(e) => updateFormData('foundedYear', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="website">ვებ-გვერდი</Label>
                      <Input
                        id="website"
                        type="url"
                        value={formData.website}
                        onChange={(e) => updateFormData('website', e.target.value)}
                        placeholder="https://..."
                      />
                    </div>

                    <div>
                      <Label htmlFor="description">კომპანიის აღწერა *</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => updateFormData('description', e.target.value)}
                        placeholder="აღწერეთ თქვენი კომპანიის მიზნები, სფერო და გამოცდილება..."
                        className="min-h-[100px]"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="address">მისამართი *</Label>
                      <Input
                        id="address"
                        value={formData.address}
                        onChange={(e) => updateFormData('address', e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="legalRepresentative">იურიდიული წარმომადგენელი *</Label>
                      <Input
                        id="legalRepresentative"
                        value={formData.legalRepresentative}
                        onChange={(e) => updateFormData('legalRepresentative', e.target.value)}
                        required
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <Label htmlFor="profession">პროფესია *</Label>
                      <Input
                        id="profession"
                        value={formData.profession}
                        onChange={(e) => updateFormData('profession', e.target.value)}
                        placeholder="მაგ: IT სპეციალისტი, ინჟინერი, არქიტექტორი..."
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="experience">გამოცდილება (წლებში) *</Label>
                      <Select onValueChange={(value) => updateFormData('experience', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="აირჩიეთ გამოცდილების დონე" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-1">0-1 წელი</SelectItem>
                          <SelectItem value="2-5">2-5 წელი</SelectItem>
                          <SelectItem value="6-10">6-10 წელი</SelectItem>
                          <SelectItem value="11-15">11-15 წელი</SelectItem>
                          <SelectItem value="15+">15+ წელი</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="specialization">სპეციალიზაცია *</Label>
                      <Textarea
                        id="specialization"
                        value={formData.specialization}
                        onChange={(e) => updateFormData('specialization', e.target.value)}
                        placeholder="დაწერეთ თქვენი სპეციალიზაციის სფერო..."
                        className="min-h-[80px]"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="previousTenders">წინა ტენდერების გამოცდილება *</Label>
                      <Textarea
                        id="previousTenders"
                        value={formData.previousTenders}
                        onChange={(e) => updateFormData('previousTenders', e.target.value)}
                        placeholder="აღწერეთ რა ტენდერებში მიგიღიათ მონაწილეობა..."
                        className="min-h-[80px]"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="skills">უნარები და ცოდნა *</Label>
                      <Textarea
                        id="skills"
                        value={formData.skills}
                        onChange={(e) => updateFormData('skills', e.target.value)}
                        placeholder="ჩამოთვალეთ თქვენი ტექნიკური და პროფესიული უნარები..."
                        className="min-h-[80px]"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="education">განათლება *</Label>
                      <Input
                        id="education"
                        value={formData.education}
                        onChange={(e) => updateFormData('education', e.target.value)}
                        placeholder="მაგ: თსუ, ტექნიკური უნივერსიტეტი..."
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="certifications">სერტიფიკატები</Label>
                      <Textarea
                        id="certifications"
                        value={formData.certifications}
                        onChange={(e) => updateFormData('certifications', e.target.value)}
                        placeholder="ჩამოთვალეთ თქვენი პროფესიული სერტიფიკატები..."
                        className="min-h-[60px]"
                      />
                    </div>

                    <div>
                      <Label htmlFor="portfolio">პორტფოლიო/რეფერენსები</Label>
                      <Textarea
                        id="portfolio"
                        value={formData.portfolio}
                        onChange={(e) => updateFormData('portfolio', e.target.value)}
                        placeholder="მიუთითეთ თქვენი წარმატებული პროექტების მაგალითები..."
                        className="min-h-[80px]"
                      />
                    </div>
                  </>
                )}
              </div>

              {/* Terms */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.agreedToTerms}
                  onCheckedChange={(checked) => updateFormData('agreedToTerms', !!checked)}
                />
                <Label htmlFor="terms" className="text-sm">
                  ვეთანხმები <Link to="/terms" className="text-primary hover:underline">წესებს და პირობებს</Link> და{' '}
                  <Link to="/privacy" className="text-primary hover:underline">კონფიდენციალურობის პოლიტიკას</Link>
                </Label>
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                {isLoading ? 'რეგისტრაცია...' : 'რეგისტრაცია'}
              </Button>

              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  უკვე გაქვთ ანგარიში?{' '}
                  <Link to="/login" className="text-primary hover:underline">
                    შესვლა
                  </Link>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Register;