import executeQuery from '../query';
import {
  DBConfig
} from "../config";

var mysql = require('mysql');
var table = DBConfig.dbs.administration;

export default {
  byChildIdAndDateRange: async(id, minDate, maxDate) => {
    console.log("ID:", id)
    console.log(minDate);
    console.log(maxDate);
    if (!maxDate) {
      maxDate = Date.now();
    } else {
      maxDate = parseInt(maxDate);
    }

    minDate = parseInt(minDate);

    console.log(minDate);
    console.log(maxDate);

    var sql = "SELECT * FROM " + table + " WHERE child_id=? AND date > ? AND date < ?";
    sql = mysql.format(sql, [id, minDate, maxDate]);
    return executeQuery(sql);
  },
  byDateRange: async(minDate, maxDate) => {
    if (!maxDate) {
      maxDate = Date.now();
    } else {
      maxDate = parseInt(maxDate);
    }

    minDate = parseInt(minDate);

    var sql = "SELECT * FROM " + table + " WHERE date > ? AND date < ?";
    sql = mysql.format(sql, [minDate, maxDate]);
    return executeQuery(sql);
  },
  byParentId: async(id) => {
    var sql = "SELECT * FROM " + table + " WHERE parent_id=?";
    sql = mysql.format(sql, [id]);
    return executeQuery(sql);
  },
  forCsv: async(id, minDate, maxDate) => {
    if (!maxDate) {
      maxDate = Date.now();
    } else {
      maxDate = parseInt(maxDate);
    }

    minDate = parseInt(minDate);

    var sql = "SELECT Child.name AS ChildName, Physician.name AS PhysicianName, Physician.phone AS PhysicianPhone, Prescription.name AS PrescriptionName, Prescription.reason AS ReasonForPrescription, Prescription.date AS PrescriptionDate, Prescription.dosage AS Dosage, Prescription.units AS Units, Administration.date AS DateAdministered FROM (((Administration JOIN Child ON Child.id=Administration.child_id) JOIN Prescription ON Administration.prescription_id=Prescription.id) JOIN Parent ON Parent.id=Administration.parent_id) JOIN Physician ON Physician.id = Prescription.physician_id WHERE Child.id=? AND Administration.date > ? AND Administration.date < ?"
    sql = mysql.format(sql, [id, minDate, maxDate]);
    return executeQuery(sql);
  },
  all: async() => {
    var sql = "SELECT * FROM " + table;
    return executeQuery(sql);
  }
};
