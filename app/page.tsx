import Image from "next/image"
import Scroll from "./components/Scroll"
import { Metadata } from "next"
import WorksSlider from "./components/WorksSlider"
import Link from "next/link"
import db from "@/lib/mongodb"
import NavigationBar from "./components/NavigationBar"
import ContactForm from "./components/ContantForm"
export const metadata: Metadata = {
  title: "Web-portfolio",
  description: "This is a home page of Web-portfolio",
}
export default async function Home() {
  const posts = (await db
    .collection("posts")
    .find()
    .sort({ date: 1 })
    .toArray()) as Post[]
  const post = posts[0]
  return (
    <>
      {/* Hero */}
      <section
        className="py-[64px] xl:pb-[128px] bg-black-light"
        id="hero"
      >
        <div className="container">
          <div className="hidden lg:block fixed -ml-[66px]">
            <NavigationBar />
          </div>
          <h1 className="hidden xl:block mx-auto w-max big-header-ubuntu capitalize">
            developer
          </h1>
          <div className="3xl:flex 3xl:flex-row 3xl:items-center 3xl:gap-x-[128px]">
            <section className="w-max mx-auto 3xl:mx-0 xl:mt-[64px] px-[24px] py-[37px] bg-transparent border-[4px] border-white rounded-tl-[160px] rounded-br-[160px] shadow-xl">
              <article className="flex flex-col items-center text-center ">
                <div className="border-[3px] border-jade rounded-full">
                  <Image
                    src="/png/sinan.png"
                    width={96}
                    height={96}
                    alt="sinan.png"
                  ></Image>
                </div>
                <hgroup className="mt-[16px]">
                  <h4 className="logo-mono capitalize">sinan</h4>
                  <p className="code-mono">Full-stack developer</p>
                </hgroup>
              </article>
              <address className="mt-[32px] not-italic">
                <ul className="flex flex-col gap-y-[16px]">
                  {[
                    [
                      "icon/icon-mail.svg",
                      "abdurrahman_sinan@hotmail.com",
                      "mailto:abdurrahman_sinan@hotmail.com",
                    ],
                    ["icon/icon-map-pin.svg", "Turkey", ""],
                    ["icon/icon-briefcase.svg", "Full-time / Freelancer", ""],
                    [
                      "icon/icon-link.svg",
                      "www.sinantokmak.com",
                      "https://google.com",
                    ],
                  ].map(([src, content, link], i) => {
                    return (
                      <li
                        className="flex flex-row gap-x-[16px]"
                        key={i}
                      >
                        <Image
                          src={`/${src}`}
                          width={14}
                          height={14}
                          alt={src}
                        ></Image>
                        <Link
                          className={`${
                            link === ""
                              ? "pointer-events-none"
                              : "hover:underline"
                          } `}
                          href={link}
                          target="_blank"
                        >
                          <p className="code-mono">{content}</p>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </address>
              <ul className="mt-[16px] flex flex-row gap-x-[16px]">
                {[["html"], ["css"], ["js"], ["react"]].map(([text], i) => {
                  return (
                    <li
                      className="w-max px-[8px] uppercase bg-jade rounded-full"
                      key={i}
                    >
                      <p className="text-black code-mono">{text}</p>
                    </li>
                  )
                })}
              </ul>
              <a
                className="w-max mt-[32px] button-white flex flex-row items-center gap-x-[16px]"
                href="/cv/placeholder.cv"
                download={true}
              >
                Download CV
                <Image
                  src="/icon/icon-download.svg"
                  width={20}
                  height={20}
                  alt="icon-download.svg"
                ></Image>
              </a>
            </section>
            <div className="xl:mt-[64px] xl:flex xl:flex-row xl:mx-auto 3xl:mx-0 xl:w-max xl:gap-x-[15px] 2xl:gap-x-[73px]">
              <div className="flex flex-col">
                <article className="mt-[64px] xl:mt-0 flex flex-col gap-y-[32px]">
                  <div className="">
                    <div className="code-mono text-ice">{"<h2>"}</div>
                    <h3 className="pl-[16px] text-white h2-ubuntu lg:h1-ubuntu">
                      Hey<br></br>
                      i&apos;m <span className="text-jade">Sinan</span>,{" "}
                      <br></br>
                      Full-stack Developer
                    </h3>
                    <div className="code-mono text-ice">{"</h2>"}</div>
                  </div>
                  <div className="max-w-[700px]">
                    <div className="code-mono text-ice">{"<p>"}</div>
                    <p className="mt-[16px] pl-[16px] text-white p-mono">
                      I help business grow by crafting amazing web experiences.
                      If you’re looking for a developer that likes to get stuff
                      done,
                    </p>
                    <div className="mt-[16px] code-mono text-ice">{"</p>"}</div>
                  </div>
                </article>
                <a
                  className="w-max mt-[16px] pl-[24px] flex flex-row items-center gap-x-[16px] h2-mono text-jade capitalize hover:underline "
                  href="#contact"
                >
                  let’s talk
                  <div className="p-[8px] bg-grey rounded-full">
                    <Image
                      src="/icon/icon-mail.svg"
                      width={24}
                      height={24}
                      alt="icon-mail.svg"
                    ></Image>
                  </div>
                </a>
              </div>
              <section className="max-w-[215px] mx-auto xl:mx-0 xl:my-auto mt-[64px] px-[32px] py-[48px] flex flex-col gap-y-[48px] bg-black rounded-full">
                {[
                  ["4", "Programming Language"],
                  ["6", "development tools"],
                  ["8", "years of experience"],
                ].map(([number, text], i) => {
                  return (
                    <article
                      className="flex flex-row items-center gap-x-[16px] capitalize"
                      key={i}
                    >
                      <p className="number-mono text-jade">{number}</p>
                      <h5 className="p-mono text-white">{text}</h5>
                    </article>
                  )
                })}
              </section>
            </div>
          </div>
        </div>
      </section>
      {/* About  */}
      <section
        className="py-[64px] xl:py-[128px] bg-[url('/png/about-bg.png')]"
        id="about"
      >
        <Scroll />
        <div className="container xl:mt-[128px] flex flex-col 3xl:flex-row 3xl:justify-between">
          <div className="3xl:py-[37.5px] mx-auto max-w-max">
            <h2 className="max-w-max mx-auto md:mx-0 px-[40px] py-[16px] h2-ubuntu md:h1-ubuntu bg-black border-4 border-jade rounded-tl-[40px] rounded-br-[40px] ">
              About me
            </h2>
            <article className="mt-[32px] md:mt-[64px] max-w-[880px] p-[24px] bg-black-light rounded-[40px]">
              <div className="text-ice"> {`<p>`} </div>
              <h3 className="mt-[16px] logo-mono text-jade">Hello!</h3>
              <div className="mt-[5px] flex flex-col gap-y-[18px]">
                <p className="p-ubuntu">
                  My name is Sinan and I specialize in web developement that
                  utilizes
                  <em className="text-jade not-italic"> HTML</em>,
                  <em className="text-jade not-italic"> CSS</em>,
                  <em className="text-jade not-italic"> JS</em>, and
                  <em className="text-jade not-italic"> REACT</em> etc.
                </p>
                <p className="p-ubuntu">
                  I am a highly motivated individual and eternal optimist
                  dedicated to writing clear, concise, robust code that works.
                  Striving to never stop learning and improving.
                </p>
                <p className="p-ubuntu">
                  When I&apos;m not coding, I am
                  <em className="text-jade not-italic"> writing blogs</em>{" "}
                  reading, or picking up some new hands-on art project like
                  <em className="text-jade not-italic"> photography</em>.
                </p>
                <p className="p-ubuntu">
                  I like to have my perspective and belief systems challenged so
                  that I see the world through new eyes.
                </p>
              </div>
              <div className="mt-[16px] text-ice"> {`</p>`} </div>
            </article>
          </div>
          <div className="mt-[64px] xl:mt-[128px] 3xl:mt-0">
            <Image
              className="block mx-auto max-w-[272px] max-h-[364px] md:max-w-[462px] md:max-h-[556px] 2xl:max-h-full 2xl:h-full rounded-[16px]"
              src="/png/about.png"
              width={462}
              height={630}
              alt="about"
            ></Image>
          </div>
        </div>
      </section>
      {/* Skills */}
      <section
        className="py-[64px] xl:py-[128px] bg-[url('/png/skills-bg.png')]"
        id="skills"
      >
        <div className="hidden xl:block relative before:content-[url('/shape/close-tag.svg')] before:absolute before:top-0 before:mt-[20px] before:right-0 before:left-[63%]"></div>
        <Scroll />
        <div className="container xl:mt-[64px] ">
          <article className="max-w-[300px] md:max-w-full mx-auto flex flex-col items-center text-center">
            <h2 className="h1-ubuntu text-jade capitalize">skills</h2>
            <Image
              className="mt-[16px]"
              src="/shape/line.svg"
              width={250}
              height={12}
              alt="line"
            ></Image>
            <p className="mt-[16px] p-mono">
              I am striving to never stop learning and improving
            </p>
          </article>
          <section className="mx-auto max-w-[720px] mt-[64px] flex flex-col md:flex-row items-center justify-center xl:justify-between gap-[32px]">
            {[
              ["icon/icon-monitor.svg", "Web Development", "HTML·CSS·JS·REACT"],
              ["icon/icon-smartphone.svg", "App Development", "iOS·Android"],
            ].map(([src, title, text], i) => {
              return (
                <article
                  className={`max-w-max py-[16px] px-[24px] flex flex-col items-center bg-ice rounded-[8px] border-l-[8px] ${
                    i === 0 ? "border-blue-dark" : "border-blue"
                  }`}
                  key={i}
                >
                  <Image
                    src={`/${src}`}
                    width={32}
                    height={32}
                    alt={src}
                  ></Image>
                  <h4 className="mt-[8px] text-black menu-mono">{title}</h4>
                  <p className="mt-[8px] text-black p-mono">{text}</p>
                </article>
              )
            })}
          </section>
          <section className="max-w-[288px] md:max-w-[385px] xl:max-w-max mx-auto mt-[90px] flex flex-wrap  gap-y-[32px] gap-x-[64px] md:gap-x-[96px] xl:gap-x-[128px]">
            {[
              ["icon/html5.svg", "html", "red"],
              ["icon/css3-alt.svg", "css", "blue-dark"],
              ["icon/node-js.svg", "js", "orange"],
              ["icon/react.svg", "react", "blue"],
            ].map(([src, title, color], i) => {
              return (
                <article
                  className="max-w-max flex flex-col items-center"
                  key={i}
                >
                  <div
                    className={`p-[24px] md:p-[40px] max-w-max rounded-full bg-${color}`}
                  >
                    <Image
                      src={`/${src}`}
                      width={64}
                      height={64}
                      alt={src}
                    ></Image>
                  </div>
                  <h3 className={`mt-[24px] h2-mono uppercase text-${color}`}>
                    {title}
                  </h3>
                </article>
              )
            })}
          </section>
        </div>
      </section>
      {/* Works */}
      <section
        className="py-[64px] xl:py-[128px] bg-black"
        id="works"
      >
        <Scroll />
        <div className="container mt-[64px]">
          <article className="max-w-[300px] md:max-w-full mx-auto flex flex-col items-center text-center">
            <h2 className="h1-ubuntu text-jade capitalize">works</h2>
            <Image
              className="mt-[16px]"
              src="/shape/line.svg"
              width={250}
              height={12}
              alt="line"
            ></Image>
            <p className="mt-[16px] p-mono">
              I had the pleasure of working with these awesome projects
            </p>
          </article>
          <div className="mt-[84px]">
            <WorksSlider />
          </div>
        </div>
      </section>
      {/* Blogs */}
      <section
        className="py-[64px] xl:py-[128px]"
        id="blogs"
      >
        <Scroll />
        <div className="container mt-[64px]">
          <article className="max-w-[300px] md:max-w-full mx-auto flex flex-col items-center text-center">
            <h2 className="h1-ubuntu text-jade capitalize">blogs</h2>
            <Image
              className="mt-[16px]"
              src="/shape/line.svg"
              width={250}
              height={12}
              alt="line"
            ></Image>
            <p className="mt-[16px] p-mono">
              My thoughts on technology and business, welcome to subscribe
            </p>
          </article>
          <section className="max-w-[1052px] mx-auto mt-[64px] border-t border-white">
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
          </section>
          <div className="w-max mx-auto mt-[64px] flex flex-col md:flex-row items-center gap-x-[32px] gap-y-[32px]">
            <Link
              className="block button-jade"
              href="/blog"
            >
              View More
            </Link>
            <Link
              className="block button-transparent"
              href="/#contact"
            >
              Subscribe
            </Link>
          </div>
        </div>
      </section>
      {/* Contact  */}
      <section
        className="py-[64px] bg-black"
        id="contact"
      >
        <Scroll />
        <div className="container mt-[64px]">
          <article className="max-w-[300px] md:max-w-full mx-auto flex flex-col items-center text-center">
            <h2 className="h1-ubuntu text-jade capitalize">contact</h2>
            <Image
              className="mt-[16px]"
              src="/shape/line.svg"
              width={250}
              height={12}
              alt="line"
            ></Image>
            <p className="mt-[16px] p-mono">
              I’m currently available for freelance work
            </p>
          </article>
          <section>
            <h2
              className="mt-[64px] xl:mt-[102px] max-w-max mx-auto px-[40px] py-[16px] bg-transparent menu-mono md:logo-mono text-jade md:text-jade capitalize 
                        border-4 border-jade rounded-tl-[40px] rounded-br-[40px]"
            >
              send me a message
            </h2>
            <div className="max-w-[1120px] mt-[64px] mx-auto">
              <ContactForm />
            </div>
          </section>
        </div>
      </section>
    </>
  )
}
