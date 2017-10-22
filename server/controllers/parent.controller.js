import {
  BaseController
} from "./base.controller";

export class ParentController extends BaseController {
  constructor(server) {
    super(server);

    // Retrieves all parent objects
    this.router.get("/", (req, res) => {
      this.getAllParents(req, res).catch(err => {
        console.log("Error: ", err);
      });
    });

    // Creates a parent object
    this.router.post("/", (req, res) => {
      this.createParent(req, res).catch(err => {
        console.log("Error: ", err);
      });
    });

    // Retrieves parent object with given id
    this.router.get("/:id", (req, res) => {
      this.getParentById(req, res).catch(err => {
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
    let data = await this.db.child.select.all().catch(err => {
      console.log("Error: ", err);
      this.sendResponse(res, this.HttpStatus.INTERNAL_SERVER_ERROR, false, null, "Error retrieving parent data");
    });
    this.sendResponse(res, this.HttpStatus.OK, true, data, "Success retrieving all parents");
  }

  // route: POST /
  // Creates a new parent object
  async createParent(req, res) {
    // try {
    //   let data = await this.db.child.select.byId(req.params.id).catch(err => {
    //     console.log("Error: ", err);
    //     this.sendResponse(res, this.HttpStatus.INTERNAL_SERVER_ERROR, false, null, "Error retrieving parent data");
    //   });
    //   this.sendResponse(res, this.HttpStatus.OK, true, data, "Success retrieving all parents");
    // } catch (err) {
    //   console.log("Error retrieving all parents: ", err);
    //   this.sendResponse(res, this.HttpStatus.INTERNAL_SERVER_ERROR, false, null, "Error retrieving parent data");
    // }
  }

  // route: GET /:id
  // Retrieves a parent object with the given id
  async getParentById(req, res) {
    let data = await this.db.child.select.byId(req.params.id).catch(err => {
      console.log("Error: ", err);
      this.sendResponse(res, this.HttpStatus.INTERNAL_SERVER_ERROR, false, null, "Error retrieving parent data");
    });
    this.sendResponse(res, this.HttpStatus.OK, true, data, "Success parent");
  }

  // route: PUT /:id
  // Updates a parent object with the given id
  async updateParent(req, res) {
    //   let data = await this.db.child.select.byId(req.params.id).catch(err => {
    //     console.log("Error: ", err);
    //     this.sendResponse(res, this.HttpStatus.INTERNAL_SERVER_ERROR, false, null, "Error updating parent data");
    //   });
    //   this.sendResponse(res, this.HttpStatus.OK, true, data, "Success updating parent data");
  }

  // route: DELETE /:id
  // Deletes a parent object with the given id
  async deleteParent(req, res) {
    //   let data = await this.db.child.select.byId(req.params.id).catch(err => {
    //     console.log("Error: ", err);
    //     this.sendResponse(res, this.HttpStatus.INTERNAL_SERVER_ERROR, false, null, "Error deleting parent");
    //   });
    //   this.sendResponse(res, this.HttpStatus.OK, true, data, "Success deleting parent");
  }
}
