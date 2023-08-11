import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, `./${ process.env.NODE_ENV }.env`) });

// Interface to load env variables
// Note these variables can possibly be undefined
// as someone could skip these varibales or not setup a .env file at all

// interface ENV {
//     ENV: string | undefined;
//     DB_USER: string | undefined;
//     DB_PWD: string | undefined
//     DB_PORT: string | undefined
//     DB_DOMAIN: string | undefined
//     PORT: number | undefined
// }

interface Config {
    ENV: string | undefined;
    DB_USER: string | undefined;
    DB_PWD: string | undefined;
    DB_PORT: string | undefined;
    DB_DOMAIN: string | undefined;
    PORT: string | undefined;
}

// Loading process.env as ENV interface
const getConfig = (): Config => {
    return {
        ENV: process.env.ENV,
        DB_USER: process.env.DB_USER,
        DB_PWD: process.env.DB_PWD,
        DB_PORT: process.env.DB_PORT,
        DB_DOMAIN: process.env.DB_DOMAIN,
        PORT: process.env.PORT
    };
};

// Throwing an Error if any field was undefined we don't 
// want our app to run if it can't connect to DB and ensure 
// that these fields are accessible. If all is good return
// it as Config which just removes the undefined from our type 
// definition.

const getSanitzedConfig = (config: Config): Config => {
    for (const [key, value] of Object.entries(config)) {
        if (value === undefined) {
            throw new Error(`Missing key ${key}:${value} in config.env`);
        }
    }
    return config as Config;
};

const config = getConfig();

const sanitizedConfig = getSanitzedConfig(config);

export default sanitizedConfig;
