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
        var sql = "SELECT id, address, phone FROM (HP_Home JOIN " + table + " ON HP_Home.home_id=" + table + ".id) WHERE HP_Home.hp_id=?";
        sql = mysql.format(sql, [id]);
        return executeQuery(sql);
    },

    byChildId: async(id) => {
        var sql = 'SELECT ' + table + '.id, address, phone FROM (Child JOIN ' + table + ' ON Child.home_id=' + table + '.id';
        sql = mysql.format(sql, [id]);
        return executeQuery(sql);
    },

    all: async() => {
        var sql = "SELECT * FROM " + table;
        return executeQuery(sql);
    }
};