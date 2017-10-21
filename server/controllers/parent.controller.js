import {
  BaseController
} from "./base.controller";

export class ParentController extends BaseController {
  constructor(server) {
    super(server);

    // Creates a parent object
    this.router.post("/", (req, res) => {
      this.createParent(req, res).catch(err => {
        console.log("Error: ", err);
      });
    });

    // Retrieves parent object with given id
    this.router.get("/:id", (req, res) => {
      this.getParent(res, res).catch(err => {
        console.log("Error: ", err);
      });
    });

    // Updates parent object with given id
    this.router.put("/:id", (req, res) => {
      this.updateParent(req, res).catch(err => {
        console.log("Error: ", err);
      });
    });

    // Deletes parent object with given id
    this.router.delete("/:id", (req, res) => {
      this.deleteParent(req, res).catch(err => {
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

  async createParent(req, res) {
    try {

    } catch (err) {

    }
  }

  async getParent(req, res) {
    try {

    } catch (err) {

    }
  }

  async updateParent(req, res) {
    try {

    } catch (err) {

    }
  }

  async deleteParent(req, res) {
    try {

    } catch (err) {

    }
  }
}
