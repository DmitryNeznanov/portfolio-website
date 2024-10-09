interface Post {
  _id: ObjectId
  title: string
  body: string
  date: Date
  tags: string[] | string
  read: number
  author: string
  img: {
    src: string
    width?: number
    height?: number
    alt: string
  }
}
