let express = require('express');
let bodyParser = require('body-parser');
let cookie = require('cookie');
const HTTPStatusCodes = require('http-status-codes');
let http = require('http');
let https = require('https');
let passportPackage = require('passport');
let LocalStrategy = require('passport-local');
let session = require('express-session');

let portNumber = 8000;

import {
  SessionConfig
} from "./config/session.config";
import {
  AuthConfig
} from "./config/auth.config";
import {
  Router
} from "./config/routing.config";
import {
  JsonResponse
} from "./models/jsonResponse.model";

class Server {
  constructor() {
    this.app = express();
    // this.passport = passportPackage();

    let nonSecure = http.createServer(this.app).listen(portNumber);

    let sessionMiddleware = session({
      secret: SessionConfig.secret,
      resave: false,
      saveUninitialized: false
    });

    this.app.use(sessionMiddleware);

    // Passport config
    // require('./config/passport.config')(this.passport);

    console.log("Passport loaded");

    this.app.use(
      bodyParser.urlencoded({
        extended: false
      })
    );
    this.app.use(bodyParser.json());
    // this.app.use(this.passport.initialize());
    // this.app.use(this.passport.session());

    this.router = new Router(this);
    console.log("Routes loaded");
    console.log("Server is listening...");

  }

}

let server = new Server();
