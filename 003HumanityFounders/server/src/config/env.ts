import "dotenv/config"



declare const process: {
    env: {
        PORT?: string,
        NODE_ENV?: string,
        MONGODB_URI?: string,
        JWT_SECRET?: string,
    };
    exit: () => never;
};

export const env = {
    PORT: Number(process.env.PORT) || 5000,
    NODE_ENV: process.env.NODE_ENV || "development",
    MONGODB_URI: process.env.MONGODB_URI || "",
    JWT_SECRET: process.env.JWT_SECRET || ""
}

if (!env.MONGODB_URI) {
    throw new Error("MONGODB_URI is missing in .env");
}


if (!env.JWT_SECRET) {
    throw new Error("JWT_SECRET is missing in .env");
}