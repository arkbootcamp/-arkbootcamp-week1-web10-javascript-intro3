// syncro
// const proses1 = ()=>{
//   console.log('proses 1 dijalankan');
// }
// const proses2 = () => {
//   console.log('proses 2 dijalankan');
// }
// const proses3 = () => {
//   console.log('proses 3 dijalankan');
// }
// proses1()
// proses2()
// proses3()

// async
const proses1 = () => {
  console.log('proses 1 dijalankan');
}
const proses2 = () => {
  setTimeout(()=>{
    console.log('proses 2 dijalankan');
  }, 3000)
}
const proses3 = () => {
  console.log('proses 3 dijalankan');
}
proses1()
proses2()
proses3()