import express from "express";
import { AddressInfo } from "net";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();


const app = express();
app.use(cors());
app.use(express.json());
app.use("/users", userRouter)

app.all("*", (req, res) => {
    res.status(404).send(`Not Found: ${req.method} ${req.url}`);
})

const server = app.listen(process.env.PORT || 3005, () => {
    if(server) {
        const address = server.address() as AddressInfo;
        console.log(`Server runing at http://localhost:${address.port}`);
    } else {
    console.error('Failure initializing server.');
    }
})