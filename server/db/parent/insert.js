import executeQuery from '../query';
import {
    DBConfig
} from "../config";

var mysql = require('mysql');
var table = DBConfig.dbs.parent;

export default {
    one: async(item) => {
        var sql = "INSERT INTO " + table + " (id,name) VALUES(DEFAULT,?)";
        var inserts = [item.name]
        sql = mysql.format(sql, inserts);
        return executeQuery(sql);
    }
};