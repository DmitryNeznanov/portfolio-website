"use server"
import { definations, FormState } from "@/lib/definations"
import db from "@/lib/mongodb"

export default async function sendMessage(
  state: FormState,
  formData: FormData
) {
  const contactData = definations.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  })
  if (!contactData.success) {
    return {
      errors: contactData.error.flatten().fieldErrors,
    }
  }
  const { email, name, message } = contactData.data

  db.collection("messages").insertOne({
    email: email,
    name: name,
    mesesage: message,
  })
  console.log("Message sent to database!")
}
