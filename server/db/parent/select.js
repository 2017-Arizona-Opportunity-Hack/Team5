import executeQuery from '../query';

var mysql = require('mysql');

export default {
    byId: async(id) => {
        var sql = "SELECT * FROM House_Parent WHERE id=?";
        sql = mysql.format(sql, [id]);
        return executeQuery(sql);
    },

    all: async() => {
        var sql = "SELECT * FROM House_Parent";
        return executeQuery(sql);
    }
};