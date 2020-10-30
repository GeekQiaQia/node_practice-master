function getEmpty(o){
    if(Object.prototype.toString.call(o)=='[object,object]'){
        return {};
    }
    if(Object.prototype.toString.call(o)=='[object,Array]'){
        return [];
    }   
    return o;
}

function deepCopyBFS(origin){
    let queue=[];
    let map=new Map() // 记录出现过的对象；
    let target=getEmpty(origin);
    if(origin!==target){
        queue.push([origin,target]);
        map.set(origin,target);
    }

    while(queue.length){
        
        let [ori,tar]=queue.shift();
        for(let key in ori){
            // 处理环；
            if(map.get(ori[key])){
                tar[key]=map.get(ori[key])
                continue;
            }

            tar[key]=getEmpty(ori[key]);
            if(tar[key]!==ori[key]){
                queue.push([ori[key],tar[key]]);
                map.set(ori[key],tar[key]);
            }
        }
    }

    return target;

}



function deepCopyDFS(origin){
	let stack = [];
	let map = new Map(); // 记录出现过的对象，用于处理环

	let target = getEmpty(origin);
	if(target !== origin){
		stack.push([origin, target]);
		map.set(origin, target);
	}

	while(stack.length){
		let [ori, tar] = stack.pop();
		for(let key in ori){
			// 处理环状
			if(map.get(ori[key])){
				tar[key] = map.get(ori[key]);
				continue;
			}

			tar[key] = getEmpty(ori[key]);
			if(tar[key] !== ori[key]){
				stack.push([ori[key], tar[key]]);
				map.set(ori[key], tar[key]);
			}
		}
	}

	return target;
}

https://www.toutiao.com/i6867150625818280455/?tt_from=copy_link&utm_campaign=client_share&timestamp=1604016714&app=news_article&utm_source=copy_link&utm_medium=toutiao_android&use_new_style=1&req_id=2020103008115401001902516528242C92&group_id=6867150625818280455

const debounce=function(fn,delay){
    let timer=null;
    return (...args)=>{
        clearTimeout(timer);
        timer=setTimeout(()=>{
           fn.apply(this,args);
        },delay);
    }
}

const thottle=function(fn,delay){
    let flag=true;
    return (...args)=>{
        if(!flag){
            return;
        }
        flag=false;
        setTimeout(()=>{
           fn.apply(this,args); 
        },delay);
    }
}