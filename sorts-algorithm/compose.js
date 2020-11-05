function compose(middleware){


    return function(context,next){
        let index=-1;
        return dispatch(0);
        function dispatch(i){
            if(i<index) return Promise.reject();;
            index=i;
            let fn=middleware[i];
            if(i===middleware.length){
                fn=next;
            }
            if(!fn){
                return Promise.resolve();
            }
            //  封装中间件，进行递归调用；
            try{
                return Promise.resolve(fn(context,dispatch(null,i+1)));
            }catch(err){
                return Promise.reject(err)
            }
        }
    }
}

function compose(middleware){
    
    return function(context,next){
        let index=-1;
        return dispatch(0);
        function dispatch(i){
            if(i<index){
                return Promise.reject();

            }
            index=i;
            let fn=middleware[i];
            if(i==middleware.length){
                fn=next;
            }
            if(!fn){
                return Promise.resolve();
            }
            try{
                return Promise.resolve(fn(context,dispatch(null,i+1)));
            }catch(err){
                return Promise.reject(err);
            }
        }
    }
}