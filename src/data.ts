import { StyleItem, ServiceItem, TeamMember, Testimonial, PricingPackage } from './types';

export const HAIRCUT_STYLES: StyleItem[] = [
  {
    id: 'style-mullet',
    name: 'Mullet',
    category: 'Edgy & Modern',
    description: 'Modern edgy haircut with short sides and longer back.',
    price: '₹4,500',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'style-buzz-cut',
    name: 'Buzz Cut',
    category: 'Minimalist & Low-Maintenance',
    description: 'Clean low-maintenance military-inspired style.',
    price: '₹2,500',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'style-crew-cut',
    name: 'Crew Cut',
    category: 'Classic & Professional',
    description: 'Classic professional haircut with tapered sides.',
    price: '₹3,000',
    image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'style-fade-cut',
    name: 'Fade Cut',
    category: 'Modern Precision',
    description: 'Smooth transition from short sides to longer top.',
    price: '₹3,800',
    image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'style-pompadour',
    name: 'Pompadour',
    category: 'Timeless Voluminous',
    description: 'Stylish volume on top with sleek sides.',
    price: '₹4,200',
    image: 'https://images.unsplash.com/photo-1605497746445-97d1b0a9eadc?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'style-undercut',
    name: 'Undercut',
    category: 'Sharp Contrast',
    description: 'Sharp contrast between top and sides.',
    price: '₹3,500',
    image: 'https://images.unsplash.com/photo-1517832606589-7a598b647192?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'style-quiff',
    name: 'Quiff',
    category: 'Textured & Trendy',
    description: 'Trendy textured hairstyle with volume.',
    price: '₹3,800',
    image: 'https://images.unsplash.com/photo-1618077360395-f3068be8e001?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'style-french-crop',
    name: 'French Crop',
    category: 'Modern Vintage',
    description: 'Short textured top with fringe.',
    price: '₹3,200',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'style-slick-back',
    name: 'Slick Back',
    category: 'Polished Dapper',
    description: 'Timeless polished hairstyle.',
    price: '₹4,000',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'style-textured-crop',
    name: 'Textured Crop',
    category: 'Casual Contemporary',
    description: 'Modern casual haircut with texture.',
    price: '₹3,500',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'srv-haircut',
    name: 'Haircut',
    description: 'Precision cut tailored to your head shape, including initial wash, styling consultation, and essential finish.',
    price: '₹3,800',
    duration: '45 Mins',
    image: 'https://images.unsplash.com/photo-1517832606589-7a598b647192?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'srv-beard',
    name: 'Beard Styling',
    description: 'Artisanal beard sculpting, straight razor alignment, moisturizing oil infusion, and warm towel therapy.',
    price: '₹2,800',
    duration: '30 Mins',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'srv-coloring',
    name: 'Hair Coloring',
    description: 'Premium organic dye styling. Highlights, complete coverage, or custom Balayage applied by certified color experts.',
    price: '₹8,500',
    duration: '90 Mins',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'srv-spa',
    name: 'Hair Spa',
    description: 'Indulgent deep-conditioning steam mask, nourishing root-serum ampoules, and relaxing acupressure head massage.',
    price: '₹6,000',
    duration: '60 Mins',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'srv-facial',
    name: 'Facial Grooming',
    description: 'Revitalizing deep cleanse exfoliaton, botanical oil masks, pore extractions, and ice-globe facial massage.',
    price: '₹5,000',
    duration: '50 Mins',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'srv-styling',
    name: 'Hair Wash & Styling',
    description: 'Relaxative double shampoo, standard blowout, custom high-hold pomade or texture spray finish for formal nights.',
    price: '₹2,400',
    duration: '25 Mins',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600'
  }
];

