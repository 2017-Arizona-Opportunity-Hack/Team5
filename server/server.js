let express = require('express');
let bodyParser = require('body-parser');
let cookie = require('cookie');
const HTTPStatusCodes = require('http-status-codes');
let http = require('http');
let https = require('https');
let LocalStrategy = require('passport-local');

import {
  SessionConfig
} from "./config/session.config"
import {
  AuthConfig
} from "./config/auth.config"
