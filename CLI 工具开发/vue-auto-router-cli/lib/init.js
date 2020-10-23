// 打印欢迎界面

const {promisify} =require('util');
const figlet =promisify(require('figlet'));
const clear =require('clear');
const chalk =require('chalk');
const { clone } = require('./download');
const { resolve } = require('path');
const { promise } = require('ora');

const log=content=> console.log(chalk.green(content));
const open =require('open');
const spawn =async (...args)=>{
    const {spawn}=require('child_process');
    return new Promise(resolve=>{
        const proc=spawn(...args);
        proc.stdout.pipe(process.stdout);  // 正常输出流；
        proc.stderr.pipe(process.stderr);  // 异常输出流；
        proc.on('close',()=>{
            resolve();
        });
    });
}
module.exports=async name=>{
    // 打印欢迎动画；
     clear();
     const data=await figlet('welcome vite-Cli');
     log(data);

     log(`克隆项目： ${name}`)
     // 从github克隆项目到指定文件夹；
      await clone('github:GeekQiaQia/vite-vue3-demo',name);

     log('安装依赖');
     await  spawn(process.platform === "win32" ? "npm.cmd" : "npm",['install'],{cwd:`./${name}`});
     log(chalk.green(`

     ok:安装完成：
     To Get Start:
     =========================
       cd ${name}
       npm run serve 
     =========================

     
     `));
     
     open('http://localhost:8080');

}

