// str='aaaabbcccddddd'

function getMaxChar(str){
    let o={},len=str.length;
    for(let i=0;i<len;i++){ 
        let char=str.charAt(i);
        if(o[char]){
            o[char]++;
        }else{
            o[char]=1;
        }
    }
    // 统计最大出现字符；
    let max=0;
    let maxChar=null;
    for(let key in o){
        if(max<o[key]){
            max=o[key];
            maxChar=key;
        }
    }
    return [maxChar,max]
}