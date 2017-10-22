import {
  BaseController
} from "./base.controller";

export class IndexController extends BaseController {
  constructor(server) {
    super(server);

    this.router.get('/', (req, res) => {
      this.test(req, res);
    });
  }
}
