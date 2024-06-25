import Card from "./components/Card"


function App() {
   const name:string="Samual";
  return (
    <>
      <h1>Hello world</h1>
      <Card name={name} age={23} fun={()=>alert('hey')}/>
    </>
  )
}

export default App
