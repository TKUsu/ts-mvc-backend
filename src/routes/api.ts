import ApiControllers from '../controllers/api';
import {loginVaildator} from "../middleware/vaildator";
import Route from "./route";

const apiControllers = new ApiControllers();

class ApiRouter extends Route {

  protected setRoutes() {
    this.router.get('/', apiControllers.getHomePage);
    this.router.get('/articles', apiControllers.getArticlesPage);
    this.router.get('/about-me', apiControllers.getAboutPage);
    this.router.post('/login', loginVaildator, apiControllers.getUserPage);
  }
}

export default ApiRouter;