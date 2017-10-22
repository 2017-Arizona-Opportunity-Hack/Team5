import executeQuery from '../query';
import {
    DBConfig
} from "../config";

var mysql = require('mysql');
var table = DBConfig.dbs.administration;

export default {
    one: async(item) => {
        var date;
        if (item.date) {
            date = item.date;
        } else {
            date = 'DEFAULT';
        }
        var sql = "INSERT INTO " + table + " (child_id, prescription_id, parent_id, date) VALUES(?,?,?," + date + ")";
        var inserts = [item.child_id, item.prescription_id, item.parent_id]
        sql = mysql.format(sql, inserts);
        return executeQuery(sql);
    }
};