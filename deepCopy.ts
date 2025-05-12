function deepCopy(obj:any):any {
    let copy : any = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepCopy(obj[key]);
        }
    }   
    return copy;
}

// Test the function
const object: any = {
    id: 0,
    name: 'Obj-name',
    obj1: {
        id: 1,
        name: 'Obj1-name',
        obj2: {
            id: 2,
            name: 'Obj2-name',
        }
    }
    
};

const copiedObject: any = deepCopy(object);
console.log(copiedObject);

