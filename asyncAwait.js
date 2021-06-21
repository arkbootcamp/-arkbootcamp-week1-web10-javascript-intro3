const isGenap = (value) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value % 2 === 0) {
        resolve(`${value} adalah bilangan genap`)
      } else {
        const error = new Error("ada salah memasukan bilangan genap")
        reject(error)
      }
    }, 2000)
  })
}
const getDatabase = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const validate = true
      if (validate) {
        const data = ['baju', 'celana', 'topi']
        resolve(data)
      } else {
        reject('error broo')
      }
    }, 2000)

  })
}

const doTask = async()=>{
  try{
    // console.log('proses 1 dijalankan');
    // console.log('proses 2 dijalankan');

    const genap = await isGenap(10)
    console.log('proses 3 dijalankan');
  }
  catch(e){
    console.log(e);
  }
  finally{
    console.log('hello ini selelu dijalankan');
  }
  
  // const dataProduct = await getDatabase()
  // console.log('proses 4 dijalankan');
  // const result = {
  //   genap: genap,
  //   product: dataProduct
  // }
}
doTask()