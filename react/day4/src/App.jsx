import ClassComponent from "./components/ClassComponent"
import ClassLifeCycle from "./components/ClassLifeCycle"
import Counter from "./components/CounterComponent"
import Fruits from "./components/Fruits"
import Students from "./components/StudentsProfile"
import User from "./components/User"
import UseStateComponent from "./components/UseStateComponent"


const App = () => {
  return (
    <div><ClassComponent/>
    <ClassLifeCycle/>
    <UseStateComponent/>
    <Counter/>
    <User/>
    <Fruits/>
    <Students/></div>
  )
}

export default App