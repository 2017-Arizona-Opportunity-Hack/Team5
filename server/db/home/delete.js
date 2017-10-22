import executeQuery from '../query';
import {
  DBConfig
} from "../config";

var mysql = require('mysql');
var table = DBConfig.dbs.home;

export default {
  byId: async(id) => {
    var sql = "DELETE FROM " + table + " WHERE id=?";
    sql = mysql.format(sql, [id]);
    return executeQuery(sql);
  }
};
