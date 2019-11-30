let todos = [
    // {
    //     text:'todo 1',
    //     completed:false,
    // },
    
    // {
    //     text:'todo 2',
    //     completed:true,
    // }

]

const generateTodo = function (todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    return p
}
//save todo from input
const saveTodo = function(){

}

document.querySelector('#new-todos').addEventListener('submit',function(e){
    e.preventDefault()
    todos.push({
        text:e.target.elements.text.value,
        completed:false
    })
    renderTodos(todos)
    e.target.elements.text.value=""
})



const renderTodos = function(todos){

    //clear
    document.querySelector('#todos').innerHTML=""
    todos.forEach(function(todos) {
        document.querySelector('#todos').appendChild(generateTodo(todos))
    });
}
renderTodos(todos)