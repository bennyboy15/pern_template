const config = {
    env: process.env.NODE_ENV || "development",
    port: parseInt(process.env.PORT || "5000"),
    debug: process.env.APP_DEBUG === "true",
    jwtSecret: process.env.JWT_SECRET || "",
    appName: process.env.APP_NAME || ""
};

export default config;