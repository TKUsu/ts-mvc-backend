import {Router} from "express";

abstract class Route {
    protected router = Router();
    protected abstract setRoutes(): void;
    protected prefix: string = '/';
    
    constructor(prefix: string) {
        this.prefix = prefix;
        this.setRoutes();
    }

    public getRouter() {
        return this.router;
    }

    public getPrefix() {
        return this.prefix;
    }
}

export default Route;