/**
 * 思路1：
    考虑特殊情况：当n==0;任意只的0次方都等于1；
    当n<0时，相当于就倒数；1/myPow(x,-n);
    当n>0时：
    当n为奇数时：相当于计算 x*myPow(x,n-1)
    当n为偶数时：使用分治法，相当于计算：x*x的n/2次方

    作者：xi-ge-yang-yang
    链接：https://leetcode-cn.com/problems/powx-n/solution/50-powx-n-ji-suan-xde-nci-mi-by-xi-ge-yang-yang/
    来源：力扣（LeetCode）
    著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 * 
*/


var myPow=function(x,n){
    if(n==0){
        return 1;
    }   
    if(n<0){
        return 1/myPow(x,-n)
    }
    if(n&1){
        return x*myPow(x,n-1);
    }
    return myPow(x*x,n/2);
}