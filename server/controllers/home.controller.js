import {
  BaseController
} from "./base.controller";

export class HomeController extends BaseController {
  constructor(server) {
    super(server);

    // Creates a home object
    this.router.post("/", (req, res) => {
      this.createHome(req, res).catch(err => {
        console.log("Error: ", err);
      });
    });

    // Retrieves home object with given id
    this.router.get("/:id", (req, res) => {
      this.getHome(res, res).catch(err => {
        console.log("Error: ", err);
      });
    });

    // Updates home object with given id
    this.router.put("/:id", (req, res) => {
      this.updateHome(req, res).catch(err => {
        console.log("Error: ", err);
      });
    });

    // Deletes home object with given id
    this.router.delete("/:id", (req, res) => {
      this.deleteHome(req, res).catch(err => {
        console.log("Error: ", err);
      });
    });

    this.router.all("/", (req, res) => {
      res.status(HttpStatus.METHOD_NOT_ALLOWED);
      res.send("Error 405 - Method not allowed");
    });

    this.router.all("/:id", (req, res) => {
      res.status(HttpStatus.METHOD_NOT_ALLOWED);
      res.send("Error 405 - Method not allowed");
    });

    this.router.get("/*", (req, res) => {
      res.status(HttpStatus.NOT_FOUND);
      res.send("Error 404 - Page not found")
    })
  }

  async createHome(req, res) {
    try {

    } catch (err) {

    }
  }

  async getHome(req, res) {
    try {

    } catch (err) {

    }
  }

  async updateHome(req, res) {
    try {

    } catch (err) {

    }
  }

  async deleteHome(req, res) {
    try {

    } catch (err) {

    }
  }
}
