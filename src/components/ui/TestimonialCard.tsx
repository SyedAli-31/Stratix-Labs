import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  position: string;
  image: string;
  quote: string;
  rating: number;
}

const TestimonialCard = ({
  name,
  position,
  image,
  quote,
  rating,
}: TestimonialCardProps) => {
  return (
    <div className="flex justify-center p-2 sm:p-3 md:p-4">
      <Card className="bg-gradient-to-br from-blue-400 to-blue-500 backdrop-blur-sm border border-blue-600/20 shadow-xl w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl p-4 sm:p-5 md:p-6 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:border-blue-500/40">

        {/* Header with Avatar and Name */}
        <div className="flex items-center mb-4 sm:mb-5 md:mb-6">
          <div className="relative">
            <Image
              src={image}
              alt={`${name} profile picture`}
              width={56}
              height={56}
              className="rounded-full border-3 border-white/30 object-cover w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 shadow-lg"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/default-avatar.png'; // fallback image
              }}
            />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-green-400 rounded-full border-2 border-white" />
          </div>

          <div className="ml-3 sm:ml-4 flex-1 min-w-0">
            <h3 className="font-bold text-white text-sm sm:text-base md:text-lg truncate">
              {name}
            </h3>
            <p className="text-blue-100 text-xs sm:text-sm md:text-base font-medium truncate">
              {position}
            </p>
          </div>
        </div>

        {/* Rating Stars */}
        <div className="flex text-amber-400 mb-3 sm:mb-4 md:mb-5 justify-start">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 drop-shadow-sm"
              fill={i < rating ? "currentColor" : "none"}
              stroke={i < rating ? "currentColor" : "currentColor"}
            />
          ))}
          <span className="ml-2 text-white/80 text-xs sm:text-sm font-medium">
            ({rating}/5)
          </span>
        </div>

        {/* Quote */}
        <div className="relative">
          <div className="absolute -top-2 -left-1 text-white/20 text-4xl sm:text-5xl md:text-6xl font-serif leading-none">
            &quot;
          </div>
          <p className="text-white/95 italic text-sm sm:text-base md:text-lg leading-relaxed pl-4 sm:pl-6 font-medium">
            {quote}
          </p>
          <div className="absolute -bottom-4 right-0 text-white/20 text-4xl sm:text-5xl md:text-6xl font-serif leading-none">
            &quot;
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-xl" />
        <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/5 rounded-full blur-lg" />
      </Card>
    </div>
  );
};

export default TestimonialCard;
