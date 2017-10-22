import executeQuery from '../query';
import {
    DBConfig
} from "../config";

var mysql = require('mysql');
var table = DBConfig.dbs.custody;

export default {
    one: async(item) => {
        var checkin;
        if (item.checkin) {
            checkin = item.checkin;
        } else {
            checkin = "DEFAULT";
        }
        var sql = "INSERT INTO " + table + " (child_id, checkout, checkin) VALUES(?,?," + checkin + ")";
        var inserts = [item.child_id, item.checkout]
        sql = mysql.format(sql, inserts);
        return executeQuery(sql);
    }
};