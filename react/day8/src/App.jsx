
// import UserCard from "./components/UserCard";
// import withBackgroundColor from "./hoc/withBackgroundcolor";

import DisplayComponent from "./components/DisplayComponent"
import withIteration from "./hoc/withIteration"

// const UserCardWithBackground=withBackgroundColor(UserCard)
const IterationComponent=withIteration(DisplayComponent)
const App = () => {
 
  return (
    <div>
      <IterationComponent />
      <DisplayComponent numbers={5} color="red" />
{/* <UserCardWithBackground name="Ajay" role="Frontend Developer"  />
<UserCard name="Vijay" role="Backend Developer"  /> */}
    </div>
  )
}


export default App