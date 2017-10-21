import {
  BaseController
} from "./base.controller";

export class PhysicianController extends BaseController {
  constructor(server) {
    super(server);

    // Creates a Physician object
    this.router.post("/", (req, res) => {
      this.createPhysician(req, res).catch(err => {
        console.log("Error: ", err);
      });
    });

    // Retrieves Physician object with given id
    this.router.get("/:id", (req, res) => {
      this.getPhysician(res, res).catch(err => {
        console.log("Error: ", err);
      });
    });

    // Updates Physician object with given id
    this.router.put("/:id", (req, res) => {
      this.updatePhysician(req, res).catch(err => {
        console.log("Error: ", err);
      });
    });

    // Deletes Physician object with given id
    this.router.delete("/:id", (req, res) => {
      this.deletePhysician(req, res).catch(err => {
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

  async createPhysician(req, res) {
    try {

    } catch (err) {

    }
  }

  async getPhysician(req, res) {
    try {

    } catch (err) {

    }
  }

  async updatePhysician(req, res) {
    try {

    } catch (err) {

    }
  }

  async deletePhysician(req, res) {
    try {

    } catch (err) {

    }
  }
}
