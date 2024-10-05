"use client"
import Image from "next/image"
export default function WorksSlider() {
  return (
    <div className="">
      {[
        ["slider-image.png"],
        ["slider-image.png"],
        ["slider-image.png"],
        ["slider-image.png"],
        ["slider-image.png"],
      ].map(([src], i) => {
        return (
          <div
            className="inline-block"
            key={i}
          >
            <Image
              src={`/${src}`}
              width={574}
              height={350}
              alt=""
            ></Image>
          </div>
        )
      })}
    </div>
  )
}
