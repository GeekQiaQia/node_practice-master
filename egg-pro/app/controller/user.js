const Controller =require('egg').Controller
/**
* @Controller 用户管理
*/
class userController extends Controller{
    constructor(ctx){
        super(ctx);
    }
 
/**
* @summary 创建用户
* @description 创建用户，记录用户账户/密码/类型 
* @router post /api/user
* @request body createUserRequest *body
* @response 200 baseResponse 创建成功
*/
    async create(){
        const {ctx,service}=this;
        // 有效性检查
        //validate  
        // 校验参数 

       // 校验参数 ctx.validate(ctx.rule.createUserRequest) // 组装参数
        const payload = ctx.request.body || {}
        // 调用 Service 进行业务处理
        const res = await service.user.create(payload)
        ctx.helper.success({ctx,res})
    }
}

module.exports=userController;