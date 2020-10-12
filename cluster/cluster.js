const cluster =require('cluster');
const os =require('os');
const cpuNums=os.cpus().length;
const process =require("process");

var workers={}
// 如果是主进程；
if(cluster.isMaster){
 //  master feature; 监听异常，并重启子进程；
//    cluster.on('exit',(worker,code,signal)=>{
//     console.log('工作进程 %d 关闭 (%s). 重启中...', worker.process.pid, signal || code);
//         delete workers[worker.process.pid];
//          worker=cluster.fork();
//         workers[worker.process.pid]=worker;
//    });
//    // 启动多核共享进程；
//    for(var i=0;i<cpuNums.length;i++){
//     var worker=cluster.fork();
//     workers[worker.process.pid]=worker;
//    }
// }else{
//     // 启动监听服务；
//     var app=require('./app');
//     app.listen(3000);
// }
cluster.on('exit', (worker, code, signal) => {
    console.log('工作进程 %d 关闭 (%s). 重启中...', worker.process.pid, signal || code);
            delete workers[worker.process.pid]
            worker = cluster.fork()
            workers[worker.process.pid] = worker
    });
        console.log('numCPUs:', cpuNums)
        for (var i = 0; i < cpuNums; i++) {
            var worker = cluster.fork();
            console.log('init ... pid', worker.process.pid)
            workers[worker.process.pid] = worker;
    }
    } else {
        var app = require('./app');
        app.listen(3000);
    }


// 当主进程被终止，关闭所有的子进程；
process.on('SIGTERM', function () {
    for (var pid in workers) {
        process.kill(pid);
}
    process.exit(0);
});
// 执行测试；
require('./test');