import dotenv from "dotenv";


dotenv.config();

const requirement = (key) => {

    if (!process.env[key]) {
        throw new Error("Key Missing")
    }

    return process.env[key];

}


const env = {
    NODE_ENV: process.env.NODE_ENV || "development",
    PORT: Number(process.env.PORT || 4000),
    DATABASE_URL: requirement("DATABASE_URL"),
    DIRECT_URL: requirement("DIRECT_URL"),
    SUPABASE_URL: requirement("SUPABASE_URL"),
    SUPABASE_ANON_KEY: requirement("SUPABASE_ANON_KEY"),
    SUPABASE_SERVICE_ROLE_KEY: requirement("SUPABASE_SERVICE_ROLE_KEY"),
    APP_NAME: "Qrazy"
}

export default env;


