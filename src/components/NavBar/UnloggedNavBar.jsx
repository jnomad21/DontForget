import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css'
<link href="https://fonts.googleapis.com/css2?family=Caveat&family=Racing+Sans+One&display=swap" rel="stylesheet"></link>

export default function UnloggedNavBar(){
    return(
      <>
      <nav>
        <div>
          <Link className='Logo' to="/"><h4 id='logo'>DontForget</h4></Link>
        </div>
        <ul className='navMid'>
          <li><Link className="link" to="/events">Upcoming Events</Link></li>
          <li><Link className="link" to="/events/calendar">My Calendar</Link></li>
          <li><Link className="link" to="/events/new">New Event</Link></li>
          </ul>
        <ul className="navRight">
          </ul>
        
      </nav>
      </>
    );
    
}