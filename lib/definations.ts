import { z } from "zod"

export const definations = z.object({
  email: z.string().email({ message: "Please enter a valid email" }).trim(),
  name: z.string().min(3, { message: "Be at least 2 characters long" }).trim(),
  message: z
    .string()
    .min(12, { message: "Be at least 12 characters long" })
    .trim(),
})

export type FormState =
  | {
      errors?: {
        email?: string[]
        name?: string[]
        message?: string[]
      }
      message?: string
    }
  | undefined
