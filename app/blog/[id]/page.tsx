import db from "@/lib/mongodb"
import { ObjectId } from "mongodb"
import Image from "next/image"
import Link from "next/link"
import { Suspense } from "react"
export async function generateStaticParams() {
  const posts = (await db.collection("post").find({}).toArray()) as Post[]

  return posts.map((post: Post) => ({
    _id: post._id,
  }))
}
export default async function Post({ params }: { params: { id: string } }) {
  const hexedString = ObjectId.createFromHexString(params.id)
  const post = (await db
    .collection("posts")
    .findOne({ _id: hexedString })) as Post
  const posts = (await db.collection("posts").find().toArray()) as Post[]

  return (
    <section className="container">
      <Suspense
        fallback={<h2 className="h1-ubuntu text-jade">Posts is loading...</h2>}
      >
        <div className="px-[24px] xl:px-[135px] 3xl:px-[420px]">
          <section className="py-[64px] xl:pt-[128px]">
            <h2 className="h2-ubuntu text-jade">{post.title}</h2>
            <div className="mt-[32px] p-[15px] md:p-[24px] flex flex-row items-center gap-x-[24px] border-b border-t border-grey capitalize">
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
              <Link
                className="hidden md:block p-[8px] ml-auto bg-ice rounded-full"
                href={`/pdf/placeholder.pdf`}
                download={true}
              >
                <Image
                  src="/icon/icon-share.svg"
                  width={16}
                  height={16}
                  alt="icon-share.svg"
                ></Image>
              </Link>
            </div>
            <div className="mt-[32px]">
              <Image
                className="w-screen max-h-[300px] md:max-h-[400px]"
                src={post.img.src}
                width={720}
                height={400}
                alt={post.img.alt}
                priority={true}
              ></Image>
            </div>
            <div className="mt-[32px] flex flex-col gap-y-[50px]">
              <p className="">{post.body}</p>
              <h4 className="article-ubuntu text-jade">
                Frontend Development:
              </h4>
              <p className="article-ubuntu text-white">
                Frontend development focuses on the user-facing aspects of a
                website. It involves creating the visual elements that users
                interact with directly. Frontend developers use a combination of
                languages such as HTML, CSS, and JavaScript to build and style
                the layout, design, and interactivity of the website. They need
                to have a strong understanding of user experience (UX) and user
                interface (UI) design to ensure that the website is both
                aesthetically pleasing and user-friendly.
              </p>
              <h4 className="article-ubuntu text-jade">Backend Development:</h4>
              <p className="article-ubuntu text-white">
                Backend development involves the behind-the-scenes functionality
                of a website. It includes server-side scripting, databases, and
                the logic that operates behind the scenes to ensure that the
                frontend works smoothly. Backend developers work with
                programming languages such as Ruby, Python, PHP, and Java, and
                frameworks such as Node.js, Django, and Laravel. They are
                responsible for building and maintaining the server,
                application, and database that power the website.
              </p>
              <h4 className="article-ubuntu text-jade">
                DevOps (Development and Operations):
              </h4>
              <p className="article-ubuntu text-white">
                DevOps is a set of practices that combines software development
                (Dev) and IT operations (Ops). DevOps professionals work to
                shorten the systems development life cycle and provide
                continuous delivery with high software quality. They utilize
                various tools to automate the software development process,
                including coding, building, testing, and deployment. DevOps
                engineers often work closely with both frontend and backend
                developers to ensure a smooth and efficient development and
                deployment process.{" "}
              </p>
              <h4 className="article-ubuntu text-jade">Design: </h4>
              <p className="article-ubuntu text-white">
                Design is a crucial aspect of web development that focuses on
                creating visually appealing and intuitive interfaces. Web
                designers use their creative skills to develop the overall look
                and feel of a website. They work with graphic design tools and
                software to create layouts, color schemes, typography, and other
                visual elements that contribute to the overall user experience.
                Good design is essential for attracting and retaining users on a
                website.{" "}
              </p>
              <p className="article-ubuntu text-white">
                Understanding and mastering these four key areas of web
                development can open up numerous career opportunities in the
                ever-evolving field of technology. It is important for web
                developers to stay updated with the latest trends and
                technologies and continuously enhance their skills to build
                innovative and high-quality websites that meet the needs of
                modern users.
              </p>
            </div>
            <ul className="mt-[32px] flex flex-wrap md:flex-row gap-x-[24px] gap-y-[24px]">
              {post.tags.map((tag, i) => {
                return (
                  <li
                    className="w-max px-[8px] py-[4px] text-[12px] label-ubuntu-light md:text-[14px]  bg-grey rounded-full"
                    key={i}
                  >
                    {tag}
                  </li>
                )
              })}
            </ul>
            <div className="mt-[32px] p-[15px] md:p-[24px] flex flex-row items-center gap-x-[24px] border-b border-t border-grey capitalize">
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
              <Link
                className="hidden md:block p-[8px] ml-auto bg-ice rounded-full"
                href={`/pdf/placeholder.pdf`}
                download={true}
              >
                <Image
                  src="/icon/icon-share.svg"
                  width={16}
                  height={16}
                  alt="icon-share.svg"
                ></Image>
              </Link>
            </div>
            <Link
              className="button-transparent w-max mx-auto mt-[32px] block"
              href="/#contant"
            >
              Subscribe My Blogs
            </Link>
          </section>
          <section className="py-[64px] xl:pt-[128px]">
            <h2 className="text-center h2-ubuntu text-jade md:h1-ubuntu md:text-jade capitalize">
              You might also like
            </h2>
            <section className="mx-auto flex flex-col gap-y-[64px] max-w-[1052px] mt-[64px] border-t border-white">
              {posts.map((post: Post) => {
                return (
                  <article
                    className={`py-[32px] px-[14px] flex flex-col md:flex-row items-center md:items-start gap-y-[32px] md:gap-y-0 md:gap-x-[32px] border-b border-white ${
                      params.id === post._id.toString() ? "hidden" : "flex"
                    }`}
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
        </div>
      </Suspense>
    </section>
  )
}
