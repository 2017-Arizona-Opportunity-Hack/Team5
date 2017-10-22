import executeQuery from '../query';
import {
  DBConfig
} from "../config";

var mysql = require('mysql');
var table = DBConfig.dbs.administration;

export default {
  byChildIdAndDateRange: async(id, minDate, maxDate) => {
    if (!maxDate) {
      maxDate = new Date();
    } else {
      maxDate = new Date(parseInt(maxDate));
    }

    minDate = new Date(parseInt(minDate)).toMysqlFormat();
    maxDate = maxDate.toMysqlFormat();

    var sql = "SELECT * FROM " + table + " WHERE child_id=? AND date > ? AND date < ?";
    sql = mysql.format(sql, [id, minDate, maxDate]);
    return executeQuery(sql);
  },
  byDateRange: async(minDate, maxDate) => {
    if (!maxDate) {
      maxDate = Date.now();
    } else {
      maxDate = new Date(parseInt(maxDate));
    }

    minDate = new Date(parseInt(minDate));

    var sql = "SELECT * FROM " + table + " WHERE date > ? AND date < ?";
    sql = mysql.format(sql, [minDate, maxDate]);
    return executeQuery(sql);
  },
  byParentId: async(id) => {
    var sql = "SELECT * FROM " + table + " WHERE parent_id=?";
    sql = mysql.format(sql, [id]);
    return executeQuery(sql);
  },
  all: async() => {
    var sql = "SELECT * FROM " + table;
    return executeQuery(sql);
  }
};
