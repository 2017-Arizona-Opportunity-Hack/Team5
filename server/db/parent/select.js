import executeQuery from '../query';
import {
    DBConfig
} from "../config";

var mysql = require('mysql');
var table = DBConfig.dbs.parent;

export default {
    byId: async(id) => {
        var sql = "SELECT * FROM " + table + " WHERE id=?";
        sql = mysql.format(sql, [id]);
        return executeQuery(sql);
    },

    byHomeId: async(id) => {
        var sql = "SELECT " + table + ".id, " + table + ".name FROM (" + table + " JOIN " + DBConfig.dbs.parent_home + " ON " + table + ".id=" + DBConfig.dbs.parent_home + ".hp_id) WHERE home_id=?";
        sql = mysql.format(sql, [id]);
        return executeQuery(sql);
    },

    byChildId: async(id) => {
        var sql = "SELECT " + table + ".id, " + table + ".name FROM (((" + DBConfig.dbs.child + " JOIN Home ON Child.home_id=" + DBConfig.dbs.home + ".id) JOIN " + DBConfig.dbs.parent_home + " ON " + DBConfig.dbs.parent_home + ".home_id=" + DBConfig.dbs.home + ".id) JOIN " + table + " ON " + table + ".id = " + DBConfig.dbs.parent_home + ".hp_id) WHERE " + DBConfig.dbs.child + ".id = ?";
        sql = mysql.format(sql, [id]);
        return executeQuery(sql);
    },

    all: async() => {
        var sql = "SELECT * FROM " + table;
        return executeQuery(sql);
    }
};