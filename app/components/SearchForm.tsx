"use client"
import Image from "next/image"
import { usePathname, useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"
export default function SearchForm({ data }: { data: Post[] }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathName = usePathname()
  const params = new URLSearchParams(searchParams.toString())

  function handleSearch(term: string) {
    if (term) {
      params.set("search", term)
    } else {
      params.delete("search")
    }
    router.replace(`${pathName}?${params.toString()}`)
  }

  return (
    <form className="flex flex-row items-center">
      <div className="hidden max-w-[204px] lg:mx-[64px] lg:flex flex-row items-center bg-white rounded-full">
        <input
          className="max-w-[85%] py-[6px] px-[12px] p-mono text-black rounded-full outline-none"
          type="search"
          name="search"
          id="search"
          onChange={(e) => {
            handleSearch(e.target.value)
          }}
          defaultValue={searchParams.get("query")?.toString()}
        />
        <button
          className="w-full max-w-[15%]"
          id="showDialogBtn"
        >
          <Image
            src="/icon/icon-search.svg"
            width={20}
            height={20}
            alt="search"
          ></Image>
        </button>
      </div>
      <div className="lg:hidden ml-[16px] lg:mx-[32px] md:mx-[64px] flex items-center">
        <Image
          src="/icon/icon-search-white.svg"
          width={20}
          height={20}
          alt="search"
        ></Image>
      </div>
    </form>
  )
}
