import executeQuery from '../query';
import {
    DBConfig
} from "../config";

var mysql = require('mysql');
var table = DBConfig.dbs.custody;

export default {
    byChildId: async(id) => {
        var sql = "SELECT * FROM " + table + " WHERE child_id=?";
        sql = mysql.format(sql, [id]);
        return executeQuery(sql);
    },

    byChildIdAndDateRange: async(id, minDate, maxDate) => {
        if (!maxDate) {
            maxDate = Date.now();
        }
        var sql = "SELECT * FROM " + table + " WHERE child_id=? AND date > ? AND date < ?";
        sql = mysql.format(sql, [id, minDate, maxDate]);
        return executeQuery(sql);
    },

    byDateRange: async(minDate, maxDate) => {
        if (!maxDate) {
            maxDate = Date.now();
        }
        var sql = "SELECT * FROM " + table + " WHERE date > ? AND date < ?";
        sql = mysql.format(sql, [minDate, maxDate]);
        return executeQuery(sql);
    },

    byParentId: async(id) => {
        var sql = "SELECT child_id, checkout, checkin FROM ((" + DBConfig.dbs.parent_home + " JOIN Child ON " + DBConfig.dbs.child + ".home_id=" + DBConfig.dbs.parent_home + ".home_id ) JOIN " + table + " ON " + table + ".child_id=" + DBConfig.dbs.child + ".id) WHERE parent_id = ?;";
        sql = mysql.format(sql, [id]);
        return executeQuery(sql);
    },

    all: async() => {
        var sql = "SELECT * FROM " + table;
        return executeQuery(sql);
    }
};