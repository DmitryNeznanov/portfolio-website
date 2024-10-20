import Image from "next/image"
import Link from "next/link"
import Seacrh from "./Search"
import DynamicLinks from "./DynamicLinks"
import ToggleSearch from "./ToggleSearch"

export default function Header() {
  return (
    <>
      <header className="container px-[24px] md:px-[32px] xl:px-[128px] py-[24px] xl:py-[64px]">
        <Seacrh />
        <nav className="flex flex-row items-center justify-between">
          <div>
            <Link href="/">
              <Image
                className="max-w-[153px] max-h-[20px] md:max-w-[225px] sm:max-h-[32px] 2xl:max-w-297 2xl:max-h-42"
                src="/icon/logo.svg"
                width={297}
                height={42}
                alt="logo"
              ></Image>
            </Link>
          </div>
          <div className="flex flex-row">
            <DynamicLinks />
            <ToggleSearch />
            <ul className="hidden md:flex gap-x-[32px] items-center">
              {[
                [
                  "instagram",
                  "icon/icon-instagram.svg",
                  "https://www.instagram.com/",
                ],
                ["discord", "icon/icon-discord.svg", "https://discord.com/"],
                ["github", "icon/icon-github.svg", "https://github.com/"],
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
                        src={`/${src}`}
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
