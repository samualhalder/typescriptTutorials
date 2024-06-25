

function Card({name,age,fun}:{
    name:string,
    age:number,
    fun:()=>void,
}) {
    fun();
  return (
    <div>
        <h3>
            its iniside a Card {name},age {age}
        </h3>
        
    </div>
  )
}

export default Card