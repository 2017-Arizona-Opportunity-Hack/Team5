import executeQuery from '../query';
import {
  DBConfig
} from "../config";

var mysql = require('mysql');
var table = DBConfig.dbs.child;

export default {
  byId: async(id) => {
    var sql = "UPDATE " + table + " WHERE id=? SET is_deleted=true";
    var inserts = [id];
    sql = mysql.format(sql, inserts);
    return executeQuery(sql);
  }
};
