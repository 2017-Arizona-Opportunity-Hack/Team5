import executeQuery from '../query';
import {
    DBConfig
} from "../config";

var mysql = require('mysql');
var table = DBConfig.dbs.administration;

export default {
    byChildId: async(id) => {
        var sql = "SELECT " + table + ".child_id, " + table + ".prescription_id, " + table + ".parent_id, " + table + ".date FROM (" + table + " JOIN " + DBConfig.dbs.child + " ON " + DBConfig.dbs.child + ".id=" + table + ".child_id) WHERE " + DBConfig.dbs.child + ".id=?";
        sql = mysql.format(sql, [id]);
        return executeQuery(sql);
    },

    byPrescriptionId: async(id) => {
        var sql = "SELECT " + table + ".child_id, " + table + ".prescription_id, " + table + ".parent_id, " + table + ".date FROM (" + table + " JOIN " + DBConfig.dbs.prescription + " ON " + DBConfig.dbs.prescription + ".id=" + table + ".prescription_id) WHERE " + DBConfig.dbs.prescription + ".id=?";
        sql = mysql.format(sql, [id]);
        return executeQuery(sql);
    },

    byParentId: async(id) => {
        var sql = "SELECT " + table + ".child_id, " + table + ".prescription_id, " + table + ".parent_id, " + table + ".date FROM (" + table + " JOIN " + DBConfig.dbs.parent + " ON " + DBConfig.dbs.parent + ".id=" + table + ".parent_id) WHERE " + DBConfig.dbs.parent + ".id=?";
        sql = mysql.format(sql, [id]);
        return executeQuery(sql);
    },

    all: async() => {
        var sql = "SELECT * FROM " + table;
        return executeQuery(sql);
    }
};