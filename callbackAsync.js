

const print = (data)=>{
  console.log(data);
}
// const sayHello = (name, callback)=>{
//   setTimeout(()=>{
//     const myName = 'Ms. '+ name
//     callback(myName)
//   }, 2000)
// }
// console.log('proses 1');
// sayHello('risano', print)
// console.log('proses 2');

const printProduct = (products) => {
  products.map((item) => {
    console.log(item);
    // proses apa
  })
}

const getDatabase = (callback)=>{
   
    setTimeout(()=>{
      const data = ['baju', 'celana', 'topi']
      callback(data)
    }, 2000)
} 

console.log('proses 1');
getDatabase(printProduct)
console.log('proses 2');