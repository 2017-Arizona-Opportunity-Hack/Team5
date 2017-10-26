import executeQuery from '../query';
import {
    DBConfig
} from "../config";

var mysql = require('mysql');
var table = DBConfig.dbs.home;

export default {
    one: async(id, home) => {
        if (!home.id || !home.address || !home.phone) {
            throw "Missing attribute on home";
        }
        var sql = "UPDATE " + table + " SET address = ?, phone = ? WHERE id = ?"
        var inserts = [home.address, home.phone];
        sql = mysql.format(sql, inserts);
        return executeQuery(sql);
    }
};