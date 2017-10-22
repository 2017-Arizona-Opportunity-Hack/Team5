import {
  BaseController
} from "./base.controller";

export class AdministrationController extends BaseController {
  constructor(server) {
    super(server);

    // Retrieves all administration objects
    this.router.get("/", (req, res) => {
      this.getAllAdministrations(req, res).catch(err => {
        console.log("Error getting all administration objects: ", err);
        this.sendServerError(res, "Error getting all administration objects");
      });
    });

    // Creates a administration object
    this.router.post("/", (req, res) => {
      this.createAdministration(req, res).catch(err => {
        console.log("Error creating administration object: ", err);
        this.sendServerError(res, "Error creating administration object");
      });
    });

    // Retrieves administration object with given id
    this.router.get("/:id", (req, res) => {
      this.getAdministrationById(req, res).catch(err => {
        console.log("Error retrieving administration object: ", err);
        this.sendServerError(res, "Error retrieving administration object");
      });
    });

    // Updates administration object with given id
    this.router.put("/:id", (req, res) => {
      this.updateAdministration(req, res).catch(err => {
        console.log("Error updating administration object: ", err);
        this.sendServerError(res, "Error updating administration object");
      });
    });

    // Deletes administration object with given id
    this.router.delete("/:id", (req, res) => {
      this.deleteAdministration(req, res).catch(err => {
        console.log("Error deleting administration object: ", err);
        this.sendServerError(res, "Error deleting administration object");
      });
    });

    // Error handling
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

  // route: GET /
  // Retrieves all administration objects
  async getAllAdministrations(req, res) {
    let data = await this.db.administration.select.all().catch(this.throwError);
    this.sendResponse(res, this.HttpStatus.OK, true, data, "Success retrieving all administrations");
  }

  // route: POST /
  // Creates a new administration object
  async createAdministration(req, res) {
    let data = {
      child_id: req.body.child_id,
      prescription_id: req.body.prescription_id,
      parent_id: req.body.parent_id,
      date: req.body.date
    };

    // TODO: Input validation

    let qData = await this.db.administration.insert.one(data).catch(this.throwError);
    this.sendResponse(res, this.HttpStatus.OK, true, qData, "Success retrieving all administrations");
  }

  // route: GET /:id
  // Retrieves a administration object with the given id
  async getAdministrationById(req, res) {
    let data = await this.db.administration.select.byId(req.params.id).catch(this.throwError);
    this.sendResponse(res, this.HttpStatus.OK, true, data, "Success administration");
  }

  // route: PUT /:id
  // Updates a administration object with the given id
  async updateAdministration(req, res) {
    //   let data = await this.db.administration.select.byId(req.params.id).catch(this.throwError));
    //   this.sendResponse(res, this.HttpStatus.OK, true, data, "Success updating administration data");
  }

  // route: DELETE /:id
  // Deletes a administration object with the given id
  async deleteAdministration(req, res) {
    //   let data = await this.db.administration.select.byId(req.params.id).catch(this.throwError));
    //   this.sendResponse(res, this.HttpStatus.OK, true, data, "Success deleting administration");
  }
}
