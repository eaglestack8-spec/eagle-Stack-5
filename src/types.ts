export interface StyleItem {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  image: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  experience: string;
  image: string;
  bio: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  date: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  popular: boolean;
}
