import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import './AuthPage.css'

export default function AuthPage({setUser}) {
    
  return (
    <>
    <body>
      <h1 id='AuthPageH1'>Register/LogIn</h1>
      <div id='auth'>
        <div class='sign-up'>
          <SignUpForm setUser ={setUser}/>
        </div>
        <div class='login'>
          <LoginForm setUser ={setUser}/>
        </div>
      </div>
    </body>
    </>
  );
}