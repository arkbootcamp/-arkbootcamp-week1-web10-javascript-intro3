const isGenap = (value)=>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      if (value % 2 === 0) {
        resolve("ini adalah bilangan genap")
      } else {
        const error = new Error("ada salah memasukan bilangan genap")
        reject(error)
      }
    }, 2000)
  })
}


console.log('proses 1');
isGenap(10)
.then((res)=>{
  console.log(res);
})
.catch((err)=>{
  console.log(err.message);
})
console.log('proses 2');