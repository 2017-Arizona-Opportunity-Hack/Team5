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
        var sql = "SELECT * FROM " + table + " WHERE child_id=? AND date > ? AND date < ?";
        sql = mysql.format(sql, [id, minDate, maxDate]);
        return executeQuery(sql);
    },

    byDateRange: async(minDate, maxDate) => {
        var sql = "SELECT * FROM " + table + " WHERE date > ? AND date < ?";
        sql = mysql.format(sql, [minDate, maxDate]);
        return executeQuery(sql);
    },

    all: async() => {
        var sql = "SELECT * FROM " + table;
        return executeQuery(sql);
    }
};