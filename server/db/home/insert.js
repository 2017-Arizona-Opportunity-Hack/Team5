import executeQuery from '../query';
import {
    DBConfig
} from "../config";

var mysql = require('mysql');
var table = DBConfig.dbs.home;

export default {
    one: async(item) => {
        var sql = "INSERT INTO " + table + " (id, address, phone) VALUES(DEFAULT,?,?)";
        var inserts = [item.address, item.phone]
        sql = mysql.format(sql, inserts);
        return executeQuery(sql);
    }
};