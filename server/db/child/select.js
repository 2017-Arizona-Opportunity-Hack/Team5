import executeQuery from '../query';

var mysql = require('mysql');

export default {
    byId: async(id) => {
        var sql = "SELECT * FROM Child WHERE id=?";
        sql = mysql.format(sql, [id]);
        return executeQuery(sql);
    },

    byHomeId: async(id) => {
        var sql = "SELECT * FROM Child WHERE home_id=?";
        sql = mysql.format(sql, [id]);
        return executeQuery(sql);
    },

    all: async() => {
        var sql = "SELECT * FROM Child";
        return executeQuery(sql);
    }
};