"use client"
import Image from "next/image"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
export default function WorksSlider() {
  return (
    <Swiper
      className="container max-w-[250px] md:max-w-[430px] xl:max-w-[570px]"
      navigation={true}
      pagination={{ clickable: true }}
      spaceBetween={150}
      modules={[Navigation, Pagination]}
    >
      {[
        ["slider-image.png"],
        ["slider-image.png"],
        ["slider-image.png"],
        ["slider-image.png"],
        ["slider-image.png"],
      ].map(([src], i) => {
        return (
          <SwiperSlide
            className="inline-block"
            key={i}
          >
            <Image
              src={`/${src}`}
              width={570}
              height={350}
              alt=""
            ></Image>
          </SwiperSlide>
        )
      })}
    </Swiper>
    // <>
    //   <div
    //     className="w-[575px] mx-auto overflow-hidden"
    //     id="slider"
    //   >
    //     <div className="w-[200vw]">
    //       <div
    //         className={`flex flex-row overflow-hidden translate-x-[${
    //           slide + 100
    //         }px]`}
    //       >
    // {[
    //   ["slider-image.png"],
    //   ["slider-image.png"],
    //   ["slider-image.png"],
    //   ["slider-image.png"],
    //   ["slider-image.png"],
    // ].map(([src], i) => {
    //   return (
    //     <div
    //       className="inline-block"
    //       key={i}
    //     >
    //       <Image
    //         src={`/${src}`}
    //         width={575}
    //         height={350}
    //         alt=""
    //       ></Image>
    //     </div>
    //   )
    // })}
    //       </div>
    //     </div>
    //   </div>
    // </>
  )
}
