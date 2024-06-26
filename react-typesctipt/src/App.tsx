import { useEffect, useState } from "react"

type User={
  name:string,
  age:number
}


function App() {

   const [user, setuser] = useState<User>()
   const handleSubmit=(e:React.FormEvent<HTMLFormElement>):void=>{
    e.preventDefault()
    console.log("sublitted");
    
    console.log(user);
   }
 
   const handleChange=(e:React.ChangeEvent<HTMLInputElement>):void=>{
      setuser((pre)=>({...pre!,[e.target.name]: e.target.name==='name'?e.target.value:+e.target.value}))
   }

  return (
    <>
      <form  onSubmit={handleSubmit}>
        <input type="text" name="name" id="" value={user?.name || ""} onChange={e=>handleChange(e)}/>
        <input type="text" name="age" id="" value={user?.age || 0} onChange={(e)=>handleChange(e)} />
         <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default App
