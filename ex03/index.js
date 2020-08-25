const fs = require('fs')
module.exports.parser = path => {
    const readStream = fs.createReadStream(path)
    let reqData = [];
    let size = 0;
    return new Promise((resolve,reject) => {
		
         readStream.on('data',chunk=>{
			 reqData.push(chunk);
			 size+=chunk.length;
		 });
		 
		 readStream.on('end',()=>{
			 const result=Buffer.concat(reqData,size);
			 let jsonData= JSON.parse(result.toString());
			 resolve(jsonData)
		 });
		 
		 readStream.on('error',(err)=>{
			 reject(err);
		 });
    })
}
