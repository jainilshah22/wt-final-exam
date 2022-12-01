function isAscOrder(str) {
    const copy=str;
    var array=str.sort((a,b)=>a-b);
    return array=copy ;
}
console.log(isAscOrder([1,2,4,7,19]));
