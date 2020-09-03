const crypto = require('crypto')
const { array } = require('yargs')
module.exports.createToken = token => {
    const ary = token.split('.')
    if (ary.length !== 3) {
        return
    }
   
    return {
        //利用Buffer进行Base64解 码 
        getExp: () => {
            let str=ary[1];
            // ##BEGIN## 代码已加密
            var jsonData=new Buffer.from(str, 'base64').toString();
            return JSON.parse(jsonData).exp;
           
            // ##END##
        },

        //Hmac 类是用于创建加密 Hmac 摘要的工具
        //使用 hash.update() 方法将要计算的数据以流（stream）的方式写入
        //流输入结束后，使用 hash.digest() 方法计算数据的 hash 值。
        verify: key => {
            const hmac = crypto.createHmac('SHA256', key).update(ary[0]+ '.' +  ary[1]).digest('base64');
            
            return hmac === ary[2] + '='
            
        }
    }
}