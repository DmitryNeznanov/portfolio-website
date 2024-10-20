"use client"
import Image from "next/image"
import Link from "next/link"
import { Suspense, useState } from "react"
export default function SearchForm({ data }: { data: Post[] }) {
  const [filteredData, setFilteredData] = useState(data)
  const [searchValue, setSearchValue] = useState("")

  function toggleSearch() {
    const search = document.getElementById("search")
    const searchInput = document.getElementById("searchInput")
    search?.classList.toggle("hidden")
    document.body.classList.toggle("overflow-hidden")
    searchInput?.focus()
  }

  function handleSearchClick() {
    if (
      searchValue == "" ||
      filteredData.length == 0 ||
      searchValue == undefined ||
      searchValue == null
    ) {
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
      <div className="py-[64px] absolute top-0 right-0 bottom-0 left-0 z-[99999] bg-[#0000005c] overflow-hidden">
        <div className="container">
          <div className="flex flex-row items-center justify-between">
            <div className="w-[90%] bg-[#282828] rounded-full p-[16px] ">
              <input
                className="input-primary w-full"
                type="text"
                placeholder="Type ur text"
                id="searchInput"
                onChange={(e) => {
                  setSearchValue(e.target.value)
                  handleSearchClick()
                }}
                autoComplete="off"
              />
            </div>
            <div className="">
              <button
                className="bg-[#282828] rounded-full p-[16px]"
                type="button"
                onClick={toggleSearch}
              >
                <svg
                  className="fill-white"
                  height="32px"
                  width="32px"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 490 490"
                >
                  <polygon
                    points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 
	489.292,457.678 277.331,245.004 489.292,32.337 "
                  />
                </svg>
              </button>
            </div>
          </div>
          <section className="mt-[64px] lg:mt-[128px] px-[16px] py-[32px] bg-[#282828] rounded-[32px] overflow-x-auto max-h-[70vh] overflow-scroll h-full">
            <div
              className={`flex flex-col gap-y-[32px] md:gap-y-[64px] ${
                filteredData.length === 0 ? "" : "first:border-t"
              }`}
            >
              <Suspense
                fallback={
                  <h2 className="h1-ubuntu text-jade">Posts is loading...</h2>
                }
              >
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
                                {new Date(post.date).toLocaleDateString(
                                  "en-US",
                                  {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                  }
                                )}
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
              </Suspense>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
{
  /* <div className="hidden max-w-[204px] lg:mx-[64px] lg:flex flex-row items-center bg-white rounded-full">
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
</div> */
}
