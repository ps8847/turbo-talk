import dotenv from 'dotenv';
dotenv.config();

export const MONGO_URL=process.env.MONGO_URL;
export const PORT = process.argv[2] || process.env.PORT;
export const JWT_SECRET=process.env.JWT_SECRET;
export const REDIS_HOST=process.env.REDIS_HOST;
export const REDIS_PORT=process.env.REDIS_PORT;
export const REDIS_USERNAME=process.env.REDIS_USERNAME;
export const REDIS_PASSWORD=process.env.REDIS_PASSWORD;