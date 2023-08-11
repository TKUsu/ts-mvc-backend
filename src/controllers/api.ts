// controllers/api-controllers.ts
import { Request, Response, NextFunction } from 'express';
import { ObjectId } from "mongodb";
// import config from "../config";

class ApiControllers {
  getHomePage(request: Request, response: Response, next: NextFunction) {
    response.type('text/plain');
    response.status(200);
    response.send('Homepage...');
  }

  getArticlesPage(request: Request, response: Response, next: NextFunction) {
    response.type('text/plain');
    response.status(200);
    response.send('All articles are here!');
  }

  getAboutPage(request: Request, response: Response, next: NextFunction) {
    response.type('text/plain');
    response.status(200);
    response.send('My name is Justin.');
  }

  getUserPage(request: Request, response: Response, next: NextFunction) {
    const myObject = {}
    require('dotenv').config({ processEnv: myObject })

    console.log(myObject) // values from .env or .env.vault live here now.
    console.log(process.env.DB_DOMAIN) // this was not changed or written to

    // console.log(`mongo: ${config.DB_DOMAIN}:${config.DB_PORT}`);
    response.send()
  }
}

export default ApiControllers;