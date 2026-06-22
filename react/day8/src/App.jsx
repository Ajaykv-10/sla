
import UserCard from "./components/UserCard";
import withBackgroundColor from "./hoc/withBackgroundcolor";
const UserCardWithBackground=withBackgroundColor(UserCard)
const App = () => {
 
  return (
    <div>
     
<UserCardWithBackground name="Ajay" role="Frontend Developer"  />
<UserCard name="Vijay" role="Backend Developer"  />
    </div>
  )
}


export default App