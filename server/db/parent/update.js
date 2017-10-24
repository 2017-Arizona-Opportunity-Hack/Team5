import executeQuery from '../query';
import {
    DBConfig
} from "../config";

var mysql = require('mysql');
var table = DBConfig.dbs.parent;

export default {
    one: async(id, parent) => {
        if (!parent.id || !parent.name) {
            throw "Missing attribute on parent";
        }
        var sql = "UPDATE " + table + " SET name = ? WHERE id = ?"
        var inserts = [parent.name, parent.id];
        sql = mysql.format(sql, inserts);
        return executeQuery(sql);
    }
};