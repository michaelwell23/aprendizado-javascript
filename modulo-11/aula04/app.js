const getTodos = url => new Promise((resolve, reject) => {
  const request = new XMLHttpRequest()
  
  request.addEventListener('readystatechange', () => {
    const isRequestOk = request.readyState === 4 && request.status === 200
    const isRequestNotOk = request.readyState === 4
  
    if(isRequestOk){
      const data = JSON.parse(request.responseText)
      resolve(data)
    }
    
    if(isRequestNotOk){
      reject('Não foi possivel obter os dados')
    }
  })
  
  request.open('GET', url)
  request.send()
})

getTodos('./json/todos.json')
  .then(todos => {
    console.log(todos)
    return getTodos('./json/todos2.json')
  })
  .then(todos2 => {
    console.log(todos2)
    return getTodos('./json/todos3.json')
  })
  .then(todos3 => console.log(todos3))
  .catch(error => console.log(error))