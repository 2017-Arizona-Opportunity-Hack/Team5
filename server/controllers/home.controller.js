import {
  BaseController
} from "./base.controller";

export class HomeController extends BaseController {
  constructor(server) {
    super(server);

    // Creates a home object
    this.router.post("/", (req, res) => {
      this.createHome(req, res).catch(err => {
        console.log("Error creating home object: ", err);
        this.sendServerError(res, "Error creating home object");
      });
    });

    // Retrieves all homes
    this.router.get("/", (req, res) => {
      this.getAllHomes(req, res).catch(err => {
        console.log("Error retrieving all homes: ", err);
        this.sendServerError(res, "Error retrieving all homes");
      });
    });

    // Retrieves home object with given id
    this.router.get("/:id", (req, res) => {
      this.getHomeById(req, res).catch(err => {
        console.log("Error retrieving home object: ", err);
        this.sendServerError(res, "Error retrieving home object");
      });
    });

    // Updates home object with given id
    this.router.put("/:id", (req, res) => {
      this.updateHome(req, res).catch(err => {
        console.log("Error updating home object: ", err);
        this.sendServerError(res, "Error updating home object");
      });
    });

    // Deletes home object with given id
    this.router.delete("/:id", (req, res) => {
      this.deleteHome(req, res).catch(err => {
        console.log("Error deleting home objects: ", err);
        this.sendServerError(res, "Error deleting home objects");
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

  // route: GET /
  // Retrieves all home objects
  async getAllHomes(req, res) {
    let data = await this.db.home.select.all().catch(this.throwError);
    this.sendResponse(res, this.HttpStatus.OK, true, data, "Success retrieving all homes");
  }

  // route: POST /
  // Creates home object
  async createHome(req, res) {
    let data = req.body;
    console.log(data);

    try {
      if (!data.address || !data.phone || typeof data.address != "string" || typeof data.phone != "string") {
        throw "Data invalid";
      }
      if (!data.phone.match(/^\([2-9]\d\d\) \d\d\d-\d{4}/)) {
        throw "Data invalid";
      }
    } catch (err) {
      this.sendResponse(res, this.HttpStatus.BAD_REQUEST, false, null, "Invalid data");
    }

    data = await this.db.home.select.insert(data).catch(this.throwError);
    this.sendResponse(res, this.HttpStatus.OK, true, data, "Success retrieving all homes");
  }

  // route: GET /:id
  // Retrieves home object with given id
  async getHomeById(req, res) {
    let data = await this.db.home.select.byId(req.params.id).catch(this.throwError);
    this.sendResponse(res, this.HttpStatus.OK, true, data, "Success retrieving home");
  }

  // route: PUT /:id
  // Updates home object with given id
  async updateHome(req, res) {
    //   let data = await this.db.home.select.all().catch(this.throwError);
    //   this.sendResponse(res, this.HttpStatus.OK, true, data, "Success retrieving all homes");
  }

  // route: DELETE /:id
  // Deletes home object with given id
  async deleteHome(req, res) {
    //   let data = await this.db.home.select.all().catch(this.throwError);
    //   this.sendResponse(res, this.HttpStatus.OK, true, data, "Success retrieving all homes");
  }
}
