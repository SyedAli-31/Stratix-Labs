// Types for company information, services, case studies, testimonials, and stats
export type SocialMediaLinks = {
  twitter: string;
  facebook: string;
  linkedin: string;
  instagram: string;
};

export interface Service {
  id: number;
  slug: string; // <-- Add this line
  title: string;
  description: string;
  color: string;
}

export type CaseStudy = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  results: string[];
};

export type Testimonial = {
  id: number;
  name: string;
  position: string;
  image: string;
  quote: string;
  rating: number;
};

export type Stat = {
  id: number;
  value: number;
  label: string;
  suffix: string;
};

// Company information
export const companyInfo = {
  name: "Stratix Labs",
  tagline: "Where Strategy Fuels Market Success",
  description: "We are a premium marketing agency dedicated to elevating brands through innovative strategies and creative excellence.",
  founded: 2012,
  location: "San Francisco, CA",
  email: "info@stratixlabs.com",
  phone: "+1 (555) 123-4567",
  address: "123 Innovation Drive, San Francisco, CA 94103, USA",
  socialMedia: {
    twitter: "https://twitter.com/stratixlabs",
    facebook: "https://facebook.com/stratixlabs",
    linkedin: "https://linkedin.com/company/stratixlabs",
    instagram: "https://instagram.com/stratixlabs"
  } as SocialMediaLinks
};

// Navigation links
export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" }
];



// lib/data.ts
export const otherServices = [
  {
    id: 1,
    title: "Brand Strategy",
    slug: "brand-strategy",
    desc: "Develop a compelling brand identity and positioning that resonates with your target audience.",
    benefits: [
      "Stronger brand recognition",
      "Clear market positioning",
      "Improved customer loyalty",
    ],
    process: [
      "Market research & competitor analysis",
      "Brand personality & tone definition",
      "Visual identity and messaging strategy",
    ],
  },
  {
    id: 2,
    title: "Digital Marketing",
    slug: "digital-marketing",
    desc: "Comprehensive marketing campaigns that drive traffic, engagement, and conversions.",
    benefits: [
      "Increased website traffic",
      "Better conversion rates",
      "Stronger online presence",
    ],
    process: [
      "Channel strategy & budget allocation",
      "Campaign execution & tracking",
      "Analysis & optimization",
    ],
  },
  {
    id: 3,
    title: "Content Creation",
    slug: "content-creation",
    desc: "High-quality, engaging content that tells your brand story and connects with your audience on an emotional level.",
    benefits: [
      "Enhanced brand narrative",
      "Increased audience engagement",
      "Improved brand visibility",
    ],
    process: [
      "Content strategy & planning",
      "Content writing & design",
      "Content promotion & distribution",
    ],
    color: "from-blue-600 to-blue-800",
  },
  {
    id: 4,
    title: "Social Media Management",
    slug: "social-media-management",
    desc: "Strategic social media presence that builds community, increases engagement, and drives brand awareness.",
    benefits: [
      "Increased brand visibility",
      "Enhanced community engagement",
      "Improved customer loyalty",
    ],
    process: [
      "Social media strategy & planning",
      "Content creation & scheduling",
      "Performance tracking & reporting",
    ],
    color: "from-pink-600 to-pink-800",
  },
  {
    id: 5,
    title: "SEO Optimization",
    slug: "seo-optimization",
    desc: "Improve your search engine rankings and drive organic traffic with our comprehensive SEO strategies.",
    benefits: [
      "Higher search engine rankings",
      "Increased organic traffic",
      "Improved website visibility",
    ],
    process: [
      "SEO audit & keyword research",
      "On-page & off-page optimization",
      "Performance analysis & reporting",
    ],
    color: "from-green-600 to-green-800",
  },
  {
    id: 6,
    title: "Web Development",
    slug: "web-development",
    desc: "Responsive, user-friendly websites that provide exceptional user experience and drive conversions.",
    benefits: [
      "Improved user experience",
      "Responsive design for all devices",
      "Higher conversion rates",
    ],
    process: [
      "Website planning & design",
      "Development & coding",
      "Launch & performance monitoring",
    ],
    color: "from-cyan-600 to-cyan-800",
  },
];


// Testimonials
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CMO, TechVision Inc.",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    quote: "Stratix Labs transformed our brand presence completely. Their strategic approach and creative execution resulted in a 40% increase in our market share within just 6 months. The team is innovative, responsive, and truly committed to our success.",
    rating: 5
  },
  {
    id: 2,
    name: "David Wilson",
    position: "CEO, GlobalRetail",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    quote: "Working with Stratix Labs has been game-changing for our business. Their digital marketing strategy tripled our online conversions while significantly reducing our cost per acquisition. I'm continually impressed by their data-driven approach and creative solutions.",
    rating: 5
  },
  {
    id: 3,
    name: "Jennifer Lee",
    position: "Marketing Director, InnovateCorp",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    quote: "The team at Stratix Labs doesn't just execute campaigns – they become true partners in your business growth. Their deep understanding of our industry and target audience has led to campaigns that consistently outperform our expectations.",
    rating: 5
  },
  {
    id: 4,
    name: "Michael Rodriguez",
    position: "Founder, StartupSuccess",
    image: "https://images.unsplash.com/photo-1507003211166-cf5d34a75b7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    quote: "Stratix Labs helped us build our brand from the ground up. They guided us through every stage, from brand identity to web development, and the results speak for themselves – we saw a 65% increase in revenue within the first year.",
    rating: 5
  }
];

// Company Stats
export const stats: Stat[] = [
  { id: 1, value: 10, label: "Years in Business", suffix: "+" },
  { id: 2, value: 150, label: "Successful Projects", suffix: "+" },
  { id: 3, value: 200, label: "Brands Served", suffix: "+" },
  { id: 4, value: 120, label: "Industry Awards", suffix: "+" }
];
