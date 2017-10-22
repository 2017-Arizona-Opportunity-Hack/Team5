const express = require('express');
const HttpStatus = require('http-status-codes');

import {
  JsonResponse
} from "../models/jsonResponse.model";
import DB from "../db";

export class BaseController {
  constructor(server) {
    this.db = DB;
    this.HttpStatus = HttpStatus;
    this.server = server;
    this.router = express.Router();
  }

  sendResponse(res, status, success, data, message) {
    res.status(status);
    res.send(new JsonResponse({
      success: success,
      data: data,
      message: message
    }));
    return;
  }

  sendServerError(res, message) {
    this.sendResponse(res, this.HttpStatus.INTERNAL_SERVER_ERROR, false, null, message);
  }

  throwError(err) {
    throw err;
  }
}
