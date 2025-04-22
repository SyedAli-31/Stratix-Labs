import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const BeforeAfter = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Before Image Section */}
      <div className="relative rounded-lg overflow-hidden group">
        <AspectRatio ratio={3 / 2} className="bg-muted">
          <Image
            src="https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?auto=format&fit=crop&w=600&h=400&q=80"
            alt="Dirty air duct before cleaning"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </AspectRatio>
        <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm text-white px-4 py-2 rounded-md">
          Before
        </div>
      </div>

      {/* After Image Section */}
      <div className="relative rounded-lg overflow-hidden group">
        <AspectRatio ratio={3 / 2} className="bg-muted">
          <Image
            src="https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?auto=format&fit=crop&w=600&h=400&q=80"
            alt="Clean air duct after professional service"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </AspectRatio>
        <div className="absolute top-4 left-4 bg-[hsl(var(--duct-primary))]/80 backdrop-blur-sm text-white px-4 py-2 rounded-md">
          After
        </div>
      </div>
    </div>
  );
};

export default BeforeAfter;
