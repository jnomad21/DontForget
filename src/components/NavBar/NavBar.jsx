import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({setUser, user}){
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }
    return(
        <nav>
        <Link to="/events">Upcoming Events</Link>
        &nbsp; | &nbsp;
        <Link to="/events/new">New Event</Link>
        &nbsp;| &nbsp;<span>Welcome, {user.name}</span>
        &nbsp;| &nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
      </nav>
    );
    
}