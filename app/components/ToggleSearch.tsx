"use client"
import Image from "next/image"
import { useLayoutEffect } from "react"

export default function ToggleSearch() {
  function toggleSearch() {
    const search = document.getElementById("search")
    const searchInput = document.getElementById("searchInput")
    search?.classList.toggle("hidden")
    document.body.classList.toggle("overflow-hidden")
    searchInput?.focus()
  }

  useLayoutEffect(() => {
    document.addEventListener("keydown", function (event) {
      if (event.key === "a") {
        event.preventDefault()
        toggleSearch()
      }
    })
  })
  return (
    <>
      <button
        className="hidden w-screen max-w-[204px] mx-[64px] px-[12px] lg:flex flex-row items-center bg-white rounded-full hover:bg-[rgb(224_224_224)] "
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
        <kbd className="ml-auto capitalize text-black  font-[600]">ctrl k</kbd>
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
