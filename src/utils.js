console.log('inside utils');

export const square = (x) => x * x ;
export const add = (x,y) => x + y;

//const subtract = (x,y) => x - y;

export default (x,y) => x - y;

//export default subtract; 

//exports - default export and named exports

//export { square, add, subtract as default };  // only one default export is permissible