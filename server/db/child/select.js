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
        var sql = "SELECT " + table + ".id, " + table + ".name, " + table + ".home_id FROM (((House_Parent JOIN HP_Home ON House_Parent.id=HP_Home.hp_id) JOIN Home ON Home.id=HP_Home.home_id) JOIN " + table + " ON " + table + ".home_id=Home.id) WHERE House_Parent.id=?";
        sql = mysql.format(sql, [id]);
        return executeQuery(sql);
    },

    all: async() => {
        var sql = "SELECT * FROM " + table;
        return executeQuery(sql);
    }
};