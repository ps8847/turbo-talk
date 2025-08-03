import cors from "cors";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer } from "http";
import { Server } from "socket.io";
import routes from "./routes/route.js";
import initalizeSocket from "./socket/socket.js";
import { PORT } from "./utils/config.js";
import connectDb from "./utils/connect-db.js";
import handleErrors from "./utils/handleError.js";
import { morganChalk } from "./utils/morgan.js";
import { startMessageQueueWorker } from "./service/bullmq.service.js";

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
  pingTimeout: 60000,
  cors: { origin: "*" },
});

initalizeSocket(io);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());
app.use(morganChalk);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/", routes);
app.use(handleErrors);

const startServer = () => {
  httpServer
    .listen(PORT, () => {
      console.log("Server Started");
      connectDb();
      startMessageQueueWorker();
    })
    .on("error", (err) => {
      console.log("Server Crashed");
    });
};

startServer();
