import { BackgroundGlow } from "@/components/core/background-glow";
import { BackgroundLayer } from "@/components/core/background-layer/background-layer";
import { Navbar } from "@/components/core/navbar/navbar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <div className="bg-secondary relative isolate h-full min-h-screen transition-colors duration-500">
      <BackgroundGlow />
      <BackgroundLayer />
      <Navbar />
      <div className="flex-center">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <div>Hello</div>
            </CarouselItem>
            <CarouselItem>
              <div>Two</div>
            </CarouselItem>{" "}
            <CarouselItem>
              <div>Three</div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
