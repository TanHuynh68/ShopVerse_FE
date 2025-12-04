"use client";
import { ImageZoom } from "@/components/ui/shadcn-io/image-zoom";

interface ImagePreviewProps {
  img: string;
}
const ImagePreview = ({ img }: ImagePreviewProps) => {
  console.log("img: ", img);
  return (
    <ImageZoom className="flex justify-center">
      <img
        alt="Placeholder image"
        className="h-auto w-36"
        src={
          "https://down-bs-vn.img.susercontent.com/f8288c425d9891c4b3b92a7fc37e52e7_tn.webp"
        }
        //   unoptimized
        width={1200}
      />
    </ImageZoom>
  );
};
export default ImagePreview;
