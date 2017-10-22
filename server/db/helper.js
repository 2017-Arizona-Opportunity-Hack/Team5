var mysql = require('promise-mysql');

import {
    DBConfig
} from "./config";

var connection = null;

async function Connect() {
    var connection = await mysql.createConnection({
        host: DBConfig.host,
        user: DBConfig.username,
        password: DBConfig.password,
        database: "sunshine_acres"
    });
    return connection;
}

export default async() => {
    if (!connection) {
        connection = await new Connect();
    }
    return connection;
};