function binarySearch(arr,item,start,end){
    let mid=Math.floor((start+end)/2);
    if(item==arr[mid]){
        return mid
    }else if(item<arr[mid]){
       return  binarySearch(arr,item,start,mid-1);
    }else{
        return binarySearch(arr,item,mid+1,end);
    }
    return false;
}