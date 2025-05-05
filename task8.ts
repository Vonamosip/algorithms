const factory = (xValue, yValue, funcSumName): any => {
    return  {
        x: xValue,
        y: yValue,
        [funcSumName]: function () {
            return this.x + this.y;
        }
    }
}
    const obj1 = factory(12, 23, 'myFunc');
    
    console.log(obj1.x, obj1.y, obj1.myFunc()); // 12, 23, 35