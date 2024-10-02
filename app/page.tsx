import Image from "next/image"
import Scroll from "./components/Scroll"

export default function Home() {
  return (
    <>
      <section className="py-[64px] xl:py-[128px] bg-[url('/about-bg.png')]">
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
              src="/about.png"
              width={462}
              height={630}
              alt="about"
            ></Image>
          </div>
        </div>
      </section>
    </>
  )
}
