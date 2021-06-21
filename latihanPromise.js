const getDataPosts = (method, url) => {
  return new Promise((resolve, reject)=>{
    const ajax = new XMLHttpRequest()
    ajax.open(method, url)
    ajax.send()
    ajax.onreadystatechange = function () {
      if (ajax.status == 200) {
        const data = JSON.parse(ajax.responseText)
        resolve(data)
      } else {
        reject('server bermasalah');
      }

    }
  })
 
}
getDataPosts('GET', 'https://jsonplaceholder.typicode.com/posts')
.then((res)=>{
  const result = res
  result.map((item)=>{
    console.log(item.title);
  })
})
.catch((err)=>{
  console.log(err);
})
