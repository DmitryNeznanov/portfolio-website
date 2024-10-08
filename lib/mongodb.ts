import { MongoClient, ServerApiVersion } from "mongodb"
// @ts-expect-error: No ts types for process.env
const client = new MongoClient(process.env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
})
export const db = client.db("webPortfolio")

export default db
