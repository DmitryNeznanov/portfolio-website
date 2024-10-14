"use client"
import Image from "next/image"
import { useFormState, useFormStatus } from "react-dom"
import sendMessage from "../actions/sendMessage"

export default function ContactForm() {
  const [state, action] = useFormState(sendMessage, undefined)
  const { pending } = useFormStatus()
  return (
    <form action={action}>
      <div className="flex flex-row gap-x-[24px] md:gap-x-[64px] xl:gap-x-[126px]">
        <div className="flex w-[50%] flex-col">
          <label
            className="p-ubuntu text-jade"
            htmlFor="name"
          >
            Your name *
          </label>
          <input
            className="mt-[24px] input-primary"
            name="name"
            id="name"
            type="text"
            placeholder="Enter your name"
          ></input>
        </div>
        <div className="flex w-[50%] flex-col">
          <label
            className="p-ubuntu text-jade"
            htmlFor="email"
          >
            Your email *
          </label>
          <input
            className="mt-[24px] input-primary"
            name="email"
            id="email"
            type="email"
            placeholder="Enter your email"
          ></input>
        </div>
      </div>
      <div className="mt-[64px] flex flex-col">
        <label
          className="p-ubuntu text-jade"
          htmlFor="message"
        >
          Your message *
        </label>
        <textarea
          rows={6}
          className="mt-[24px] textarea-primary"
          name="message"
          id="message"
          placeholder="Enter your needs"
        ></textarea>
      </div>
      <div className="mt-[16px]">
        {state?.errors?.email && (
          <div>
            <p className="">Email must:</p>
            <ul>
              {state.errors.email.map((error) => (
                <li
                  className="text-red"
                  key={error}
                >
                  - {error}
                </li>
              ))}
            </ul>
          </div>
        )}
        {state?.errors?.name && (
          <div>
            <p className="">Name must:</p>
            <ul>
              {state.errors.name.map((error) => (
                <li
                  className="text-red"
                  key={error}
                >
                  - {error}
                </li>
              ))}
            </ul>
          </div>
        )}
        {state?.errors?.message && (
          <div>
            <p className="">Message must:</p>
            <ul>
              {state.errors.message.map((error) => (
                <li
                  className="text-red"
                  key={error}
                >
                  - {error}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <button
        className="mt-[64px] mx-auto button-jade flex flex-row items-center gap-x-[16px]"
        type="submit"
        disabled={pending}
      >
        send message
        <Image
          src="/icon/icon-send.svg"
          width={24}
          height={24}
          alt="icon-send.svg"
        ></Image>
      </button>
    </form>
  )
}
