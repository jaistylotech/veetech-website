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
  imageClassName = "w-full h-full object-cover",
}: {
  images: { src: string; alt: string }[];
  aspectRatio?: string;
  imageClassName?: string;
}) {
  const [api, setApi] = React.useState<any>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: false })
  );

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full group">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
          duration: 35,
        }}
        plugins={[plugin.current]}
        className="w-full relative overflow-hidden"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className={`flex items-center justify-center relative w-full overflow-hidden ${aspectRatio}`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className={imageClassName}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {images.length > 1 && (
          <>
            <CarouselPrevious className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex size-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-110 hover:bg-accent hover:text-navy-deep opacity-80 md:opacity-0 md:group-hover:opacity-100" />
            <CarouselNext className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex size-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-110 hover:bg-accent hover:text-navy-deep opacity-80 md:opacity-0 md:group-hover:opacity-100" />
          </>
        )}
      </Carousel>

      {/* Pagination Dot Indicators */}
      {count > 1 && (
        <div className="absolute bottom-3 inset-x-0 z-20 flex items-center justify-center gap-2 pointer-events-auto">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === current
                  ? "w-6 bg-accent"
                  : "w-2 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
