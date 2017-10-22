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

    /**
     * …and then create the method to output the date string as desired.
     * Some people hate using prototypes this way, but if you are going
     * to apply this to more than one Date object, having it as a prototype
     * makes sense.
     **/
    Date.prototype.toMysqlFormat = function() {
      /**
       * You first need to create a formatting function to pad numbers to two digits…
       **/
      function twoDigits(d) {
        if (0 <= d && d < 10) return "0" + d.toString();
        if (-10 < d && d < 0) return "-0" + (-1 * d).toString();
        return d.toString();
      }

      return this.getUTCFullYear() + "-" + twoDigits(1 + this.getUTCMonth()) + "-" + twoDigits(this.getUTCDate()) + " " + twoDigits(this.getUTCHours()) + ":" + twoDigits(this.getUTCMinutes()) + ":" + twoDigits(this.getUTCSeconds());
    };
    // this.passport = passportPackage();

    let nonSecure = http.createServer(this.app).listen(portNumber);

    let sessionMiddleware = session({
      secret: SessionConfig.secret,
      resave: false,
      saveUninitialized: false
    });

    this.app.use(sessionMiddleware);
    this.app.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
      res.setHeader('Access-Control-Allow-Method', 'GET, POST, PUT DELETE');
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
      res.setHeader('Access-Control-Allow-Credentials', true);
      next();
    });

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
