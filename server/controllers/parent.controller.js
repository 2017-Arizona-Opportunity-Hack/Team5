import {
  BaseController
} from "./base.controller";

export class ParentController extends BaseController {
  constructor(server) {
    super(server);

    // Retrieves all parent objects
    this.router.get("/", (req, res) => {
      this.getAllParents(req, res).catch(err => {
        console.log("Error getting all parent objects: ", err);
        this.sendServerError(res, "Error getting all parent objects");
      });
    });

    // Creates a parent object
    this.router.post("/", (req, res) => {
      this.createParent(req, res).catch(err => {
        console.log("Error creating a parent object: ", err);
        this.sendServerError(res, "Error creating a parent object");
      });
    });

    // Retrieves parent object with given id
    this.router.get("/:id", (req, res) => {
      this.getParentById(req, res).catch(err => {
        console.log("Error retrieving parent object: ", err);
        this.sendServerError(res, "Error retrieving parent object");
      });
    });

    // Updates parent object with given id
    this.router.put("/:id", (req, res) => {
      this.updateParent(req, res).catch(err => {
        console.log("Error updating parent object: ", err);
        this.sendServerError(res, "Error updating parent object");
      });
    });

    // Deletes parent object with given id
    this.router.delete("/:id", (req, res) => {
      this.deleteParent(req, res).catch(err => {
        console.log("Error deleting parent object: ", err);
        this.sendServerError(res, "Error deleting parent object");
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
  // Retrieves all parent objects
  async getAllParents(req, res) {
    let data = await this.db.parent.select.all().catch(this.throwError);
    this.sendResponse(res, this.HttpStatus.OK, true, data, "Success retrieving all parents");
  }

  // route: POST /
  // Creates a new parent object
  async createParent(req, res) {
    let data = {
      name: req.body.name
    }

    if (!data.name || typeof data.name != "string") {
      this.sendResponse(res, this.HttpStatus.BAD_REQUEST, false, null, "Invalid input");
    }

    let qData = await this.db.parent.insert.one(data).catch(this.throwError);
    this.sendResponse(res, this.HttpStatus.OK, true, qData, "Success retrieving all parents");
  }

  // route: GET /:id
  // Retrieves a parent object with the given id
  async getParentById(req, res) {
    let data = await this.db.parent.select.byId(req.params.id).catch(this.throwError);
    this.sendResponse(res, this.HttpStatus.OK, true, data, "Success parent");
  }

  // route: PUT /:id
  // Updates a parent object with the given id
  async updateParent(req, res) {
    //   let data = await this.db.parent.select.byId(req.params.id).catch(this.throwError));
    //   this.sendResponse(res, this.HttpStatus.OK, true, data, "Success updating parent data");
  }
}
