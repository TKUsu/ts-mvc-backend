import express, { Express, Request, Response, NextFunction } from 'express';
import {router} from "./router";
import config from "./config";

const bodyParserErrorHandler = require('express-body-parser-error-handler')
const { urlencoded, json } = require('body-parser')

const port = config.PORT;
const app: Express = express();

app.use(json());
app.use(urlencoded({extended: false, limit: '250kb'}));
app.use(bodyParserErrorHandler());

// 全部頁面進行驗證
// app.use(AuthMiddleware);
// Headers & Prefunction
app.use((request: Request, response: Response, next: NextFunction) => {
  // response.setHeader("Access-Control-Allow-Origin", "*");
  next();
});
// Routers
for (const route of router) {
  app.use(route.getPrefix(), route.getRouter());
}
// Error
app.use((request: Request, response: Response) => {
  response.type('text/plain');
  response.status(404)
  response.send('Page is not found.');
})

app.listen(port, () => {
  console.log(`[${config.ENV}] server is running on http://localhost:${port}`)
});