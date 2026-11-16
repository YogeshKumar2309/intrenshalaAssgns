import app from "./app.js";
import { connectDB } from "./config/database.js";
import { env } from "./config/env";




const startServer = async () => {
    try {
        await connectDB();
        app.listen(env.PORT, () => {
            console.log(
                `Server running on http:localhost:${env.PORT}`
            );
        });
    } catch (error) {
        console.error("Server Startup failed: ", error);
        process.exit(1);
    }
}


startServer();