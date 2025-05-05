// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

function camelize(str:string):any {
    return str
       .split('-')
       .map((word, index) => {
              if (index === 0) {
                return word;
              }
              return word.charAt(0).toUpperCase() + word.slice(1);
       })
       .join('');
}

console.log(camelize("background-color")); // 'backgroundColor'
console.log(camelize("list-style-image")); // 'listStyleImage'  