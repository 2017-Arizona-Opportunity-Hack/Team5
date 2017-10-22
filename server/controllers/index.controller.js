import {
  BaseController
} from "./base.controller";

export class IndexController extends BaseController {
  constructor(server) {
    super(server);

    this.router.get('/', (req, res) => {
      res.status(this.HttpStatus.OK);
      res.send('Hi (:');
    });
  }
}
