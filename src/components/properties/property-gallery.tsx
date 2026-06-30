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
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="mb-12">

      {/* Main Image */}
      <div className="overflow-hidden rounded-3xl shadow-2xl border border-gray-200 bg-white">
        <Image
          src={selectedImage.url}
          alt={title}
          width={1400}
          height={800}
          priority
          className="h-[260px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[400px] lg:h-[600px]"
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-5">
          {images.map((image) => {
            const active = selectedImage.id === image.id;

            return (
              <button
                key={image.id}
                type="button"
                onClick={() => setSelectedImage(image)}
                className={`overflow-hidden rounded-2xl border-4 transition-all duration-300 ${
                  active
                    ? "border-green-600 shadow-lg"
                    : "border-transparent hover:border-green-300"
                }`}
              >
                <Image
                  src={image.url}
                  alt={title}
                  width={300}
                  height={220}
                  className="h-24 w-full object-cover transition duration-500 hover:scale-110 sm:h-28 lg:h-32"
                />
              </button>
            );
          })}
        </div>
      )}

    </div>
  );
}