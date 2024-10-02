import Image from "next/image"
import Link from "next/link"
export default function Footer() {
  return (
    <footer>
      <hr className="h-[1px] border border-grey" />
      <div className="container pb-[32px] pt-[24px] xl:py-[16px] flex flex-col 2xl:flex-row 2xl:justify-between items-center gap-y-[24px]">
        <ul className="flex flex-row gap-x-[32px] xl:order-3">
          {[
            ["icon-instagram-black.svg", "https://www.instagram.com/"],
            ["icon-discord-black.svg", "https://discord.com/"],
            ["icon-github-black.svg", "https://discord.com/"],
          ].map(([src, link], i) => {
            return (
              <li key={i}>
                <Link
                  className="w-[32px] h-[32px] flex items-center bg-ice rounded-full"
                  href={link}
                  target="_blank"
                >
                  <Image
                    className="block mx-auto"
                    src={src}
                    alt={src}
                    key={i}
                    width={16}
                    height={16}
                  ></Image>
                </Link>
              </li>
            )
          })}
        </ul>
        <div className="flex flex-col xl:flex-row gap-y-[24px] gap-x-[64px] items-center">
          <p className="text-center xl:order-1">
            © 2023 SinanTokmak. All rights reserved.
          </p>
          <ul className="flex flex-row gap-x-[32px] xl:order-2 xl:contents">
            {[["privacy policy"], ["terms & condition"]].map((text, i) => {
              return (
                <li key={i}>
                  <Link
                    className="capitalize hover:underline"
                    href="#"
                    target="_blank"
                  >
                    {text}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <p className="xl:order-4">
          Design By{" "}
          <Link
            className="text-jade underline"
            href="https://google.com"
            target="_blank"
          >
            JohanLeon
          </Link>
        </p>
      </div>
    </footer>
  )
}
