import express from "express";
import { userRouter } from "./src/routes/user.js";
import { userLoginRouer } from "./src/db/models/userLogin.js";
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/user", userRouter);

app.use('/userLogin',userLoginRouer);

app.listen(PORT, () => {
  console.log(`App is running on port http://localhost:${PORT}`);
});
