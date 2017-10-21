var mysql = require('mysql');

import {
    DBConfig
} from "./config";

export class DBHelper {
    constructor() {
        this._connection = null;
        this.init();
    }

    get connection() {
        return this._connection;
    }

    init() {
        var connection = mysql.createConnection({
            host: DBConfig.host,
            user: DBConfig.username,
            password: DBConfig.password
        });

        connection.connect((err) => {
            if (err) {
                throw "Failed to connect to DB";
            }
            this._connection = connection;
            console.log("DB Connection established:", connection);
        });
    }
}