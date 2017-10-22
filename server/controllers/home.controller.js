import {
  BaseController
} from "./base.controller";

export class HomeController extends BaseController {
  constructor(server) {
    super(server);

    // Creates a home object
    this.router.post("/", (req, res) => {
      this.createHome(req, res).catch(err => {
        console.log("Error: ", err);
      });
    });

    // Retrieves all homes
    this.router.get("/", (req, res) => {
      this.getAllHomes(req, res).catch(err => {
        console.log("Error: ", err);
      });
    });

    // Retrieves home object with given id
    this.router.get("/:id", (req, res) => {
      this.getHome(req, res).catch(err => {
        console.log("Error: ", err);
      });
    });

    // Updates home object with given id
    this.router.put("/:id", (req, res) => {
      this.updateHome(req, res).catch(err => {
        console.log("Error: ", err);
      });
    });

    // Deletes home object with given id
    this.router.delete("/:id", (req, res) => {
      this.deleteHome(req, res).catch(err => {
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

  async createHome(req, res) {
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

  async getAllHomes(req, res) {
    try {
      let data = await this.db.home.select.all().catch(err => {
        console.log("Error: ", err);
        this.sendResponse(res, this.HttpStatus.INTERNAL_SERVER_ERROR, false, null, "Error retrieving home data");
      });
      this.sendResponse(res, this.HttpStatus.OK, true, data, "Success retrieving all homes");
    } catch (err) {
      console.log("Error retrieving all homes: ", err);
      this.sendResponse(res, this.HttpStatus.INTERNAL_SERVER_ERROR, false, null, "Error retrieving home data");
    }
  }

  async getHome(req, res) {
    try {
      let data = await this.db.home.select.byId(req.params.id).catch(err => {
        console.log("Error: ", err);
        this.sendResponse(res, this.HttpStatus.INTERNAL_SERVER_ERROR, false, null, "Error retrieving home data");
      });
      this.sendResponse(res, this.HttpStatus.OK, true, data, "Success retrieving home");
    } catch (err) {
      console.log("Error retrieving all homes: ", err);
      this.sendResponse(res, this.HttpStatus.INTERNAL_SERVER_ERROR, false, null, "Error retrieving home data");
    }
  }

  async updateHome(req, res) {
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

  async deleteHome(req, res) {
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
