import {
  BaseController
} from "./base.controller";

export class PhysicianController extends BaseController {
  constructor(server) {
    super(server);

    // Retrieves all Physician objects
    this.router.get("/", (req, res) => {
      this.getAllPhysicians(req, res).catch(err => {
        console.log("Error retrieving all physicians: ", err);
        this.sendServerError(res, "Error retrieving physician data");
      });
    });

    // Creates a Physician object
    this.router.post("/", (req, res) => {
      this.createPhysician(req, res).catch(err => {
        console.log("Error creating physician: ", err);
        this.sendServerError(res, "Error creating physician");
      });
    });

    // Retrieves Physician object with given id
    this.router.get("/:id", (req, res) => {
      this.getPhysicianById(req, res).catch(err => {
        console.log("Error retrieving physician: ", err);
        this.sendServerError(res, "Error retrieving physician data");
      });
    });

    // Updates Physician object with given id
    this.router.put("/:id", (req, res) => {
      this.updatePhysician(req, res).catch(err => {
        console.log("Error updating physician: ", err);
        this.sendServerError(res, "Error updating physician");
      });
    });

    // Deletes Physician object with given id
    this.router.delete("/:id", (req, res) => {
      this.deletePhysician(req, res).catch(err => {
        console.log("Error deleting physician: ", err);
        this.sendServerError(res, "Error deleting physician");
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
  // Retrieves all physician objects
  async getAllPhysicians(req, res) {
    let data = await this.db.physician.select.all().catch(this.throwError);
    this.sendResponse(res, this.HttpStatus.OK, true, data, "Success retrieving all physicians");
  }

  // route: POST /
  // Creates a new physician object
  async createPhysician(req, res) {
    let data = {
      name: req.body.name,
      phone: req.body.phone
    }

    // Input validation
    try {
      if (!data.name || !data.phone || typeof data.name != "string", typeof data.phone != "string") {
        throw "Invalid input"
      }
      if (!data.phone.match(/^\([2-9]\d\d\) \d\d\d-\d{4}/)) {
        throw "Invalid phone number";
      }
    } catch (err) {
      this.sendResponse(res, this.HttpStatus.BAD_REQUEST, false, null, "Invalid input");
      return;
    }
    let qData = await this.db.physician.insert.one(data).catch(this.throwError);
    this.sendResponse(res, this.HttpStatus.OK, true, qData, "Success creating physician");
  }

  // route: GET /:id
  // Retrieves a physician object with the given id
  async getPhysicianById(req, res) {
    let data = await this.db.physician.select.byId(req.params.id).catch(this.throwError);
    this.sendResponse(res, this.HttpStatus.OK, true, data, "Success retrieving physician");
  }

  // route: PUT /:id
  // Updates a physician object with the given id
  async updatePhysician(req, res) {
    let data = await this.db.physician.select.byId(req.params.id).catch(this.throwError);
    this.sendResponse(res, this.HttpStatus.OK, true, data, "Success updating physician");
  }
}
