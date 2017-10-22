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

    all: async() => {
        var sql = "SELECT * FROM " + table;
        return executeQuery(sql);
    }
};