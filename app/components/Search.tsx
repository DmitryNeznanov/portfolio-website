import db from "@/lib/mongodb"
import SearchForm from "./SearchForm"
export default async function Search() {
  const posts = (await db
    .collection("posts")
    .find()
    .sort({ date: 1 })
    .toArray()) as Post[]
  const data: Post[] = JSON.parse(JSON.stringify(posts))

  return (
    <>
      <div id="search">
        <SearchForm data={data} />
      </div>
    </>
  )
}
