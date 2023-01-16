fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    console.log('Response', response)
    return response.json()
  })
  .then(users => {
    console.log(users)
  })
  .catch(error => console.error(error))


// ASYNC & AWAIT
const getComments = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments')
  const comments = await response.json()
  console.log(comments);
}

const logComments = async() => {
  const comments = await getComments()
  console.log(comments)
}

console.log(1)
console.log(2)

logComments()

console.log(3)
console.log(4)
