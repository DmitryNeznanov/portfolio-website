"use client"
import Image from "next/image"

export default function ToggleSearch() {
  function toggleSearch() {
    const search = document.getElementById("search")
    search?.classList.toggle("hidden")
  }
  // function test(event) {
  //   if (event.key === "a") {
  //     event.preventDefault()
  //     const search = document.getElementById("search")
  //     search?.classList.toggle("hidden")
  //   }
  // }
  return (
    <>
      <button
        className="hidden w-screen max-w-[204px] mx-[64px] px-[12px] lg:flex flex-row items-center bg-white rounded-full hover:bg-black-light"
        onClick={toggleSearch}
      >
        <div className="">
          <Image
            src="/icon/icon-search.svg"
            width={20}
            height={20}
            alt="search"
          ></Image>
        </div>
        <p className="ml-[8px] p-ubuntu text-black capitalize">search...</p>
        <kbd className="ml-auto capitalize">ctrl k</kbd>
      </button>
      <div className="lg:hidden ml-[16px] lg:mx-[32px] md:mx-[64px] flex items-center">
        <button
          type="button"
          onClick={toggleSearch}
        >
          <Image
            src="/icon/icon-search-white.svg"
            width={20}
            height={20}
            alt="search"
          ></Image>
        </button>
      </div>
    </>
  )
}
