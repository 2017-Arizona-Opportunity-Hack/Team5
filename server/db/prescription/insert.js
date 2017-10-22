import executeQuery from '../query';
import {
    DBConfig
} from "../config";

var mysql = require('mysql');
var table = DBConfig.dbs.prescription;

export default {
    one: async(item) => {
        var date;
        if (item.date) {
            date = item.date;
        } else {
            date = "DEFAULT";
        }
        var sql = "INSERT INTO " + table + " (id,physician_id,child_id,name,reason,dosage,original_amount,units,date) VALUES(DEFAULT,?,?,?,?,?,?,?," + date + ")";
        var inserts = [item.physician_id, item.child_id, item.name, item.reason, item.dosage, item.original_amount, item.units];
        sql = mysql.format(sql, inserts);
        return executeQuery(sql);
    }
};