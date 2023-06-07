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

      </Routes>
      </>
      :
      <AuthPage setUser={setUser}/>
    }
  </main>
  );
}


