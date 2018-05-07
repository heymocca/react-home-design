import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


//components
import Home from './components/home'
import Section from './components/section'

const App = () => {
    return(
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/section/:id" component={Section}/>
            </div>
        </BrowserRouter>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));
