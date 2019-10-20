import * as React from 'react';
import '../scss/app.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Details from './Pages/Details';
// import NewPost from '../views/NewPost';
// import Edit from '../views/Edit';
// import Login from '../views/Login';
// import Admin from '../views/Admin';
// import Donate from '../views/Donate';
// import Contact from '../views/Contact';

export interface IAppProps { }

console.log(
    "%c NOTE FROM DEVELOPER: %cWelcome, visitor! \n\nYou'll need login credentials for some features in this app like editing, deleting, and writing new blogs. \n\nWhen prompted to login, please use:\n- user: guest@myapp.com \n- password: guest \n\n(Feel free to test anything! I can always change it back.)\n \nTo test Donate page: \nFill out your name, dollar amount, and use \'424242\' repetitively for ALL card information inputs.",
    "background: #0091eb; color: white; font-size: 17px; padding: 2px",
    "color: #0091eb; padding: 1px; font-size: 14px")

class App extends React.Component<IAppProps> {

    render() {
        return (
            <BrowserRouter>
            <Navbar />
                <main className="container">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/:id/details" component={Details} />
                        {/* <Route exact path="/new" component={NewPost} />
                        <Route exact path="/:id/edit" component={Edit} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/admin" component={Admin} />
                        <Route exact path="/donate" component={Donate} />
                        <Route exact path="/contact" component={Contact} /> */}
                    </Switch>
                </main>
            </BrowserRouter>
        )
    }
}

export default App;