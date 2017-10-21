import {
  BaseController
} from "./base.controller";

export class IndexController extends BaseController {
  constructor(server) {
    super(server);

    this.router.get('/', (req, res) => {
      res.send("This is our home page. It is beautiful");
    });
  }
}
