import Autoplay from "embla-carousel-autoplay";
import { CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function HomeCarousel() {
  const images = [
    "https://cf.shopee.vn/file/vn-50009109-727a24a85a60935da5ccb9008298f681",
    "https://cf.shopee.vn/file/vn-11134258-820l4-mexm1ap7m29u71",
    "https://cf.shopee.vn/file/vn-11134258-820l4-mexp6hc2g54w75",
  ];
  return (
    <Carousel
      className="w-full "
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    >
      <CarouselContent>
        {images.map((img, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <CardContent className="flex p-0 items-center justify-center">
                <img src={img} alt="ảnh" />
              </CardContent>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
