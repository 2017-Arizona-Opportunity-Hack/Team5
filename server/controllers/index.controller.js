import {
  BaseController
} from "./base.controller";
import DB from "../db/index";

export class IndexController extends BaseController {
  constructor(server) {
    super(server);

    this.router.get('/', (req, res) => {
      this.test(req, res);
    });
  }

  async test(req, res) {
    try {

      console.log("Hey")
      let data = await DB.home.select.all().catch(err => {
        console.log("Error: ", err);
      });
      console.log("hi");
      console.log(data);
      res.send(data);

    } catch (err) {
      console.log("Error ", err);
    }
  }
}
