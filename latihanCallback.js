


const getDataPosts=(method, url, callback)=>{
  const ajax = new XMLHttpRequest()
  ajax.open(method, url)
  ajax.send()
  ajax.onreadystatechange = function () {
    if(ajax.status == 200){
      const data = JSON.parse(ajax.responseText)
      callback(data)
    }else{
      console.log('server bermasalah');
    }
   
  }
}
getDataPosts('GET', 'https://jsonplaceholderx.typicode.com/posts', (data)=>{
  data.map((item)=>{
    console.log(item.title);
  })
})