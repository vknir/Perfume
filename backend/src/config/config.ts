import 'dotenv/config'
const MONGO_URL=process.env.MONGO_URL || "" // default empty string to avoid type error


export {MONGO_URL}
