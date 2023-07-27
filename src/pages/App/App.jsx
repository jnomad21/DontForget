import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewEventPage from '../NewEventPage/NewEventPage';
import NavBar from '../../components/NavBar/NavBar';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import WelcomePage from '../WelcomePage/WelcomePage';
import MyEventsPage from '../MyEventsPage/MyEventsPage';
import EventDetailPage from '../EventDetailPage/EventDetailPage'
import MyCalendar from '../../components/MyCalendar/MyCalendar';
import UnLoggedWelcomePage from '../WelcomePage/UnLoggedWelcomePage';
import UnloggedNavBar from '../../components/NavBar/UnloggedNavBar';
import LoginForm from '../../components/LoginForm/LoginForm';
import DemoLogIn from '../../components/DemoLogIn';


export default function App() {
  const [user, setUser] = useState(getUser());


  return (
    <main className="App">
    { user ?
      <>
      <NavBar setUser ={setUser} user = {user}/>
      <Routes>
        <Route path="/events/new" element={<NewEventPage />} />
        <Route path="/events" element={<MyEventsPage />} />
        <Route path="/" element={<WelcomePage />} />
        <Route path="/events/:eventId" element={<EventDetailPage />} />
        <Route path="/events/calendar" element={<MyCalendar />} />
        

      </Routes>
      </>
      :
      <>
      <UnloggedNavBar/>
      <UnLoggedWelcomePage/>
      <div id="unloggedForms">
      <SignUpForm setUser={setUser}/>
      <div>
      <LoginForm setUser={setUser}/>
      <DemoLogIn/>
      </div>
      </div>
      
      {/* <Routes>
        <Route path="/" element={<AuthPage setUser={setUser}/>} />
      </Routes> */}
      </>
    }
  </main>
  );
}


