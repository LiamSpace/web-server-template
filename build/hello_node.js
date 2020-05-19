"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var server = http.createServer(function (req, res) {
    res.end('hello node ?');
});
console.log('启动成功,并运行在8080端口');
server.listen(8080);
