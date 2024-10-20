"use client"
import Image from "next/image"
import Link from "next/link"
import { useLayoutEffect, useState } from "react"
export default function NavigationBar() {
  const [activeId, setActiveId] = useState("")

  function useScrollspy(ids: string[], offset: number = 0) {
    useLayoutEffect(() => {
      function listener() {
        const scroll = window.scrollY

        const position = ids
          .map((id) => {
            const element = document.getElementById(id)

            const rect = element!.getBoundingClientRect()
            const top = rect.top + scroll - offset
            const bottom = rect.bottom + scroll - offset

            return { id, top, bottom }
          })
          .find(({ top, bottom }) => scroll >= top && scroll <= bottom)

        setActiveId(position?.id || "hero")
      }

      listener()

      window.addEventListener("resize", listener)
      window.addEventListener("scroll", listener)

      return () => {
        window.removeEventListener("resize", listener)
        window.removeEventListener("scroll", listener)
      }
    }, [ids, offset])

    return activeId
  }
  const ids = ["hero", "about", "skills", "works", "blogs", "contact"]
  const activeLinkId = useScrollspy(ids, 10)
  return (
    <nav>
      <ul className="w-max px-[12px] py-[8px] flex flex-col gap-y-[24px] items-center bg-black border border-white rounded-full">
        {[
          ["icon/icon-grid-white.svg", "icon/icon-grid-black.svg", "/#hero"],
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
                  href.includes(activeLinkId) ? "bg-white" : "bg-transparent"
                }`}
                href={href}
              >
                <Image
                  src={`/${
                    href.includes(activeLinkId) ? iconBlack : iconWhite
                  }`}
                  width={24}
                  height={24}
                  alt={href.includes(activeLinkId) ? iconBlack : iconWhite}
                ></Image>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
