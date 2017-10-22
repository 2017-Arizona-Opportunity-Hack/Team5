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

    },

    byParentId: async(id) => {

    },

    all: async() => {
        var sql = "SELECT * FROM " + table;
        return executeQuery(sql);
    }
};