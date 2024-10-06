"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Seacrh from "./Seacrh"

export default function Header() {
  const pathName = usePathname()
  return (
    <>
      <header className="container px-[24px] md:px-[32px] xl:px-[128px] py-[24px] xl:py-[64px]">
        <nav className="flex flex-row items-center justify-between">
          <div>
            <Link href="/">
              <Image
                className="max-w-[153px] max-h-[20px] md:max-w-[225px] sm:max-h-[32px] 2xl:max-w-297 2xl:max-h-42"
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
            <Seacrh />
            <ul className="hidden md:flex gap-x-[32px] items-center">
              {[
                [
                  "instagram",
                  "/icon-instagram.svg",
                  "https://www.instagram.com/",
                ],
                ["discord", "/icon-discord.svg", "https://discord.com/"],
                ["github", "/icon-github.svg", "https://github.com/"],
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
                        alt={src}
                        width={20}
                        height={20}
                      ></Image>
                      <span className="hidden 2xl:block">{text}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </nav>
      </header>
      <div className="container">
        <hr className="container h-[1px]  border border-grey" />
      </div>
    </>
  )
}
