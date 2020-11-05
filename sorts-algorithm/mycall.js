Function.prototype.call=function(context,...args){
    
    context=context===null?window:context;

    // 保证 context是一个对象；
    let  contextType=typeof context;
    if(!/^(oject|function)$/i.test(contextType){
        context=Object(context);
    }
    context['fn']=this;
    let result=context['fn'](...args);
    delete context['fn']
    return result;
}