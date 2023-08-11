import Route from "./routes/route";
import AuthRoute from "./routes/api";

export const router: Array<Route> = [
    new AuthRoute('/api'),
];
