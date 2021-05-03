import {Link, NavLink} from 'react-router-dom'
import * as userService from '../../utilities/users-service'

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <NavLink exact activeStyle={{color: 'orange'}} to="/puppies/list">Puppies List</NavLink>
      &nbsp; | &nbsp;
      <NavLink exact activeStyle={{color: 'orange'}} to="/puppies/add">Add Puppy</NavLink>
      &nbsp; | &nbsp; <span>Welcome, {user.name} !</span>
      &nbsp; | &nbsp; <Link to='' onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}