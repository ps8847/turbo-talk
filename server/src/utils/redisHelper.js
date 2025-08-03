import Redis from "ioredis";
import {
  REDIS_HOST,
  REDIS_PORT,
  REDIS_USERNAME,
  REDIS_PASSWORD,
} from "../utils/config.js";
const redisClient = new Redis({
  host: REDIS_HOST,
  port: REDIS_PORT,
  username: REDIS_USERNAME,
  password: REDIS_PASSWORD,
});

redisClient.on("error", (err) => {
  console.log("err", err);
});
export { redisClient };
