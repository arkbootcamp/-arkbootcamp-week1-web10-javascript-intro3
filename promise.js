const janjian = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    const validasi = true
    const data = "my name is muhammad risano"
    if (validasi) {
      resolve(data)
    } else {
      reject('data kosong')
    }
  },2000)
 
})

// const result = janjian
// console.log(result);
// janjian.then((res)=>{
//   console.log(res);
// })
janjian
.then((res)=>{
  console.log(res);
})
.catch((err)=>{
  console.log(err);
})
