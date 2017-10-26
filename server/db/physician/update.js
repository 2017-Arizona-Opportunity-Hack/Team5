import executeQuery from '../query';
import {
    DBConfig
} from "../config";

var mysql = require('mysql');
var table = DBConfig.dbs.physician;

export default {
    one: async(id, physician) => {
        if (!physician.id || !physician.address || !physician.phone) {
            throw "Missing attribute on physician";
        }
        var sql = "UPDATE " + table + " SET address = ?, phone = ? WHERE id = ?"
        var inserts = [physician.address, physician.phone];
        sql = mysql.format(sql, inserts);
        return executeQuery(sql);
    }
};