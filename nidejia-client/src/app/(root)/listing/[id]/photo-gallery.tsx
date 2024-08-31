import { Button } from "@/components/atomics/button";
import Image from "next/image";
import React from "react";

function PhotoGallery({ photos } : {photos: string[] }) {
  return (
    <div className="mt-[30px] grid grid-cols-3 xl:grid-cols-4 gap-x-5">
      <div className="col-span-2 xl:col-span-3 relative">
        <Image
          src={`${process.env.NEXT_PUBLIC_STORAGE_BASE_URL}/${photos[0]}`}
          alt="image-1"
          height={0}
          width={0}
          className="w-full h-[520px] rounded-[30px] object-cover"
          unoptimized
        />

        <div className="absolute bottom-[30px] right-[30px]">
          <Button className="flex" variant="third">
            <Image
              src="/icons/direct-right.svg"
              alt="direct-right"
              height={24}
              width={24}
              className="mr-2.5"
            />
            Start Virtual Tour
          </Button>
        </div>
      </div>
      {photos.length > 1 && (
        <div className="space-y-5">
          {photos?.[1] && (
            <Image
              src={`${process.env.NEXT_PUBLIC_STORAGE_BASE_URL}/${photos[1]}`}
              alt="image-2"
              height={0}
              width={0}
              className="w-full h-[160px] rounded-[20px] object-cover"
              unoptimized
            />
          )}
          {photos?.[2] && (
            <Image
              src={`${process.env.NEXT_PUBLIC_STORAGE_BASE_URL}/${photos[2]}`}
              alt="image-3"
              height={0}
              width={0}
              className="w-full h-[160px] rounded-[20px] object-cover"
              unoptimized
            />
          )}
          {photos?.[3] && (
            <Image
              src={`${process.env.NEXT_PUBLIC_STORAGE_BASE_URL}/${photos[3]}`}
              alt="image-4"
              height={0}
              width={0}
              className="w-full h-[160px] rounded-[20px] object-cover"
              unoptimized
            />
          )}
      </div>
      )}
    </div>
  );
}

export default PhotoGallery;
