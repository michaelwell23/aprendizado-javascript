const getTodos = (url, callback) => {
  const request = new XMLHttpRequest()
  
  request.addEventListener('readystatechange', () => {
    const isRequestOk = request.readyState === 4 && request.status === 200
    const isRequestNotOk = request.readyState === 4
  
    if(isRequestOk){
      const data = JSON.parse(request.responseText)
      callback(null, data)
      return
    }
    
    if(isRequestNotOk){
      callback('Não foi possivel obter os dados', null)
    }
  })
  
  request.open('GET', url)
  request.send()
}

getTodos('./json/todos.json', (error, data) => {
  console.log('Todos 01', data);
  getTodos('./json/todos2.json', (error,data) => {
    console.log('Todos 02', data);
    getTodos('./json/todos3.json', (error, data) => {
      console.log('Todos 03', data)
    })
  })
})

