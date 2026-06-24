"use client";

import { useState } from "react";
import Image from "next/image";

interface PropertyImage {
  id: string;
  url: string;
}

interface Props {
  images: PropertyImage[];
  title: string;
}

export default function PropertyGallery({
  images,
  title,
}: Props) {
  const [selectedImage, setSelectedImage] =
    useState(images[0]);

  return (
    <div className="mb-8">
      <Image
        src={selectedImage.url}
        alt={title}
        width={1200}
        height={700}
        className="rounded-xl w-full h-[450px] object-cover"
      />

      {images.length > 1 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {images.map((image) => (
            <button
              key={image.id}
              type="button"
              onClick={() =>
                setSelectedImage(image)
              }
            >
              <Image
                src={image.url}
                alt={title}
                width={300}
                height={200}
                className="rounded-lg h-32 w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}