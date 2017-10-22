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

    // Retrieves all child objects
    this.router.get("/", (req, res) => {
      this.getAllChildren(req, res).catch(err => {
        console.log("Error: ", err);
      });
    });

    // Retrieves child object with given name
    this.router.get("/byname/:name", (req, res) => {
      this.getChildByName(req, res).catch(err => {
        console.log("Error: ", err);
      })
    })

    // Retrieves child object with given id
    this.router.get("/:id", (req, res) => {
      this.getChildById(res, res).catch(err => {
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

  async createChild(req, res) {
    // try {
    //   let data = await this.db.home.select.all().catch(err => {
    //     console.log("Error: ", err);
    //     this.sendResponse(res, this.HttpStatus.INTERNAL_SERVER_ERROR, false, null, "Error retrieving home data");
    //   });
    //   this.sendResponse(res, this.HttpStatus.OK, true, data, "Success retrieving all homes");
    // } catch (err) {
    //   console.log("Error retrieving all homes: ", err);
    //   this.sendResponse(res, this.HttpStatus.INTERNAL_SERVER_ERROR, false, null, "Error retrieving home data");
    // }
  }

  // route: GET /
  // Retrieves all children objects
  async getAllChildren(req, res) {
    try {
      let data = await this.db.child.select.all().catch(err => {
        console.log("Error: ", err);
        this.sendResponse(res, this.HttpStatus.INTERNAL_SERVER_ERROR, false, null, "Error retrieving home data");
      });
      this.sendResponse(res, this.HttpStatus.OK, true, data, "Success retrieving all homes");
    } catch (err) {
      console.log("Error retrieving all homes: ", err);
      this.sendResponse(res, this.HttpStatus.INTERNAL_SERVER_ERROR, false, null, "Error retrieving home data");
    }
  }

  // route: GET /:id
  // Retrieves child object with given id
  async getChildById(req, res) {
    try {
      let data = await this.db.child.select.byId(req.params.id).catch(err => {
        console.log("Error: ", err);
        this.sendResponse(res, this.HttpStatus.INTERNAL_SERVER_ERROR, false, null, "Error retrieving home data");
      });
      this.sendResponse(res, this.HttpStatus.OK, true, data, "Success retrieving all homes");
    } catch (err) {
      console.log("Error retrieving all homes: ", err);
      this.sendResponse(res, this.HttpStatus.INTERNAL_SERVER_ERROR, false, null, "Error retrieving home data");
    }
  }

  // route: GET /byname/:name
  // Retrieves child object with given name
  async getChildByName(req, res) {
    try {
      let data = await this.db.child.select.byName(req.params.name).catch(err => {
        console.log("Error: ", err);
        this.sendResponse(res, this.HttpStatus.INTERNAL_SERVER_ERROR, false, null, "Error retrieving home data");
      });
      this.sendResponse(res, this.HttpStatus.OK, true, data, "Success retrieving all homes");
    } catch (err) {
      console.log("Error retrieving all homes: ", err);
      this.sendResponse(res, this.HttpStatus.INTERNAL_SERVER_ERROR, false, null, "Error retrieving home data");
    }
  }

  // route: PUT /:id
  // Updates child object with given id
  // with given req.body form values
  async updateChild(req, res) {
    // try {
    //   let data = await this.db.home.select.all().catch(err => {
    //     console.log("Error: ", err);
    //     this.sendResponse(res, this.HttpStatus.INTERNAL_SERVER_ERROR, false, null, "Error retrieving home data");
    //   });
    //   this.sendResponse(res, this.HttpStatus.OK, true, data, "Success retrieving all homes");
    // } catch (err) {
    //   console.log("Error retrieving all homes: ", err);
    //   this.sendResponse(res, this.HttpStatus.INTERNAL_SERVER_ERROR, false, null, "Error retrieving home data");
    // }
  }

  // route: DELETE /:id
  // Deletes a child with given id
  async deleteChild(req, res) {
    // try {
    //   let data = await this.db.home.select.all().catch(err => {
    //     console.log("Error: ", err);
    //     this.sendResponse(res, this.HttpStatus.INTERNAL_SERVER_ERROR, false, null, "Error retrieving home data");
    //   });
    //   this.sendResponse(res, this.HttpStatus.OK, true, data, "Success retrieving all homes");
    // } catch (err) {
    //   console.log("Error retrieving all homes: ", err);
    //   this.sendResponse(res, this.HttpStatus.INTERNAL_SERVER_ERROR, false, null, "Error retrieving home data");
    // }
  }
}
