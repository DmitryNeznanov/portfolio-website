'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function DynamicLinks() {
  const pathName = usePathname()
  return (
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
  )
}
