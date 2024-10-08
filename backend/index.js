import express from "express";
import dotenv from "dotenv";
import db from "./config/database.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./routes/route.js";
// import Users from "./models/user.model.js";
dotenv.config();
const app = express();

try {
  await db.authenticate();
  console.log(`Database has Connected...`);
  // await Users.sync();
} catch (error) {
  console.error(`Database Error: ${error}`);
}

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(5000, () => console.log(`Server running at port 5000`));
