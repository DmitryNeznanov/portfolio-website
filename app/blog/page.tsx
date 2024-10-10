import db from "@/lib/mongodb"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

const Metadata: Metadata = {
  title: "Web-portfolio | Blog Page",
  description: "Blog page with posts",
}

export default async function Blog() {
  const posts = (await db
    .collection("posts")
    .find()
    .sort({ date: 1 })
    .toArray()) as Post[]
  return (
    <section className="container py-[64px] xl:pt-[128px] ">
      <article className="max-w-[300px] md:max-w-full mx-auto flex flex-col items-center text-center">
        <h2 className="h1-ubuntu text-jade capitalize">blogs</h2>
        <Image
          className="mt-[16px]"
          src="/line.svg"
          width={250}
          height={12}
          alt="line"
        ></Image>
        <p className="mt-[16px] p-mono">
          My thoughts on technology and business, welcome to subscribe
        </p>
      </article>
      <Link
        className="button-transparent mt-[64px] block w-max mx-auto"
        href="/#contact"
      >
        Subscribe My Blogs
      </Link>
      <section className="max-w-[1052px] mx-auto flex flex-col gap-y-[64px] mt-[64px] border-t border-white">
        {posts.map((post: Post) => {
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
      </section>
    </section>
  )
}
