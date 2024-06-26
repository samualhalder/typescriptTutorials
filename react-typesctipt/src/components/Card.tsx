import React, { useState } from "react"

type Props={
  name:string,
  age:number,
 setter:(React.Dispatch<React.SetStateAction<string>>),
}

type User={
  name:string,
  age:number
}

function Card({name,age,setter}:Props) {
    const [user, setuser] = useState<User>()
  return (
    <div>
        <h3>

            its iniside a Card {name},age {age}
        </h3>
        <input type="text" placeholder="enter somethinng" name="" id="" onChange={(e)=>setter(e.target.value)}/>
        <form action="">

        </form>
    </div>
  )
}

export default Card