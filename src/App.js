//intro to functional components


//impure function
//functions that always change the return value, whenever we call it
const impure = () => new Date().toLocaleString()

console.log(impure())


//a pure function is a function that never changes the return value
//in React functions are always pure functions!

const Mycomponent = ({myProp}) => {
  return (
    <div>
      Name: {myProp}
    </div>
  )
}


const App = () => {
  return(
    <Mycomponent myProp={'Luca'}/>
  )
}


export default App
