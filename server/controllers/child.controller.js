import {
  BaseController
} from "./base.controller";

export class ChildController extends BaseController {
  constructor(server) {
    super(server);

    // Creates a child object
    this.router.post("/", (req, res) => {
      this.createChild(req, res).catch(err => {
        console.log("Error creating child: ", err);
        this.sendServerError(res, "Error creating child");
      });
    });

    // Retrieves all child objects
    this.router.get("/", (req, res) => {
      this.getAllChildren(req, res).catch(err => {
        console.log("Error retrieving all children: ", err);
        this.sendServerError(res, "Error retrieving all children");
      });
    });

    // Retrieves child object with given name
    this.router.get("/byname/:name", (req, res) => {
      this.getChildByName(req, res).catch(err => {
        console.log("Error retrieving children by name: ", err);
        this.sendServerError(res, "Error retrieving children by name");
      });
    });

    // Retrieves child object with given parent id
    this.router.get("/byparentid/:id", (req, res) => {
      this.getChildByParentId(req, res).catch(err => {
        console.log("Error retrieving children by parent id: ", err);
        this.sendServerError(res, "Error retrieving children by parent id");
      });
    });

    // Retrieves child object with given home id
    this.router.get("/byhomeid/:id", (req, res) => {
      this.getChildByHomeId(req, res).catch(err => {
        console.log("Error retrieving children by home id: ", err);
        this.sendServerError(res, "Error retrieving children by home id");
      });
    });

    // Retrieves child object with given id
    this.router.get("/:id", (req, res) => {
      this.getChildById(req, res).catch(err => {
        console.log("Error retrieving child object: ", err);
        this.sendServerError(res, "Error retrieving child object");
      });
    });

    // Updates child object with given id
    this.router.put("/:id", (req, res) => {
      this.updateChild(req, res).catch(err => {
        console.log("Error updating child object: ", err);
        this.sendServerError(res, "Error updating child object");
      });
    });

    // Deletes child object with given id
    this.router.delete("/:id", (req, res) => {
      this.deleteChild(req, res).catch(err => {
        console.log("Error deleting child object: ", err);
        this.sendServerError(res, "Error deleting child object");
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
  // Retrieves all children objects
  async getAllChildren(req, res) {
    let data = await this.db.child.select.all().catch(this.throwError);
    this.sendResponse(res, this.HttpStatus.OK, true, data, "Success retrieving all children");
  }

  // route: POST /
  // Creates a new child object
  async createChild(req, res) {
    let data = {
      name: req.body.name,
      home_id: req.body.home_id
    };

    // Validates input
    if (!data.name || !data.home_id || typeof data.name != "string" || typeof data.home_id != "number") {
      this.sendResponse(res, this.HttpStatus.BAD_REQUEST, false, null, "Invalid data");
    }

    let qData = await this.db.child.insert.one(data).catch(this.throwError);
    this.sendResponse(res, this.HttpStatus.OK, true, qData, "Success retrieving all homes");
  }

  // route: GET /:id
  // Retrieves child object with given id
  async getChildById(req, res) {
    let data = await this.db.child.select.byId(req.params.id).catch(this.throwError);
    this.sendResponse(res, this.HttpStatus.OK, true, data, "Success retrieving all child");
  }

  // route: GET /byname/:name
  // Retrieves child object with given name
  async getChildByName(req, res) {
    let data = await this.db.child.select.byName(req.params.name).catch(this.throwError);
    this.sendResponse(res, this.HttpStatus.OK, true, data, "Success retrieving all children");
  }

  // route: GET /byparentid/:id
  // Retrieves children associated with parent id
  async getChildByParentId(req, res) {
    let data = await this.db.child.select.byParentId(req.params.id).catch(this.throwError);
    this.sendResponse(res, this.HttpStatus.OK, true, data, "Success retrieving children");
  }

  // route: GET /byhomeid/:id
  // Retrieves children associated with home id
  async getChildByHomeId(req, res) {
    let data = await this.db.child.select.byHomeId(req.params.id).catch(this.throwError);
    this.sendResponse(res, this.HttpStatus.OK, true, data, "Success retrieving children");
  }

  // route: PUT /:id
  // Updates child object with given id
  // with given req.body form values
  async updateChild(req, res) {
    //   let data = await this.db.home.select.all().catch(this.throwError);
    //   this.sendResponse(res, this.HttpStatus.OK, true, data, "Success updating child");
  }

  // route: DELETE /:id
  // Deletes a child with given id
  async deleteChild(req, res) {
    //   let data = await this.db.home.select.all().catch(this.throwError);
    //   this.sendResponse(res, this.HttpStatus.OK, true, data, "Success deleting child");
  }
}
