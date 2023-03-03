import './App.css';
import UsersList from './components/UsersList/UsersList'
//import userLogo from './images/Hansel.png'
import users from './users.json'

const App = () => {
  console.log(users.avatar)
  return  <UsersList users = {users}/>

}    
export default App;