export const GALLERY_IMAGES = [
  {
    id: 'gal-1',
    url: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=800',
    title: 'Luxury Waiting Lounge'
  },
  {
    id: 'gal-2',
    url: 'https://images.unsplash.com/photo-1605497746445-97d1b0a9eadc?auto=format&fit=crop&q=80&w=800',
    title: 'Hand-Tailored Details'
  },
  {
    id: 'gal-3',
    url: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800',
    title: 'Classic Leather Styling Chairs'
  },
  {
    id: 'gal-4',
    url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800',
    title: 'Precision At Work'
  },
  {
    id: 'gal-5',
    url: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=800',
    title: 'Beard Trimming Artistry'
  },
  {
    id: 'gal-6',
    url: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800',
    title: 'Premium Hair Care Therapy'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Charles Bennett',
    role: 'Loyal Patron',
    rating: 5,
    comment: 'The attention to detail here is unparalleled. From the dynamic consulting phase to the luxurious warm towel treatment, Alexander Mercer turns a simple trim into an exceptional rejuvenation routine.',
    date: '2 weeks ago'
  },
  {
    id: 'test-2',
    name: 'Victoria Hawthorne',
    role: 'Vogue Contributor',
    rating: 5,
    comment: 'Evelyn Vance is a hair-colouring magician! The transition to organic custom balayage looks absolute perfection, and the luxury interior styling left me feeling utterly pampered. Would give 6 stars if I could.',
    date: '3 days ago'
  },
  {
    id: 'test-3',
    name: 'Dominic Sterling',
    role: 'Tech Executive',
    rating: 5,
    comment: 'A true five-star workspace. Booking is incredibly smooth on native devices, the scheduling is strictly respected, and Marcus gave me the absolute best fade cut I’ve ever had. Highly recommend the Luxury Makeover package.',
    date: '1 month ago'
  },
  {
    id: 'test-4',
    name: 'Sienna Sterling',
    role: 'Creative Designer',
    rating: 5,
    comment: 'The Wellness Hair Spa treatments are out of this world! Incredible acupressure scalp massage from Aria. The aesthetic dark luxury branding perfectly matches their high-quality services.',
    date: '1 week ago'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Alexander Mercer',
    role: 'Founder & Head Stylist',
    specialty: 'Classic Scissor Cuts & Beard Sculpting',
    experience: '15+ Years',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    bio: 'Alexander studied classical barbering in Milan and London. He believes grooming is an architectural artform combining symmetry, flow, and individual style.'
  },
  {
    id: 'team-2',
    name: 'Evelyn Vance',
    role: 'Creative Director',
    specialty: 'Avant-Garde Coloring & Styling',
    experience: '12+ Years',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    bio: 'Renowned for setting editorial color trends, Evelyn treats hair as a canvas for dynamic self-expression, bringing rich dimensional layers to life.'
  },
  {
    id: 'team-3',
    name: 'Marcus Wilde',
    role: 'Senior Barber',
    specialty: 'High-Contrast Fades & Precision Lines',
    experience: '8+ Years',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=400',
    bio: 'Marcus is an absolute specialist in sharp fades, texturing, and laser-accurate razor work. His styling focus centers highly modern streetwear-forward designs.'
  },
  {
    id: 'team-4',
    name: 'Aria Chen',
    role: 'Spa & Scalp Therapist',
    specialty: 'Acupressure Massage & Balancers',
    experience: '10+ Years',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
    bio: 'Aria designs clinical wellness programs for hair repair and scalp rejuvenation. Her custom essential-oil acupressure work delivers profound relaxation.'
  }
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'pack-basic',
    name: 'Basic Grooming',
    price: '₹5,000',
    description: 'Essential luxury treatment for the modern gentleman on tight routines.',
    features: [
      'Tailored Haircut & Consultation',
      'Double Shampoos & Active Rinse',
      'Traditional Blow-Dry & Styling Finish',
      'Scalp Stress-Relief Oil Massage',
      'Complementary Premium Drinks'
    ],
    popular: false
  },
  {
    id: 'pack-premium',
    name: 'Premium Styling',
    price: '₹8,500',
    description: 'Our signature ritual that perfectly pairs grooming with high-end wellness.',
    features: [
      'Precision Cut & Tailored Grooming',
      'Comprehensive Beard Sculpt or Clean Shave',
      'Exfoliating Cleanse and Steam Treatment',
      'Therapeutic Hot Towel Essential Scent Care',
      'Blow-Dry, styling tutorial & premium pomade',
      'Artisanal Craft Coffee or Aged Malt Select'
    ],
    popular: true
  },
  {
    id: 'pack-luxury',
    name: 'Luxury Makeover',
    price: '₹15,000',
    description: 'The ultimate bespoke experience covering complete hair, skin, and spirit transformation.',
    features: [
      'Master Stylist Dedicated Private Session',
      'Advanced Custom Hair Color or Deep Repair Spa',
      'Artistic Custom Cut & Finished Styling',
      'Artisanal Beard Trim with Straight razor shave',
      'Active Facial Exfoliator & Ice-Globe Lift Massage',
      'Personalized Styling Profile & complementary products'
    ],
    popular: false
  }
];

export const CONTACT_INFO = {
  address: '159 Regent Street, Suite 402, London, W1B 4HL',
  phone: '+44 (0) 20 7946 0192',
  email: 'concierge@aurasalon.com',
  hours: [
    { days: 'Monday - Friday', times: '09:00 AM - 08:30 PM' },
    { days: 'Saturday', times: '09:00 AM - 07:00 PM' },
    { days: 'Sunday', times: '10:00 AM - 05:00 PM' }
  ]
};
