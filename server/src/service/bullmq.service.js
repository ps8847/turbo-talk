import { Queue, Worker } from "bullmq";
import Redis from "ioredis";
import {
  REDIS_HOST,
  REDIS_PORT,
  REDIS_USERNAME,
  REDIS_PASSWORD,
} from "../utils/config.js";
import { createMessage } from "./message.service.js";

const redisConfig = {
  connection: new Redis({
    host: REDIS_HOST,
    port: REDIS_PORT,
    username: REDIS_USERNAME,
    password: REDIS_PASSWORD,
    maxRetriesPerRequest: null,
  }),
};
const messageQueue = new Queue("messages", redisConfig);

const startMessageQueueWorker = () => {
  const worker = new Worker(
    "messages",
    async (job) => {
      console.log(`Processing Job: ${job.id}`);
      createMessage(job.data);
    },
    redisConfig
  );

  worker.on("error", (reason) => {
    console.log("WorkerError:", reason.message);
  });
  worker.on("completed", (job) => {
    console.log(`Completed Job: ${job.id}`);
  });
};

export { messageQueue, startMessageQueueWorker };
