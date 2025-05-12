function map(arr:number[] ,cb:(el:number) => number) {
    const result:number[] = [];
    for (let i = 0; i < arr.length; i++){
        result.push(cb(arr[i]));
    }
    return result;
}

console.log(map([1,2,3,4,5],(el) => el * 2));