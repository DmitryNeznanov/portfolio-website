"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathName = usePathname()
  return (
    <header className="px-[24px] md:px-[32px] xl:px-[128px] py-[24px] xl:py-[64px]">
      <nav className="flex flex-row items-center justify-between">
        <div>
          <Link href="/">
            <Image
              className="max-w-[153px] max-h-[20px] sm:max-w-[225px] sm:max-h-[32px] 2xl:max-w-297 2xl:max-h-42"
              src="/logo.svg"
              width={297}
              height={42}
              alt="logo"
            ></Image>
          </Link>
        </div>
        <div className="flex flex-row">
          <ul className="flex flex-row gap-x-[16px] md:gap-x-[32px]">
            {[
              ["home", "/"],
              ["blogs", "/blog"],
            ].map(([text, link], i) => {
              return (
                <li key={i}>
                  <Link
                    className={`${
                      pathName === link ? "text-jade" : ""
                    } capitalize menu-mono`}
                    href={link}
                  >
                    {text}
                  </Link>
                </li>
              )
            })}
          </ul>
          <search>
            <form
              className="flex flex-row items-center"
              action="#"
            >
              <div className="hidden max-w-[204px] lg:mx-[64px] lg:flex flex-row items-center bg-white rounded-full">
                <input
                  className="py-[6px] px-[12px] p-mono rounded-full outline-none"
                  type="search"
                  name="search"
                  id="search"
                />
                {/* <button className="w-full h-full ">
                  <Image
                    src="/icon-search.svg"
                    width={20}
                    height={20}
                    alt="search"
                  ></Image>
                </button> */}
              </div>
              <button className="lg:hidden ml-[16px] [@media(min-width:640px)]:mx-[32px] md:mx-[64px]">
                <Image
                  src="/icon-search-white.svg"
                  width={20}
                  height={20}
                  alt="search"
                ></Image>
              </button>
            </form>
          </search>
          <ul className="hidden [@media(min-width:640px)]:flex gap-x-[32px] items-center">
            {[
              [
                "instagram",
                "/icon-instagram.svg",
                "https://www.instagram.com/",
              ],
              ["discord", "/discord.svg", "https://discord.com/"],
              ["github", "/github.svg", "https://github.com/"],
            ].map(([text, src, link], i) => {
              return (
                <li key={i}>
                  <Link
                    className="flex gap-x-[8px] media-mono capitalize hover:underline "
                    href={link}
                    target="_blank"
                  >
                    <Image
                      className="inline"
                      src={src}
                      alt={text}
                      width={20}
                      height={20}
                    ></Image>
                    <span className="hidden [@media(min-width:1400px)]:block">
                      {text}
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
      <hr className="h-[1px] mt-[24px] xl:mt-[64px] border border-grey" />
    </header>
  )
}
