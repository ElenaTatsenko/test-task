import './App.css';
import UsersList from './components/UsersList/UsersList'
import users from './users.json'

const App = () => {
  return  <UsersList users = {users}/>

}    
export default App;
//