import db from "@/lib/mongodb"
import { ObjectId } from "mongodb"
export async function generateStaticParams() {
  const posts = (await db.collection("post").find({}).toArray()) as Post[]

  return posts.map((post: Post) => ({
    _id: post._id,
  }))
}
export default async function Post({ params }: { params: { id: ObjectId } }) {
  const post = await db
    .collection("posts")
    .findOne({ _id: new ObjectId(`${params.id}`) })
  return <section className="container py-[64px] xl:pt-[128px]"></section>
}
