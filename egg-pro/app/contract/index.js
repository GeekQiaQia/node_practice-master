module.exports={
    baseRequest:{
        id:{type:'string',descriptioin:'id 唯一键',required:true,example:'1'}

    },
    baseResponse:{
        code:{type:'integer',required:true,example:0},
        data:{type:'string',example:'success'},
        errorMessage:{
            type:'string',
            example:'err message'
        }
    }
}