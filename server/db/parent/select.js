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
        var sql = "SELECT " + table + ".id, " + table + ".name FROM (" + table + " JOIN HP_Home ON " + table + ".id=HP_Home.hp_id) WHERE home_id=?";
        sql = mysql.format(sql, [id]);
        return executeQuery(sql);
    },

    byChildId: async(id) => {
        var sql = "SELECT " + table + ".id, " + table + ".name FROM (((Child JOIN Home ON Child.home_id=Home.id) JOIN HP_Home ON HP_Home.home_id=Home.id) JOIN " + table + " ON " + table + ".id = HP_Home.hp_id) WHERE Child.id = ?";
        sql = mysql.format(sql, [id]);
        return executeQuery(sql);
    },

    all: async() => {
        var sql = "SELECT * FROM " + table;
        return executeQuery(sql);
    }
};