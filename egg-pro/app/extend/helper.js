 //Helper 函数用来提供一些实用的 utility 函数。我们可以将一些常用的动作抽离在 helper.js 里面成为一个独立的函数
// extend/helper.js  
//  eggjs 框架约定 extend/helper.js 中的方法会自动加载，挂载到ctx对象；
const moment = require('moment') 

// 格式化时间
exports.formatTime=time=>moment(time).format('YYYY-MM-DD HH:mm:dd');

// 处理统一成功响应返回；
exports.success=({ctx,res=null,msg='请求成功'})=>{
    ctx.body={
            code:0,
            data:res,
            msg
    }   
    ctx.status=200;
}