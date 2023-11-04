const showTodoList = document.getElementById('showTodoList');
const createUserBtn = document.getElementById('createUserButton');
const userEmail = document.getElementById('email');
const userPasssword = document.getElementById('password');
const userName = document.getElementById('name');
const isEmailUnique = userDb.every(user => user.email != email);
const showAddUserFormBtn = document.getElementById('showAddUserFormBtn');
const UserCard = document.getElementById('userCard');
const todoCard = document.getElementById('todoCard');
const todosDiv = document.getElementById('todosDiv');
const userDiv = document.getElementById('usersDiv');
 const showUserList = document.getElementById('showUserList');
 const userNumber = document.getElementById('number');
 const todoNumber = document.getElementById('todoNumber');
  const userCount = userDb.length;
  let todoCounter = 1
  // const todoCount = userDb.forEach(item => {
  //   item.todos.length
  // })
  userNumber.textContent = userCount;
  // todoNumber.textContent = todoCount
 
  function showUsers(){
  showUserList.innerHTML = ''
  userDb.forEach(item => {
    
    const span = document.createElement('span')
    const li = document.createElement('li')
  
    li.innerText = item.id  + ': ' + '  '  +   item.name
   
    const deleteButton = document.createElement('Button')
  const editButton =document.createElement('Button')
    deleteButton.textContent = 'Delete'
   deleteButton.addEventListener('click',function(){
    deleteTodo(index)
   })
  
   editButton.textContent = 'Edit'
   editButton.addEventListener('click',function(){
    editTodo(index)
   })
   span.appendChild(editButton)
   span.appendChild(deleteButton)
   li.appendChild(span)
   showUserList.appendChild(li)
   userDiv.appendChild(showUserList)
  
 })
}

 function showTodo(){

  showTodoList.innerHTML = ''
 
 userDb.forEach(function(item){
  item.todos.forEach((todo) => {
   const span = document.createElement('span')
   const li = document.createElement('li')
 
   li.innerHTML = `      <span>${todoCounter}</span>      <span>${item.name}</span>
   <span>${todo.id}</span>
   <span>${todo.text}</span>
   <span>${todo.isCompleted}</span>

` 
// todo.id  + ': ' + '  '  +   todo.text   + ': ' + '  '  +   todo.isCompleted
  
   const deleteButton = document.createElement('Button')
 const editButton =document.createElement('Button')
   deleteButton.textContent = 'Delete'
  deleteButton.addEventListener('click',function(){
   deleteTodo(index)
  })
 
  editButton.textContent = 'Edit'
  editButton.addEventListener('click',function(){
   editTodo(index)
  })
  span.appendChild(editButton)
  span.appendChild(deleteButton)
  li.appendChild(span)
  showTodoList.appendChild(li)
})
 })
 }
 
todoCard.addEventListener('click',function(){
  todosDiv.style.display = 'block';
  userDiv.style.display = 'none';
  showTodo()

})
UserCard.addEventListener('click',function(){
  userDiv.style.display = 'block';
  todosDiv.style.display = 'none';
showUsers()
})

function showUsersDiv(){
  userDiv.style.display = 'block';
  todosDiv.style.display = 'none';
}
function showTodosDiv(){
  todosDiv.style.display = 'block';
  userDiv.style.display = 'none';
 showTodo()
}


// createUserBtn.addEventListener('click',function(e){
//   e.preventdefault()
//   if(userEmail != userDb.email){
//     const newUser = {
//       id: userDb.length+1,
//       name: userName.value,
//       password: userPasssword.value,
//       email: userEmail.value,
//       todos: todos
//     };
//     userDb.push(newUser);
//     localStorage.setItem('user', JSON.stringify(userDb))
//     alert("New User Created")
//   }
//   else{
//     alert("Email is already in use")
//   }
   
// })
// function search(arr,pattern){
//   const matchingElements = []
//   const regex = new
//   RegExp(pattern)
//   for(let i = 0; i < arr.length; i++){
//     if(regex.test(arr[i])){
//       matchingElements.push(arr[i])
//     }
//     // console.log(matchingElements)
//   }
// }
// const fruits = ['apple','orange','carrot','olive','bread','yam','pasta','rice','beans']
// const pattern = /^[a-z]/gim
// const matchingElements = search(fruits,pattern)

