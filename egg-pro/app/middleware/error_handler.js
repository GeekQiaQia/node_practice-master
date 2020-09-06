/**
 * @description 集中的错误处理；
 *  中间件工厂
 * **/
'use strict'

module.exports=(options,app)=>{
    return async function(ctx,next) {
        try{
            await next();
        }catch(err){
            // 所有的异常都在app 抛出一个error事件，框架记录这一错误事件
            app.emit('error',err,this);
            const status=err.status||500;
            //生产环境时 500 错误的详细错误内容不返回给客户端，因为可能包含敏感信息
            const error =err.status==500&&app.config.env==='prod'?
            'Internal Server Error':
            err.message
            //// 服务端自身的处理逻辑错误(包含框架错误500 及 自定义业务逻辑 错误533开始 ) 客户端请求参数导致的错误(4xx开始)，设置不同的状态码
            ctx.body={
                code:status,
                message:error
            }
            // 用户请求错误处理；
            if(status===422){
                ctx.body.detail=err.errors
            }

            ctx.status=200;
        }
    }
}

// add middleware in config.default.js; 