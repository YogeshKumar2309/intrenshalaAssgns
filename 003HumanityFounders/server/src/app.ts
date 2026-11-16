import express from "express";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import authRouter from "./modules/auth/auth.routes"


const app = express();

//security
app.use(helmet());


//cors
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
);


//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(cookieParser());
app.use(morgan("dev"))


// health check
app.get("/api/health", (_req,res) => {
    res.status(200).json({
        success: true, 
        message: "Server is Running"
    });
});

app.use("/api/auth", authRouter)

export default app;

