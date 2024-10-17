"use client"
import Image from "next/image"
// import Link from "next/link"
import { useState } from "react"
export default function SearchForm({ data }: { data: Post[] }) {
  const [filteredData, setFilteredData] = useState(data)
  const [searchValue, setSearchValue] = useState("")

  function handleSearchClick() {
    if (searchValue === "") {
      setFilteredData(data)
    }
    const filteredBySearch = data.filter((post) => {
      return (
        post._id.toLowerCase().includes(searchValue.toLowerCase()) ||
        post.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        post.body.toLowerCase().includes(searchValue.toLowerCase()) ||
        post.author.toLowerCase().includes(searchValue.toLowerCase()) ||
        post.date.toLowerCase().includes(searchValue.toLowerCase()) ||
        post.tags.indexOf(searchValue) >= 0
      )
    })
    setFilteredData(filteredBySearch)
    console.log(filteredData)
  }

  return (
    <>
      <form className="flex flex-row items-center">
        <div className="hidden max-w-[204px] lg:mx-[64px] lg:flex flex-row items-center bg-white rounded-full">
          <input
            className="max-w-[85%] py-[6px] px-[12px] p-mono text-black rounded-full outline-none"
            type="text"
            name="text"
            id="text"
            onChange={(e) => {
              setSearchValue(e.target.value)
            }}
            defaultValue={""}
            onClick={handleSearchClick}
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
      {/* <section className="flex flex-col gap-y-[64px] border-t border-white">
        {filteredData.map((post: Post) => {
          return (
            <article
              className="py-[32px] px-[14px] flex flex-col md:flex-row items-center md:items-start gap-y-[32px] md:gap-y-0 md:gap-x-[32px] border-b border-white"
              key={post._id}
            >
              <div className="">
                <Image
                  className="min-w-[120px] min-h-[120px]"
                  src={post.img.src}
                  width={120}
                  height={120}
                  alt={post.img.alt}
                ></Image>
              </div>
              <div>
                <h2 className="h2-ubuntu text-jade">{post.title}</h2>
                <p className="mt-[24px] p-ubuntu">{post.body}</p>
                <Link
                  className="group mt-[24px] block p-ubuntu text-jade"
                  href={`/blog/${JSON.parse(JSON.stringify(post._id))}`}
                >
                  <span className="group-hover:no-underline underline underline-offset-4 decoration-white">
                    Read More
                  </span>{" "}
                  &gt;&gt;
                </Link>
                <footer className="mt-[24px] flex flex-col md:flex-row gap-x-[8px] capitalize">
                  <div>
                    <p className="w-max px-[8px] py-[4px] label-ubuntu-light bg-grey rounded-full">
                      {post.tags[0]}
                    </p>
                  </div>
                  <div className="mt-[16px] md:mt-0 flex flex-row items-center gap-x-[8px]">
                    <p className="flex flex-row gap-x-[8px] label-ubuntu-medium text-[12px] md:text-[14px]">
                      text{" "}
                      <span className="label-ubuntu-light text-[12px] md:text-[14px]">
                        {post.author}
                      </span>
                    </p>
                    <p className="label-ubuntu-medium text-[12px] md:text-[14px]">
                      date{" "}
                      <time
                        className="label-ubuntu-light text-[12px] md:text-[14px]"
                        dateTime={new Date(post.date).toISOString()}
                      >
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </time>
                    </p>
                    <p className="label-ubuntu-medium text-[12px] md:text-[14px]">
                      read{" "}
                      <span className="label-ubuntu-light text-[12px] md:text-[14px]">
                        {post.read} min
                      </span>
                    </p>
                  </div>
                </footer>
              </div>
            </article>
          )
        })}
      </section> */}
    </>
  )
}
