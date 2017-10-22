import executeQuery from '../query';
import {
    DBConfig
} from "../config";

var mysql = require('mysql');
var table = DBConfig.dbs.child;

export default {
    one: async(item) => {
        var sql = "INSERT INTO " + table + " (id,name,home_id) VALUES(DEFAULT,?,?)";
        var inserts = [item.name, item.home_id];
        sql = mysql.format(sql, inserts);
        return executeQuery(sql);
    }
};