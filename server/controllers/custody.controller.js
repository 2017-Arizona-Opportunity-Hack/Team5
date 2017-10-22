import {
  BaseController
} from "./base.controller";

export class CustodyController extends BaseController {
  constructor(server) {
    super(server);

    // Retrieves all custody objects
    this.router.get("/", (req, res) => {
      this.getAllCustodies(req, res).catch(err => {
        console.log("Error getting all custody objects: ", err);
        this.sendServerError(res, "Error getting all custody objects");
      });
    });

    // Creates a custody object
    this.router.post("/", (req, res) => {
      this.createCustody(req, res).catch(err => {
        console.log("Error creating a custody object: ", err);
        this.sendServerError(res, "Error creating a custody object");
      });
    });

    // Retrieves custody object with given id
    this.router.get("/:id", (req, res) => {
      this.getCustodyById(req, res).catch(err => {
        console.log("Error retrieving custody object: ", err);
        this.sendServerError(res, "Error retrieving custody object");
      });
    });

    // Updates custody object with given id
    this.router.put("/:id", (req, res) => {
      this.updateCustody(req, res).catch(err => {
        console.log("Error updating custody object: ", err);
        this.sendServerError(res, "Error updating custody object");
      });
    });

    // Deletes custody object with given id
    this.router.delete("/:id", (req, res) => {
      this.deleteCustody(req, res).catch(err => {
        console.log("Error deleting custody object: ", err);
        this.sendServerError(res, "Error deleting custody object");
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
  // Retrieves all custody objects
  async getAllCustodies(req, res) {
    let data = await this.db.custody.select.all().catch(this.throwError);
    this.sendResponse(res, this.HttpStatus.OK, true, data, "Success retrieving all custodys");
  }

  // route: POST /
  // Creates a new custody object
  async createCustody(req, res) {
    let data = {
      child_id: req.body.child_id,
      checkin: req.body.checkin,
      checkout: req.body.checkout
    }

    // TODO: Input validation

    let qData = await this.db.custody.insert.one(data).catch(this.throwError);
    this.sendResponse(res, this.HttpStatus.OK, true, qData, "Success retrieving all custodys");
  }

  // route: GET /:id
  // Retrieves a custody object with the given id
  async getCustodyById(req, res) {
    let data = await this.db.custody.select.byId(req.params.id).catch(this.throwError);
    this.sendResponse(res, this.HttpStatus.OK, true, data, "Success custody");
  }

  // route: PUT /:id
  // Updates a custody object with the given id
  async updateCustody(req, res) {
    //   let data = await this.db.custody.select.byId(req.params.id).catch(this.throwError));
    //   this.sendResponse(res, this.HttpStatus.OK, true, data, "Success updating custody data");
  }
}
