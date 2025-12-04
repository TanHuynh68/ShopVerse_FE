"use client";
import { ImageZoom } from "@/components/ui/shadcn-io/image-zoom";

interface ImagePreviewProps {
  img: string;
  alt: string;  
  className?: string;
}
const ImagePreview = ({ img, alt, className }: ImagePreviewProps) => {
  console.log("img: ", img);
  return (
    <ImageZoom className={`flex justify-center`}>
      <img
        className={!className ?`h-auto w-36`: `h-auto`}
        src={img}
        alt={alt}
        //   unoptimized
        width={1200}
      />
    </ImageZoom>
  );
};
export default ImagePreview;
