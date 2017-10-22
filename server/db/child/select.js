import executeQuery from '../query';
import {
    DBConfig
} from "../config";

var mysql = require('mysql');
var table = DBConfig.dbs.child;



export default {
    byId: async(id) => {
        var sql = "SELECT * FROM " + table + " WHERE id=?";
        sql = mysql.format(sql, [id]);
        return executeQuery(sql);
    },

    byHomeId: async(id) => {
        var sql = "SELECT * FROM " + table + " WHERE home_id=?";
        sql = mysql.format(sql, [id]);
        return executeQuery(sql);
    },

    byParentId: async(id) => {
        var sql = "SELECT " + table + ".id, " + table + ".name, " + table + ".home_id FROM (((" + DBConfig.dbs.parent + " JOIN " + DBConfig.dbs.parent_home + " ON " + DBConfig.dbs.parent + ".id=" + DBConfig.dbs.parent_home + ".parent_id) JOIN " + DBConfig.dbs.home + " ON " + DBConfig.dbs.home + ".id=" + DBConfig.dbs.parent_home + ".home_id) JOIN " + table + " ON " + table + ".home_id=" + DBConfig.dbs.home + ".id) WHERE " + DBConfig.dbs.parent_home + ".id=?";
        sql = mysql.format(sql, [id]);
        return executeQuery(sql);
    },

    all: async() => {
        var sql = "SELECT * FROM " + table;
        return executeQuery(sql);
    }
};