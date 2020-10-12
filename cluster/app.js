const http=require('http');
const server =http.createServer((request,response)=>{
    Math.random>0.8?aa():"2";
    response.end('hello ');
});

if(!module.parent){
  server.listen(3000);
  console.log('server started at 3000');
}else{
    module.exports=server;
}