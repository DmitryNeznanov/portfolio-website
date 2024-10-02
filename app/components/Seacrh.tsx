"use client"
import Image from "next/image"

export default function Seacrh() {
  return (
    <search className="flex items-center">
      <form
        className="flex flex-row items-center"
        action="#"
      >
        <div className="hidden max-w-[204px] lg:mx-[64px] lg:flex flex-row items-center bg-white rounded-full">
          <input
            className="max-w-[85%] py-[6px] px-[12px] p-mono text-black rounded-full outline-none"
            type="search"
            name="search"
            id="search"
          />
          <button
            className="w-full max-w-[15%]"
            id="showDialogBtn"
          >
            <Image
              src="/icon-search.svg"
              width={20}
              height={20}
              alt="search"
            ></Image>
          </button>
        </div>
        <div className="lg:hidden ml-[16px] lg:mx-[32px] md:mx-[64px] flex items-center">
          <Image
            src="/icon-search-white.svg"
            width={20}
            height={20}
            alt="search"
          ></Image>
        </div>
      </form>
    </search>
  )
}
