import {
    BaseController
} from "./base.controller";

export class ReportController extends BaseController {
    constructor(server) {
        super(server);

        // Retrieves a report by child id and date
        this.router.get("/bychildanddate/:childid", (req, res) => {
            this.getReportByChildAndDate(req, res).catch(err => {
                console.log("Error getting report by child id and date: ", err);
                this.sendServerError(res, "Error getting report by child id and date");
            });
        });

        // Retrieves a report by parent id and date
        this.router.get("/byparent/:parentid", (req, res) => {
            this.getReportByParent(req, res).catch(err => {
                console.log("Error getting report by parent id and date: ", err);
                this.sendServerError(res, "Error getting report by parent id and date");
            });
        });

        // Retrieves a report by date range
        this.router.get("/bydate", (req, res) => {
            this.getReportByDateRange(req, res).catch(err => {
                console.log("Error getting report by date range: ", err);
                this.sendServerError(res, "Error getting report by date range");
            });
        });

        // Error handling
        this.router.all("/", (req, res) => {
            res.status(this.HttpStatus.METHOD_NOT_ALLOWED);
            res.send("Error 405 - Method not allowed");
        });

        this.router.all("/:id", (req, res) => {
            res.status(this.HttpStatus.METHOD_NOT_ALLOWED);
            res.send("Error 405 - Method not allowed");
        });

        this.router.get("/*", (req, res) => {
            res.status(this.HttpStatus.NOT_FOUND);
            res.send("Error 404 - Page not found")
        });
    }

    // route: GET /
    // Retrieves all administration objects
    async getReportByChildAndDate(req, res) {
        console.log(req.query);
        let data = {
            id: req.params.childid,
            minDate: req.query.mindate,
            maxDate: req.query.maxdate
        }

        let qData = await this.db.report.select.byChildIdAndDateRange(data.id, data.minDate, data.maxDate).catch(this.throwError);
        this.sendResponse(res, this.HttpStatus.OK, true, qData, "Success retrieving report");
    }

    // route: GET /
    // Creates a new administration object
    async getReportByParent(req, res) {
        console.log(req.query);
        let data = {
            id: req.params.parentid
        }

        let qData = await this.db.report.select.byParentId(data.id).catch(this.throwError);
        this.sendResponse(res, this.HttpStatus.OK, true, qData, "Success retrieving report");
    }

    // route: GET /:id
    // Retrieves a administration object with the given id
    async getReportByDateRange(req, res) {
        console.log(req.query);
        let data = {
            minDate: req.query.mindate,
            maxDate: req.query.maxdate
        }

        let qData = await this.db.report.select.byDateRange(data.minDate, data.maxDate).catch(this.throwError);
        this.sendResponse(res, this.HttpStatus.OK, true, qData, "Success retrieving report");
    }
}