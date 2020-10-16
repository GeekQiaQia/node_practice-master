// node 

// toBase64;
Buffer.from('12132').toString('base64')

// decode:

Buffer.from('MTTz','base64').toString();


/**
 * 浏览器端toBase64：btoa 和 atob 都是 window 上的方法，atob 全称 ascii to binary ，反之亦然
 * 
*/

let encodedData = window.btoa("this is a example");
console.log(encodedData); // dGhpcyBpcyBhIGV4YW1wbGU=

let decodeData = window.atob(encodedData);
console.log(decodeData); // this is a example