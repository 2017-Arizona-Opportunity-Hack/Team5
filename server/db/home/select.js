import executeQuery from '../query';
import {
    DBConfig
} from "../config";

var mysql = require('mysql');
var table = DBConfig.dbs.home;

export default {
    byId: async(id) => {
        var sql = "SELECT * FROM " + table + " WHERE id=?";
        sql = mysql.format(sql, [id]);
        return executeQuery(sql);
    },

    byParentId: async(id) => {
        var hp_home = DBConfig.dbs.parent_home;
        var sql = "SELECT " + table + ".id, " + table + ".address, " + table + ".phone FROM (" + hp_home + " JOIN " + table + " ON " + hp_home + ".home_id=" + table + ".id) WHERE " + hp_home + ".hp_id=?";
        sql = mysql.format(sql, [id]);
        return executeQuery(sql);
    },

    byChildId: async(id) => {
        var child = DBConfig.dbs.child;
        var sql = "SELECT " + table + ".id, address, phone FROM (" + child + " JOIN " + table + " ON " + child + ".home_id=" + table + ".id";
        sql = mysql.format(sql, [id]);
        return executeQuery(sql);
    },

    all: async() => {
        var sql = "SELECT * FROM " + table;
        return executeQuery(sql);
    }
};