import {
  BaseController
} from "./base.controller";

export class AdministrationController extends BaseController {
  constructor(server) {
    super(server);

    // Creates a Administration object
    this.router.post("/", (req, res) => {
      this.createAdministration(req, res).catch(err => {
        console.log(": ", err);
        this.sendServerError(res, "");
      });
    });

    // Retrieves Administration object with given id
    this.router.get("/:id", (req, res) => {
      this.getAdministration(req, res).catch(err => {
        console.log(": ", err);
        this.sendServerError(res, "");
      });
    });

    // Updates Administration object with given id
    this.router.put("/:id", (req, res) => {
      this.updateAdministration(req, res).catch(err => {
        console.log(": ", err);
        this.sendServerError(res, "");
      });
    });

    // Deletes Administration object with given id
    this.router.delete("/:id", (req, res) => {
      this.deleteAdministration(req, res).catch(err => {
        console.log(": ", err);
        this.sendServerError(res, "");
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

  async createAdministration(req, res) {}

  async getAdministration(req, res) {}

  async updateAdministration(req, res) {}

  async deleteAdministration(req, res) {}
}
