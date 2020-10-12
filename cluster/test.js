const request =require('request');

setInterval(()=>{
  request('http://localhost:3000',(errors,response,body)=>{
    console.log('body is ',body);
  });
},1000);