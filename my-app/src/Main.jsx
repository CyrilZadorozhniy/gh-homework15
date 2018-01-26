import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home.jsx';
import Blog from './Blog';
import BlogPost from './BlogPost';
import Pages from './Pages';

//Place of test props

let info = { title1:'Creating a unique look.', title2:'Never been easier.'};

//Place of test props

class Main extends React.Component {
    render() {
        return (
            <div>
                <Route exact path='/'  render={()=> <Home data={ info } />}/>
                <Route path='/blog' component={Blog}/>
                <Route path='/blogpost' component={BlogPost}/>
                <Route path='/pages' component={Pages}/>
            </div>

        )
    }
}
export default Main