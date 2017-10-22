import {
  IndexController
} from "../controllers/index.controller";
import {
  HomeController
} from "../controllers/home.controller";
import {
  ChildController
} from "../controllers/child.controller";
import {
  ParentController
} from "../controllers/parent.controller";
import {
  PhysicianController
} from "../controllers/physician.controller";
import {
  AdministrationController
} from "../controllers/administration.controller";
import {
  PrescriptionController
} from "../controllers/prescription.controller";
import {
  CustodyController
} from "../controllers/custody.controller";
import {
  ReportController
} from "../controllers/report.controller";

export class Router {
  constructor(server) {
    this.server = server;

    this.indexController = new IndexController(this.server);
    this.homeController = new HomeController(this.server);
    this.childController = new ChildController(this.server);
    this.parentController = new ParentController(this.server);
    this.physicianController = new PhysicianController(this.server);
    this.administrationController = new AdministrationController(this.server);
    this.prescriptionController = new PrescriptionController(this.server);
    this.custodyController = new CustodyController(this.server);
    this.reportController = new ReportController(this.server);

    this.init();
  }

  init() {
    this.server.app.use('/home', this.homeController.router);
    this.server.app.use('/child', this.childController.router);
    this.server.app.use('/parent', this.parentController.router);
    this.server.app.use('/physician', this.physicianController.router);
    this.server.app.use('/administration', this.administrationController.router);
    this.server.app.use('/prescription', this.prescriptionController.router);
    this.server.app.use('/custody', this.prescriptionController.router);
    this.server.app.use('/report', this.reportController.router);
    this.server.app.use('/', this.indexController.router);
  }
}
