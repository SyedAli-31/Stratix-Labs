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
    { name: "Case Studies", href: "/case-studies" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" }
  ];
  
  // Services
  export const services: Service[] = [
    {
      id: 1,
      slug: "web-development",
      title: "Web Development",
      description: "Modern websites that perform beautifully.",
      color: "from-purple-500 to-blue-500",
    },
    {
      id: 2,
      slug: "brand-strategy",
      title: "Brand Strategy",
      description: "Position your brand for long-term success.",
      color: "from-yellow-500 to-red-500",
    },
    {
      id: 3,
      slug:"content-creation",
      title: "Content Creation",
      description: "High-quality, engaging content that tells your brand story and connects with your audience on an emotional level.",
      color: "from-blue-600 to-blue-800"
    },
    {
      id: 4,
      slug:"social-media",
      title: "Social Media Management",
      description: "Strategic social media presence that builds community, increases engagement, and drives brand awareness.",
       
      color: "from-pink-600 to-pink-800"
    },
    {
      id: 5,
      slug:"seo-optimization",
      title: "SEO Optimization",
      description: "Improve your search engine rankings and drive organic traffic with our comprehensive SEO strategies.",
       
      color: "from-green-600 to-green-800"
    },
    {
      id: 6,
      slug:"web-development",
      title: "Web Development",
      description: "Responsive, user-friendly websites that provide exceptional user experience and drive conversions.",
      
      color: "from-cyan-600 to-cyan-800"
    }
  ];
  
  // Case studies
  export const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: "Global Rebrand for Tech Innovator",
      category: "branding",
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Complete brand overhaul for a leading tech company, resulting in 40% increased brand recognition.",
      results: ["40% increased brand recognition", "52% boost in user engagement", "2.5x ROI on marketing spend"]
    },
    {
      id: 2,
      title: "E-commerce Sales Strategy",
      category: "digital",
      image: "https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Comprehensive digital strategy that tripled online sales for a luxury retail brand.",
      results: ["215% increase in online sales", "68% reduction in cost per acquisition", "3.2x increase in email subscribers"]
    },
    {
      id: 3,
      title: "Product Launch Campaign",
      category: "campaign",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Multi-channel campaign for a new product launch that surpassed sales projections by 87%.",
      results: ["87% above sales projections", "12M social media impressions", "Featured in 5 major industry publications"]
    },
    {
      id: 4,
      title: "Social Media Growth Strategy",
      category: "social",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Organic and paid social strategy that doubled follower count and engagement in 6 months.",
      results: ["103% increase in followers", "185% increase in engagement", "45% boost in website traffic from social channels"]
    },
    {
      id: 5,
      title: "SEO Performance Optimization",
      category: "digital",
      image: "https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Technical SEO and content strategy that increased organic traffic by 215% in 8 months.",
      results: ["215% increase in organic traffic", "Top 3 positions for 65 target keywords", "127% increase in lead generation"]
    },
    {
      id: 6,
      title: "Luxury Brand Identity Design",
      category: "branding",
      image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Comprehensive identity design for a premium brand, establishing market presence in a competitive niche.",
      results: ["Successful market entry with 28% recognition", "52% price premium compared to competitors", "Featured in leading design publications"]
    }
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
  