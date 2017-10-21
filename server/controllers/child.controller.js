import {
  BaseController
} from "./base.controller";

export class ChildController extends BaseController {
  constructor(server) {
    super(server);

    // Creates a child object
    this.router.post("/", (req, res) => {
      this.createChild(req, res).catch(err => {
        console.log("Error: ", err);
      });
    });

    // Retrieves child object with given id
    this.router.get("/:id", (req, res) => {
      this.getChild(res, res).catch(err => {
        console.log("Error: ", err);
      });
    });

    // Updates child object with given id
    this.router.put("/:id", (req, res) => {
      this.updateChild(req, res).catch(err => {
        console.log("Error: ", err);
      });
    });

    // Deletes child object with given id
    this.router.delete("/:id", (req, res) => {
      this.deleteChild(req, res).catch(err => {
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

  async createChild(req, res) {
    try {

    } catch (err) {

    }
  }

  async getChild(req, res) {
    try {

    } catch (err) {

    }
  }

  async updateChild(req, res) {
    try {

    } catch (err) {

    }
  }

  async deleteChild(req, res) {
    try {

    } catch (err) {

    }
  }
}
