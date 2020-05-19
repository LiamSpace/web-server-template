import * as http from 'http';

const server = http.createServer((req,res) => {
    res.end('hello node ?');
});

console.log('启动成功,并运行在8080端口')
server.listen(8080);
