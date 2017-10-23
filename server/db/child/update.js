import executeQuery from '../query';
import {
    DBConfig
} from "../config";

var mysql = require('mysql');
var table = DBConfig.dbs.child;

export default {
    one: async(id, child) => {
        if (!child.name || !child.home_id || !child.is_deleted || !child.id) {
            throw "Missing attribute on child";
        }
        var sql = "UPDATE " + table + " SET name = ?, home_id = ?, is_deleted = ? WHERE id = ?"
        var inserts = [child.name, child.home_id, child.is_deleted, child.id];
        sql = mysql.format(sql, inserts);
        return executeQuery(sql);
    }
};