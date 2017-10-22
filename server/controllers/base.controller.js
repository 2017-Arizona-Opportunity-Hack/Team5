const express = require('express');
const HttpStatus = require('http-status-codes');

import {
  JsonResponse
} from "../models/jsonResponse.model";
// import {
//   DB
// } from "../db";

export class BaseController {
  constructor(server) {
    this.server = server;
    this.router = express.Router();
  }

  // get DB() {
  //   return this.DB;
  // }

  sendResponse(res, status, success, data, message) {
    res.status(status);
    res.send(new JsonResponse({
      success: success,
      data: data,
      message: message
    }));
    return;
  }
}
