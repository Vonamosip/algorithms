
const obj: any = {
    id: 0,
    name: 'Obj-name',
    toString: function(): string {
        return this.name;
    },
    valueOf: function() : number {
        return this.id;
    },
    
};

console.log(`Name: ${obj}`); 		// Name: Obj-name
console.log(+obj);            		// 0
console.log(obj + 10);        		// 10