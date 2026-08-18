import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function ImageSlider({
  images,
  aspectRatio = "aspect-video",
}: {
  images: { src: string; alt: string }[];
  aspectRatio?: string;
}) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  if (!images || images.length === 0) return null;

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[plugin.current]}
      className="w-full relative group"
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className={`flex items-center justify-center relative w-full bg-surface-dark ${aspectRatio}`}>
              <img
                src={image.src}
                alt={image.alt}
                className="max-h-[80vh] w-full h-full object-contain p-4"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {images.length > 1 && (
        <>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100 bg-background/50 hover:bg-background/80 text-foreground border-none" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100 bg-background/50 hover:bg-background/80 text-foreground border-none" />
        </>
      )}
    </Carousel>
  );
}
