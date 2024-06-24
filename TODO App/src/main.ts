import './style.css'

interface TODO{
  todo:string,
  completed:boolean,
  id:string
}

let todos=<TODO[]> [];

const todoname=document.querySelector('#todoname') as HTMLInputElement
const todolist=document.querySelector('.todolist') as HTMLDivElement
const form=document.querySelector('form') as HTMLFormElement

form.onsubmit=((e:SubmitEvent)=>{
   e.preventDefault()
   const newTodo:TODO={
     todo:todoname.value,
     completed:false,
     id:String(Math.random()*10000)
   }
   todos.push(newTodo)
   todoname.value=""
   console.log(todos);
   insert(todos);

})

const insert=(todos:TODO[])=>{
  todolist.innerText=""
 todos.map((todo:TODO)=>{
      createTodoList(todo)
 })
  
}

const createTodoList=(todo:TODO)=>{
  const checkbox=document.createElement('input') as HTMLInputElement;
  checkbox.setAttribute('type','checkbox')
  checkbox.onchange=()=>{
    todos.map((elm)=>{
      todo.id===elm.id?elm.completed=!elm.completed:elm.completed
    })
    todoitem.className=todo.completed?"cut":""
  }
  const todoitem=document.createElement('p') as HTMLParagraphElement
  todoitem.className=todo.completed?"cut":""
  const btn=document.createElement('button') as HTMLButtonElement
  todoitem.innerText=todo.todo
  todo.completed===true?checkbox.checked=true:checkbox.checked=false
  btn.innerText="❌"
  btn.onclick=()=>{
    todos=todos.filter((elm)=>elm.id!==todo.id)
    insert(todos)
  }
  const div=document.createElement('div') as HTMLDivElement
  div.appendChild(checkbox)
  div.appendChild(todoitem)
  div.appendChild(btn)
 console.log(div);
 
  div.className="todoitems"
  todolist.appendChild(div)

}