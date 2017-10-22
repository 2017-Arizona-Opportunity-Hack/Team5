import executeQuery from '../query';
import {
    DBConfig
} from "../config";

var mysql = require('mysql');
var table = DBConfig.dbs.physician;

export default {
    one: async(item) => {
        var sql = "INSERT INTO " + table + " (id,name,phone) VALUES(DEFAULT,?,?)";
        var inserts = [item.name, item.phone];
        sql = mysql.format(sql, inserts);
        return executeQuery(sql);
    }
};