import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const BeforeAfter = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* First Before Image */}
      <div className="relative rounded-lg overflow-hidden group">
        <AspectRatio ratio={3 / 2} className="bg-muted">
          <Image
            src="/before.png"
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

      {/* First After Image */}
      <div className="relative rounded-lg overflow-hidden group">
        <AspectRatio ratio={3 / 2} className="bg-muted">
          <Image
            src="/after.webp"
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

      {/* Second Before Image */}
      <div className="relative rounded-lg overflow-hidden group">
        <AspectRatio ratio={3 / 2} className="bg-muted">
          <Image
            src="/afters.png"
            alt="Car interior before detailing"
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

      {/* Second After Image */}
      <div className="relative rounded-lg overflow-hidden group">
        <AspectRatio ratio={3 / 2} className="bg-muted">
          <Image
            src="/befores.png"
            alt="Car interior after detailing"
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
