import executeQuery from '../query';
import {
    DBConfig
} from "../config";

var mysql = require('mysql');
var table = DBConfig.dbs.prescription;

export default {
    one: async(id, prescription) => {
        if (!prescription.id || !prescription.physician_id || !prescription.child_id || !prescription.name || !prescription.reason || !prescription.dosage || !prescription.original_amount || !prescription.units || !prescription.date) {
            throw "Missing attribute on prescription";
        }
        var sql = "UPDATE " + table + " SET physician_id = ?, child_id = ?, name = ?, reason = ?, dosage = ?, original_amount = ?, units = ?, date = ? WHERE id = ?"
        var inserts = [
            prescription.physician_id,
            prescription.child_id,
            prescription.name,
            prescription.reason,
            prescription.dosage,
            prescription.original_amount,
            prescription.units,
            prescription.date,
            prescription.id
        ];
        sql = mysql.format(sql, inserts);
        return executeQuery(sql);
    }
};