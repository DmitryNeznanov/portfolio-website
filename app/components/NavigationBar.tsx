"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
export default function NavigationBar() {
  const [index, setIndex] = useState(1)
  function handleClick(i: number) {
    setIndex(i + 1)
  }
  return (
    <nav>
      <ul className="w-max px-[12px] py-[8px] flex flex-col gap-y-[24px] items-center bg-black border border-white rounded-full">
        {[
          ["icon/icon-grid-white.svg", "icon/icon-grid-black.svg", "/#"],
          ["icon/icon-user-white.svg", "icon/icon-user-black.svg", "/#about"],
          ["icon/icon-code-white.svg", "icon/icon-code-black.svg", "/#skills"],
          [
            "icon/icon-monitor-white.svg",
            "icon/icon-monitor-black.svg",
            "/#works",
          ],
          ["icon/icon-edit-white.svg", "icon/icon-edit-black.svg", "/#blogs"],
          ["icon/icon-mail-white.svg", "icon/icon-mail-black.svg", "/#contact"],
        ].map(([iconWhite, iconBlack, href], i) => {
          return (
            <li key={i}>
              <Link
                className={`block p-[8px] rounded-full ${
                  index === i + 1 ? "bg-white" : "bg-transparent"
                }`}
                href={href}
                onClick={() => {
                  handleClick(i)
                }}
              >
                <Image
                  src={`/${index === i + 1 ? iconBlack : iconWhite}`}
                  width={24}
                  height={24}
                  alt={index === i + 1 ? iconBlack : iconWhite}
                  
                ></Image>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
