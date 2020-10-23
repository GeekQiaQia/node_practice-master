/**
 *  如何把一个字符串的大小写取反（大写变小写小写变大写），例如 ’AbC' 变成 'aBc' 。
 * 
*/

function strCaseReverse(str){
    return str.replace(/[a-zA-Z]/g,function(item){
        return /[a-z]/.test(item)?item.toUpperCase():item.toLowerCase();
    });
}

let result=strCaseReverse('AbCdEfG');
console.log(result)