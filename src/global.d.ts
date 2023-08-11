export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ENV: string;
      DB_USER: string;
      DB_PWD: string;
      DB_PORT: string;
      DB_DOMAIN: string;
      PORT: string;
    }
  }
}
