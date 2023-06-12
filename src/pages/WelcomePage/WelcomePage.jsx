export default function WelcomePage(){

return(
    <>
    <h1>Welcome to DontForget</h1>

    <div className="welcome">
        <h3>DontForget is an event reminder to track all those pesky little tasks down the road that you might forget.  </h3>
        <ul className="welcomeUL">
            <li>When is my next dentist cleaning?</li>
            <li>I believe I'm due for an oil change soon</li>
            <li>I know there's some wedding in October, but I don't remember whose it is and when</li>
        </ul>
        <br /><br />
        <h3>DontForget has an upcoming events view so you can see all the future events in a list view.</h3>
        <h3>It also has a calendar view if you want to see your events listed out monthly, weekly, daily, etc.</h3>
        <br />
        <br />
        <h2 style={{color:'red'}}>Coming Soon</h2>
            <ul>
                <li>Sortable filtering by category</li>
                <li>SMS/Email alert system as event approaches</li>
            </ul>
    </div>
    </>
)
}