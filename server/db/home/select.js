import executeQuery from '../query';

var mysql = require('mysql');

export default {
    byId: async(id) => {
        var sql = "SELECT * FROM Home WHERE id=?";
        sql = mysql.format(sql, [id]);
        return executeQuery(sql);
    },

    byParentId: async(id) => {
        var sql = "SELECT id, address, phone FROM (HP_Home JOIN Home ON HP_Home.home_id=Home.id) WHERE HP_Home.hp_id=?";
        sql = mysql.format(sql, [id]);
        return executeQuery(sql);
    },

    all: async() => {
        var sql = "SELECT * FROM Home";
        return executeQuery(sql);
    }
};