                           #初始化项目默认配置
                           npm init -y
                           #引入node的引用文件
                           npm install @types/node --save
                           #增加配置文件tsconfig.js[将ts转换成为js]
                           #安装express 简化http操作
                           npm install express --save
                           #安装express 引用文件
                           npm install @types/express
                           #方便开发安装nodemon，自动重启服务器
                           npm install -g nodemon
                           #启动服务器
                           nodemon build/hello_node.js



