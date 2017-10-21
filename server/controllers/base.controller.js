const express = require('express');
const HttpStatus = require('http-status-codes');

import {
  JsonResponse
} from "../models/jsonResponse.model";

export class BaseController {
  constructor(server) {
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
}
